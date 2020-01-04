import { useContext } from 'react';
import FirebaseContext from './Context';

export const useAuth = () => {
  const firebase = useContext(FirebaseContext);
  return firebase.auth;
};
