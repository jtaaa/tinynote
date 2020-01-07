import React from 'react';
import AuthButton from 'components/buttons/AuthButton';
import Canon from 'components/text/Canon';
import Box from 'components/Box';
import { useTranslation } from 'utils/i18next';

const Header = () => {
  const { Trans } = useTranslation('Header');
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Canon m={3}>
        <Trans i18nKey="tinynote">tinynote</Trans>
      </Canon>
      <AuthButton />
    </Box>
  );
};

export default Header;
