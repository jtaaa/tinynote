import React, { PropsWithChildren } from 'react';
import { renderHook as renderHookImpl } from '@testing-library/react-hooks';
import { Router } from 'react-router-dom';
import { createMemoryHistory, createLocation } from 'history';
import { CustomRenderHookOptions } from './types';

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

  const HookWrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    return <Router history={history}>{children}</Router>;
  };

  const renderHookResult = renderHookImpl(renderFn, {
    wrapper: HookWrapper,
    ...rest,
  });

  return {
    ...renderHookResult,
    history,
  };
};

export default renderHook;
