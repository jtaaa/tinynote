import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from 'components/Loading';

const AsyncApp = React.lazy(() => import('./App'));
const AsyncNotePage = React.lazy(() => import('./pages/NotePage'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/:noteId" component={AsyncNotePage} />
        <Route path="/" component={AsyncApp} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
