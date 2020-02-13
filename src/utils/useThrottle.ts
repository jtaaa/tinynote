import { useRef } from 'react';
import throttle from 'lodash/throttle';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FunctionToThrottle = (...args: any) => any;

const THROTTLE_WAIT = 5000;

type UseThrottleOptions = {
  wait?: number;
  trailing?: boolean;
};
const useThrottle = <T>(
  func: FunctionToThrottle,
  { wait = THROTTLE_WAIT, trailing = false }: UseThrottleOptions,
) => {
  const throttled = useRef(throttle(func, wait, { trailing }));
  return throttled;
};

export default useThrottle;
