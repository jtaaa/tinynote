import React from 'react';
import Box, { BoxProps } from 'components/Box';

type CloseIconProps = BoxProps;
const CloseIcon: React.FC<CloseIconProps> = boxProps => {
  return (
    <Box width={32} {...boxProps}>
      <svg
        display="block"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="8.22183"
          y1="8.22183"
          x2="23.7782"
          y2="23.7782"
          stroke="#1D1D1D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="8.22192"
          y1="23.7782"
          x2="23.7783"
          y2="8.22182"
          stroke="#1D1D1D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

export default CloseIcon;
