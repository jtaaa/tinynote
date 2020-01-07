import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Page from 'pages/Page';
import NoteView from './NoteView';
import Loading from 'components/Loading';

type Params = {
  noteId: string;
};

const NotePage: React.FC = () => {
  const noteId = useParams<Params>().noteId;

  return (
    <Page>
      <Suspense fallback={<Loading />}>
        <NoteView noteId={noteId} />
      </Suspense>
    </Page>
  );
};

export default NotePage;
