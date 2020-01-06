import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from 'components/Loading/Loading';

const AsyncApp = React.lazy(() => import('./App'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={Loading}>
      <Switch>
        <Route path="/" component={AsyncApp} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
