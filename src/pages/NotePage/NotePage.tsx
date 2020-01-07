import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import NoteView from './NoteView';
import Loading from 'components/Loading';
import Page from '../Page';

type Params = {
  noteId: string;
};

const NotePage: React.FC = () => {
  const noteId = useParams<Params>().noteId;

  return (
    <Page headerOptions={{ back: '/' }}>
      <Suspense fallback={<Loading />}>
        <NoteView noteId={noteId} />
      </Suspense>
    </Page>
  );
};

export default NotePage;
