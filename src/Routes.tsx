import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from 'components/Loading';

const AsyncHomePage = React.lazy(() => import('./pages/HomePage'));
const AsyncNotePage = React.lazy(() => import('./pages/NotePage'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/:noteId" component={AsyncNotePage} />
        <Route path="/" component={AsyncHomePage} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
