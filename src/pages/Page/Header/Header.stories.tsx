import React from 'react';
import { action } from '@storybook/addon-actions';
import PlusIcon from 'components/icons/PlusIcon';
import Header from './Header';

export default { title: 'Pages|Header' };

export const Base = () => {
  return <Header />;
};

export const WithBack = () => {
  return <Header back="/" />;
};

const PlusAction = {
  id: 'plus',
  icon: <PlusIcon />,
  onClick: action('PlusIcon clicked'),
};
export const WithPlusAction = () => {
  return <Header back="/" actions={[PlusAction]} />;
};

export const WithTitle = () => {
  return <Header back="/" actions={[PlusAction]} title="with title" />;
};
