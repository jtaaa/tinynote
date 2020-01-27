import React from 'react';
import Box, { BoxProps } from 'components/Box';

type PlusIconProps = BoxProps;
const PlusIcon: React.FC<PlusIconProps> = boxProps => {
  return (
    <Box width={32} {...boxProps}>
      <svg
        display="block"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="16"
          y1="5"
          x2="16"
          y2="27"
          stroke="#1D1D1D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="5"
          y1="16"
          x2="27"
          y2="16"
          stroke="#1D1D1D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

export default PlusIcon;
