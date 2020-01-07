import React from 'react';
import { PropsWithChildren } from 'react';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from 'modules/firebase';
import { Router } from 'react-router-dom';
import { History } from 'history';

type GenerateRenderWrapperOptions = {
  history: History;
};
const generateRenderWrapper = ({ history }: GenerateRenderWrapperOptions) => {
  const RenderWrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Router history={history}>{children}</Router>
      </FirebaseAppProvider>
    );
  };
  return RenderWrapper;
};

export default generateRenderWrapper;
