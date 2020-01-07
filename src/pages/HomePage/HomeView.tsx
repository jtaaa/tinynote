import React, { Suspense } from 'react';
import Box from 'components/Box';
import Header from 'components/Header';
import Loading from 'components/Loading';
import NoteList from 'components/notes/NoteList';
import GreatPrimer from 'components/text/GreatPrimer';
import { useUser } from 'modules/firebase';

const HomePage: React.FC = () => {
  const user = useUser();

  return (
    <Box>
      <Header />
      {user && <GreatPrimer>Welcome, {user?.email}</GreatPrimer>}
      <Suspense fallback={<Loading />}>
        <NoteList />
      </Suspense>
    </Box>
  );
};

export default HomePage;
