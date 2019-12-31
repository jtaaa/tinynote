import React from 'react';
import { i18n as i18nType, TFunction } from 'i18next';
import { Trans, TransProps, useTranslation } from 'react-i18next';

type TranslationArray = [TFunction, i18nType, typeof Trans];
type TranslationObject = {
  t: TFunction;
  i18n: i18nType;
  Trans: typeof Trans;
};

type UseTranslationResponse = TranslationArray & TranslationObject;

const useTranslationCustom = (namespace: string): UseTranslationResponse => {
  const { t, i18n } = useTranslation(namespace);

  const TransWithNamespace = <T extends Element>(props: TransProps<T>) => {
    return <Trans ns={namespace} {...props} />;
  };

  // Stay consistent with the original useTranslation return value -- they
  // return an array which has keys so that you can destructure either as an
  // array or an object.
  const result: TranslationArray & Partial<TranslationObject> = [
    t,
    i18n,
    TransWithNamespace,
  ];
  result.t = t;
  result.i18n = i18n;
  result.Trans = TransWithNamespace;

  return result as UseTranslationResponse;
};

export default useTranslationCustom;
