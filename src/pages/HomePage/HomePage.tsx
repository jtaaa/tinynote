import React, { Suspense } from 'react';
import Loading from 'components/Loading';
import HomeView from './HomeView';
import Page from '../Page';

const HomePage: React.FC = () => {
  return (
    <Page>
      <Suspense fallback={<Loading />}>
        <HomeView />
      </Suspense>
    </Page>
  );
};

export default HomePage;
