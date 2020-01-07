import { useUser } from 'modules/firebase';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { Note, NoteData } from './types';

const useNotes = () => {
  const user = useUser();
  const firestore = useFirestore();

  const notesRef = firestore()
    .collection('users')
    .doc(user?.uid ?? 'public')
    .collection('notes');
  const notes = useFirestoreCollectionData<Note>(notesRef, { idField: 'id' });

  const addNote = async (newNote: NoteData) => {
    return await notesRef.add({
      ...newNote,
      createdOn: new Date(),
      modifiedOn: new Date(),
    });
  };

  const removeNote = async (noteId: string) => {
    return await notesRef.doc(noteId).delete();
  };

  const updateNote = async (updatedNote: Note) => {
    return await notesRef.doc(updatedNote.id).update({
      ...updatedNote,
      modifiedOn: new Date(),
    });
  };

  return { notes, addNote, removeNote, updateNote };
};

export default useNotes;
