import { RenderHookOptions } from '@testing-library/react-hooks';
import { History } from 'history';

export type CustomRenderHookOptions<P> = RenderHookOptions<P> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  history?: History<any>;
  route?: string;
  pathname?: string;
};
