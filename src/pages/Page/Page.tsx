import React, { useState } from 'react';
import Box from 'components/Box';
import Header, { HeaderProps } from './Header';

type PageProps = HeaderProps & {
  children: React.ReactNode;
};
const Page: React.FC<PageProps> = ({ children, ...headerProps }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const onBodyScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setIsScrolled(e.currentTarget.scrollTop !== 0);
  };

  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      bg="base"
      color="font"
    >
      <Header {...headerProps} lifted={isScrolled} />
      <Box
        flex="1"
        overflow="auto"
        onScroll={onBodyScroll}
        position="relative"
        display="flex"
      >
        {children}
      </Box>
    </Box>
  );
};

export default Page;
