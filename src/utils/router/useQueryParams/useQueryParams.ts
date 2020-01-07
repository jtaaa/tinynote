import { useHistory } from 'react-router-dom';

type Params = Record<string, string>;

type ParamsUpdate = Record<string, string | null>;

type UpdateQueryParamsOptions = {
  merge?: boolean;
};

export default (): [
  Params,
  (newParams: ParamsUpdate, updateOptions?: UpdateQueryParamsOptions) => void,
] => {
  const history = useHistory();
  const urlSearchParams = new URLSearchParams(history.location.search);

  const params: Params = {};
  urlSearchParams.forEach((value, key) => {
    if (!params[key]) {
      params[key] = value;
    }
  });

  const updateParams = (
    newParams: ParamsUpdate,
    updateOptions: UpdateQueryParamsOptions = {},
  ) => {
    const { merge = true } = updateOptions;
    const newUrlSearchParams = new URLSearchParams(
      merge ? history.location.search : undefined,
    );

    Object.keys(newParams).forEach(name => {
      const newParam = newParams[name];
      if (newParam) {
        newUrlSearchParams.set(name, newParam);
      } else {
        newUrlSearchParams.delete(name);
      }
    });

    history.push({ search: `?${newUrlSearchParams}` });
  };

  return [params, updateParams];
};
