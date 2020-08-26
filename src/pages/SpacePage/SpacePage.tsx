import React from 'react';
import Page from 'pages/Page';
import SpaceView from './SpaceView';
import { useParams } from 'react-router-dom';

type SpacePageParams = {
  spaceId: string;
};
const SpacePage = () => {
  const { spaceId } = useParams<SpacePageParams>();
  return (
    <Page back="/">
      <SpaceView title={spaceId} />
    </Page>
  );
};

export default SpacePage;
