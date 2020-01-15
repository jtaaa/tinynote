import { useState, useEffect, useMemo } from 'react';
import { useFirestore, useFirestoreDocData } from 'reactfire';
import { useUser } from 'modules/firebase';
import throttle from 'lodash/throttle';
import { Note, RawNote } from './types';
import { noteEqual } from './utils';

const THROTTLE_WAIT = 5000;

type UseNoteOptions = {
  throttleWait?: number;
};
const useNote = (
  noteId: string,
  { throttleWait = THROTTLE_WAIT }: UseNoteOptions = {},
) => {
  const user = useUser();
  const firestore = useFirestore();

  const noteRef = firestore()
    .collection('users')
    .doc(user?.uid ?? 'public')
    .collection('notes')
    .doc(noteId);
  const rawNote = useFirestoreDocData<RawNote>(noteRef, { idField: 'id' });
  const note: Note = {
    ...rawNote,
    modifiedOn: new Date(rawNote.modifiedOn.seconds),
    createdOn: new Date(rawNote.createdOn.seconds),
  };

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

  const throttled = useMemo(
    () =>
      throttle(async () => {
        if (!noteEqual(tempNote, note)) {
          await updateNote(tempNote);
        }
      }, throttleWait),
    [updateNote, tempNote, note, throttleWait],
  );

  useEffect(() => {
    throttled();
  }, [throttled]);

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

  return { note, removeNote, updateNote, tempNote, setTempNote, saveTempNote };
};

export default useNote;
