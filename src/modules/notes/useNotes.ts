import { useUser } from 'modules/firebase';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { Note, NoteData, RawNote } from './types';
import { parseRawNote } from './utils';

type UseNotesOptions = {
  sorted?: boolean;
};
const useNotes = ({ sorted = true }: UseNotesOptions = {}) => {
  const user = useUser();
  const firestore = useFirestore();

  const notesRef = firestore()
    .collection('users')
    .doc(user?.uid ?? 'public')
    .collection('notes');
  const rawNotes = useFirestoreCollectionData<RawNote>(notesRef, {
    idField: 'id',
  });
  const notes = sorted
    ? rawNotes
        .sort((a, b) => b.modifiedOn.seconds - a.modifiedOn.seconds)
        .map(parseRawNote)
    : rawNotes.map(parseRawNote);

  const addNote = async (newNote: NoteData) => {
    return await notesRef.add({
      ...newNote,
      createdOn: firestore.Timestamp.fromDate(new Date()),
      modifiedOn: firestore.Timestamp.fromDate(new Date()),
    });
  };

  const removeNote = async (noteId: string) => {
    return await notesRef.doc(noteId).delete();
  };

  const updateNote = async (updatedNote: Note) => {
    return await notesRef.doc(updatedNote.id).update({
      ...updatedNote,
      modifiedOn: firestore.Timestamp.fromDate(new Date()),
    });
  };

  return { notes, addNote, removeNote, updateNote };
};

export default useNotes;
