import KEYS from './keys';
import { useEffect, useMemo } from 'react';

export type RemoveKeyListener = () => void;

export const useKeyListener = (
  keyCode: keyof typeof KEYS,
  callback: () => void,
) => {
  const onKeyDown = useMemo(
    () => (e: KeyboardEvent) => {
      if (e.keyCode === KEYS[keyCode]) {
        callback();
      }
    },
    [keyCode, callback],
  );

  const removeKeyListener = useMemo(
    () => () => {
      document.removeEventListener('keydown', onKeyDown, false);
    },
    [onKeyDown],
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false);
    return removeKeyListener;
  }, [onKeyDown, removeKeyListener]);

  return removeKeyListener;
};
