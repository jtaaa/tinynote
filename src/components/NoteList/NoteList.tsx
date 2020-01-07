import React from 'react';
import { useFirestoreCollectionData, useFirestore } from 'reactfire';
import GreatPrimer from 'components/text/GreatPrimer';

type Note = {
  body: string;
  id: string;
};
const NoteList = () => {
  const firestore = useFirestore();
  const notesRef = firestore().collection('notes');
  const notes = useFirestoreCollectionData<Note>(notesRef);

  return (
    <div>
      {notes.map(note => (
        <GreatPrimer key={note.id}>{note.body}</GreatPrimer>
      ))}
    </div>
  );
};

export default NoteList;
