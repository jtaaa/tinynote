import React from 'react';
import Box from 'components/Box';
import { useTranslation } from 'utils/i18next';

const Loading: React.FC = () => {
  const { Trans } = useTranslation('Loading');
  return (
    <Box>
      <Trans i18nKey="loading">Loading...</Trans>
    </Box>
  );
};

export default Loading;
