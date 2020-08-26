import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from 'components/Loading';

const AsyncHomePage = React.lazy(() => import('./pages/HomePage'));
const AsyncSpacePage = React.lazy(() => import('./pages/SpacePage'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/:spaceId" component={AsyncSpacePage} />
        <Route path="/" component={AsyncHomePage} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
