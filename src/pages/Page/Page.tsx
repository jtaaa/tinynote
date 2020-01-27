import React from 'react';
import Box from 'components/Box';
import Header, { HeaderProps } from './Header';

type PageProps = HeaderProps & {
  children: React.ReactNode;
};
const Page: React.FC<PageProps> = ({ children, ...headerProps }) => {
  return (
    <Box>
      <Header {...headerProps} />
      {children}
    </Box>
  );
};

export default Page;
