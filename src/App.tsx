import React from 'react';
import AuthButton from 'components/buttons/AuthButton';
import Canon from 'components/text/Canon';
import GreatPrimer from 'components/text/GreatPrimer';
import { useUser } from 'modules/firebase';
import { SuspenseWithPerf } from 'reactfire';
import Loading from 'components/Loading/Loading';
import NoteList from 'components/NoteList';

const App: React.FC = () => {
  const user = useUser();

  return (
    <div className="App">
      <Canon>Sell Your Stuff</Canon>
      <AuthButton />
      {user && <GreatPrimer>Welcome, {user?.email}</GreatPrimer>}
      <SuspenseWithPerf fallback={<Loading />} traceId="load-notes-status">
        <NoteList />
      </SuspenseWithPerf>
    </div>
  );
};

export default App;
