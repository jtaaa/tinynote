import { useFirestore, useFirestoreDocData } from 'reactfire';
import { useUser } from 'modules/firebase';
import { Note } from './types';

const useNote = (noteId: string) => {
  const user = useUser();
  const firestore = useFirestore();

  const noteRef = firestore()
    .collection('users')
    .doc(user?.uid ?? 'public')
    .collection('notes')
    .doc(noteId);
  const note = useFirestoreDocData<Note>(noteRef, { idField: 'id' });

  const removeNote = async () => {
    return await noteRef.delete();
  };

  const updateNote = async (updatedNote: Note) => {
    return await noteRef.update({
      ...updatedNote,
      modifiedOn: new Date(),
    });
  };

  return { note, removeNote, updateNote };
};

export default useNote;
