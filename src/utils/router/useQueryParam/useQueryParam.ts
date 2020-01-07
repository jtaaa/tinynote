import useQueryParams from '../useQueryParams';

export default (
  paramName: string,
): [string | undefined, (newParam: string | null) => void] => {
  const [params, setParams] = useQueryParams();

  const setUrlSearchParam = (newParam: string | null) => {
    setParams({ ...params, [paramName]: newParam });
  };

  return [params[paramName], setUrlSearchParam];
};
