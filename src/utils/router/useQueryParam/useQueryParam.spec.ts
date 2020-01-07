import { renderHook } from 'utils/test';

import useQueryParam from './useQueryParam';

describe('useQueryParam', () => {
  it('Should return undefined on missing query param', () => {
    const { result } = renderHook(() => useQueryParam('random'));
    const [queryParam] = result.current;
    expect(queryParam).toEqual(undefined);
  });

  it('Should return actual query paramater on existing query', () => {
    const { result } = renderHook(() => useQueryParam('random'), {
      pathname: '?random=hello',
    });
    const [queryParam] = result.current;
    expect(queryParam).toEqual('hello');
  });

  it('Should be able to update the query param by merging into others', () => {
    const { result, history } = renderHook(() => useQueryParam('random'), {
      pathname: '?random=hello&other=a',
    });
    const [_, updateQueryParam] = result.current;
    updateQueryParam('hello-updated');
    const [queryParam] = result.current;
    expect(queryParam).toEqual('hello-updated');
    expect(history.location.search).toEqual('?random=hello-updated&other=a');
  });
});
