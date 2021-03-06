import { renderHook as renderHookImpl } from '@testing-library/react-hooks';
import { createMemoryHistory, createLocation } from 'history';
import { CustomRenderHookOptions } from './types';
import generateRenderWrapper from './generateRenderWrapper';

const renderHook = <P, R>(
  renderFn: (props: P) => R,
  options: CustomRenderHookOptions<P> = {},
) => {
  const {
    route = '/',
    pathname = '',
    history = createMemoryHistory({ initialEntries: [route] }),
    ...rest
  } = options;

  if (pathname) {
    history.location = createLocation(pathname);
  }

  const renderHookResult = renderHookImpl(renderFn, {
    wrapper: generateRenderWrapper({ history }),
    ...rest,
  });

  return {
    ...renderHookResult,
    history,
  };
};

export default renderHook;
