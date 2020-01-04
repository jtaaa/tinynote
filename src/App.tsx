import React from 'react';
import LoginButton from 'components/buttons/LoginButton';
import Canon from 'components/text/Canon';
import GreatPrimer from 'components/text/GreatPrimer';
import { useUser } from 'modules/firebase';

const App: React.FC = () => {
  const user = useUser();

  return (
    <div className="App">
      <Canon>Sell Your Stuff</Canon>
      <LoginButton />
      {user && <GreatPrimer>Welcome, {user?.email}</GreatPrimer>}
    </div>
  );
};

export default App;
