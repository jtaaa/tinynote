import React from 'react';
import AuthButton from 'components/buttons/AuthButton';
import Canon from 'components/text/Canon';
import GreatPrimer from 'components/text/GreatPrimer';
import { useUser } from 'modules/firebase';

const App: React.FC = () => {
  const user = useUser();

  return (
    <div className="App">
      <Canon>Sell Your Stuff</Canon>
      <AuthButton />
      {user && <GreatPrimer>Welcome, {user?.email}</GreatPrimer>}
    </div>
  );
};

export default App;
