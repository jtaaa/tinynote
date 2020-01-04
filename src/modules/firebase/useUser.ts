import { useState, useEffect, useContext } from 'react';
import FirebaseContext from './Context';

export const useUser = () => {
  const firebase = useContext(FirebaseContext);
  const [user, setUser] = useState<firebase.User | undefined>(
    firebase.auth.currentUser ?? undefined,
  );

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth.onAuthStateChanged(user => {
      setUser(user ?? undefined);
    });
    return () => {
      unregisterAuthObserver();
    };
  }, []);

  return user;
};
