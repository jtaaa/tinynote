import React from 'react';
import Box from 'components/Box';
import LoginButton from 'components/buttons/LoginButton';

const App: React.FC = () => {
  return (
    <div className="App">
      <Box pt={[3, 5, 7]} fontSize="HL">
        Sell Your Stuff
      </Box>
      <LoginButton />
    </div>
  );
};

export default App;
