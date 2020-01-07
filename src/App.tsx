import React, { Suspense } from 'react';
import AuthButton from 'components/buttons/AuthButton';
import Canon from 'components/text/Canon';
import GreatPrimer from 'components/text/GreatPrimer';
import { useUser } from 'modules/firebase';
import Loading from 'components/Loading/Loading';
import NoteList from 'components/notes/NoteList';

const App: React.FC = () => {
  const user = useUser();

  return (
    <div className="App">
      <Canon>tinynote</Canon>
      <AuthButton />
      {user && <GreatPrimer>Welcome, {user?.email}</GreatPrimer>}
      <Suspense fallback={<Loading />}>
        <NoteList />
      </Suspense>
    </div>
  );
};

export default App;
