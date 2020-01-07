import { renderHook } from 'utils/test';
import useQueryParams from './useQueryParams';

describe('useQueryParams', () => {
  it('Should return empty object on no params', () => {
    const { result } = renderHook(() => useQueryParams());
    const [params] = result.current;
    expect(params).toEqual({});
  });

  it('Should return object when 1 query parameter', () => {
    const { result } = renderHook(() => useQueryParams(), { pathname: '?a=b' });
    const [params] = result.current;
    expect(params).toEqual({ a: 'b' });
  });

  it('Should return first query paramater when multiple query parameter with same name', () => {
    const { result } = renderHook(() => useQueryParams(), {
      pathname: '?a=b&a=great',
    });
    const [params] = result.current;
    expect(params).toEqual({ a: 'b' });
  });

  it('Should be able to update query parameters by merging', () => {
    const { result } = renderHook(() => useQueryParams(), {
      pathname: '?test=test1',
    });
    const [_, updateQueryParams] = result.current;

    updateQueryParams({ a: 'b', c: 'd' });

    const [queryParams] = result.current;
    expect(queryParams).toEqual({ a: 'b', c: 'd', test: 'test1' });
  });

  it('Should be able to update query parameters by overidding', () => {
    const { result } = renderHook(() => useQueryParams(), {
      pathname: '?test=test1',
    });
    const [_, updateQueryParams] = result.current;

    updateQueryParams({ a: 'b', c: 'd' }, { merge: false });

    const [queryParams] = result.current;
    expect(queryParams).toEqual({ a: 'b', c: 'd' });
  });
});
