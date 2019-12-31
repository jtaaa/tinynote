import React from 'react';
import Button from '../Button';
import { useTranslation } from 'utils/i18next';

const LoginButton = () => {
  const { Trans } = useTranslation('LoginButton');

  return (
    <>
      <Button>
        <Trans i18nKey="login">Login</Trans>
      </Button>
    </>
  );
};

export default LoginButton;
