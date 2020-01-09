import React from 'react';
import { Link } from 'react-router-dom';
import Box from 'components/Box';
import { useTranslation } from 'utils/i18next';
import { HeaderOptions } from './types';

type PageProps = {
  headerOptions?: HeaderOptions;
  children: React.ReactNode;
};
const Page: React.FC<PageProps> = ({ headerOptions, children }) => {
  const { Trans } = useTranslation('Page');
  return (
    <Box height="100%" display="flex" flexDirection="column">
      {headerOptions && (
        <Box display="flex" alignItems="center" height={48} p={3}>
          {headerOptions.back && (
            <Link to={headerOptions.back}>
              <Trans i18nKey="back">Back</Trans>
            </Link>
          )}
        </Box>
      )}
      <Box flex={1} p={3}>
        {children}
      </Box>
    </Box>
  );
};

export default Page;
