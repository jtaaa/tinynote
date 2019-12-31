import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import ThemeDecorator from 'utils/theme/ThemeDecorator';

addDecorator(Story => <ThemeDecorator><Story /></ThemeDecorator>);

configure(require.context('../src', true, /\.stories\.tsx?$/), module);
