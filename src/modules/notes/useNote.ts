import { useState, useEffect, useMemo } from 'react';
import { useFirestore, useFirestoreDocData } from 'reactfire';
import { useUser } from 'modules/firebase';
import { Note, RawNote } from './types';
import {
  noteEqual,
  parseRawNote,
  createNewLine,
  convertStringBodyToLines,
} from './utils';
import useThrottle from 'utils/useThrottle';

type UseNoteOptions = {
  throttleWait?: number;
};
const useNote = (noteId: string, { throttleWait }: UseNoteOptions = {}) => {
  const user = useUser();
  const firestore = useFirestore();

  const noteRef = firestore()
    .collection('users')
    .doc(user?.uid ?? 'public')
    .collection('notes')
    .doc(noteId);
  const rawNote = useFirestoreDocData<RawNote>(noteRef, { idField: 'id' });
  const note = parseRawNote(rawNote);

  const removeNote = async () => {
    return await noteRef.delete();
  };

  const [tempNote, setTempNote] = useState(note);

  const updateNote = useMemo(
    () => async (updatedNote: Note) => {
      setTempNote(updatedNote);
      const note = {
        ...updatedNote,
        modifiedOn: firestore.Timestamp.fromDate(new Date()),
        createdOn: firestore.Timestamp.fromDate(updatedNote.createdOn),
      };
      return await noteRef.update(note);
    },
    [noteRef, firestore.Timestamp],
  );

  const throttled = useThrottle(
    async (tempNote: Note, note: Note) => {
      if (!noteEqual(tempNote, note)) {
        await updateNote(tempNote);
      }
    },
    { wait: throttleWait },
  );

  useEffect(() => {
    throttled.current(tempNote, note);
  }, [tempNote, note, throttled]);

  const saveTempNote = useMemo(
    () => async () => {
      return await noteRef.update({
        ...tempNote,
        modifiedOn: firestore.Timestamp.fromDate(new Date()),
        createdOn: firestore.Timestamp.fromDate(tempNote.createdOn),
      });
    },
    [noteRef, tempNote, firestore.Timestamp],
  );

  const [newLine, setNewLine] = useState('');

  const saveNewLine = useMemo(
    () => async () => {
      if (newLine.length !== 0) {
        setTempNote((tempNote: Note) => {
          let body = tempNote.body;
          if (Array.isArray(body)) {
            body = [...body, createNewLine(newLine)];
          } else {
            body = convertStringBodyToLines(tempNote.body as string);
          }
          return {
            ...tempNote,
            body,
          };
        });
      }
    },
    [newLine],
  );

  return {
    note,
    removeNote,
    updateNote,
    tempNote,
    setTempNote,
    saveTempNote,
    newLine,
    setNewLine,
    saveNewLine,
  };
};

export default useNote;
