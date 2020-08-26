import React from 'react';
import { useParams } from 'react-router-dom';
import NoteView from './NoteView';
import Page from '../Page';
import { useNote } from 'modules/notes';

type Params = {
  noteId: string;
};

const NotePage: React.FC = () => {
  const noteId = useParams<Params>().noteId;
  const { note } = useNote(noteId);
  const { title } = note;

  return (
    <Page back="/" title={title}>
      <NoteView noteId={noteId} />
    </Page>
  );
};

export default NotePage;
