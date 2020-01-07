import React, { Suspense } from 'react';
import GreatPrimer from 'components/text/GreatPrimer';
import { useUser } from 'modules/firebase';
import Loading from 'components/Loading/Loading';
import NoteList from 'components/notes/NoteList';
import Header from 'components/Header';

const App: React.FC = () => {
  const user = useUser();

  return (
    <div className="App">
      <Header />
      {user && <GreatPrimer>Welcome, {user?.email}</GreatPrimer>}
      <Suspense fallback={<Loading />}>
        <NoteList />
      </Suspense>
    </div>
  );
};

export default App;
