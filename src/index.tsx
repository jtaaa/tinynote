import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { ThemeDecorator } from 'utils/theme';
import { FirebaseContext, firebase, firebaseConfig } from 'modules/firebase';
import Routes from 'Routes';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseAppProvider } from 'reactfire';
import 'firebase/performance';

ReactDOM.render(
  <FirebaseContext.Provider value={firebase}>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} initPerformance>
      <ThemeDecorator>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeDecorator>
    </FirebaseAppProvider>
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
