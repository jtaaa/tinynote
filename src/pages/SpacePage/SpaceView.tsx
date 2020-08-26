import React from 'react';
import Box from 'components/Box';
import DoublePica from 'components/text/DoublePica';

type SpaceViewProps = {
  title: string;
};
const SpaceView: React.FC<SpaceViewProps> = ({ title }) => {
  return (
    <Box p={3}>
      <DoublePica color="fontLight">{title}</DoublePica>
    </Box>
  );
};

export default SpaceView;
