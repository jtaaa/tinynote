import React from 'react';
import { Link } from 'react-router-dom';
import Box from 'components/Box';
import { useTranslation } from 'utils/i18next';

type PageProps = {
  children: React.ReactNode;
};
const Page: React.FC<PageProps> = ({ children }) => {
  const { Trans } = useTranslation('Page');
  return (
    <Box>
      <Box display="flex" alignItems="center" height={48}>
        <Link to="/">
          <Trans i18nKey="back">Back</Trans>
        </Link>
      </Box>
      {children}
    </Box>
  );
};

export default Page;
