import React from 'react';
import Box from 'components/Box';
import Header, { HeaderProps } from './Header';

type PageProps = HeaderProps & {
  children: React.ReactNode;
};
const Page: React.FC<PageProps> = ({ children, ...headerProps }) => {
  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      bg="black"
      color="white"
    >
      <Header {...headerProps} />
      <Box flex="1" overflow="auto">
        {children}
      </Box>
    </Box>
  );
};

export default Page;
