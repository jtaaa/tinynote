import React from 'react';
import { render as renderImpl } from '@testing-library/react';
import { createMemoryHistory, createLocation } from 'history';
import { CustomRenderHookOptions } from './types';
import 'firebase/performance';
import generateRenderWrapper from './generateRenderWrapper';

const renderHook = <P, R>(
  component: React.ReactElement,
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

  const renderHookResult = renderImpl(component, {
    wrapper: generateRenderWrapper({ history }),
    ...rest,
  });

  return {
    ...renderHookResult,
    history,
  };
};

export default renderHook;
