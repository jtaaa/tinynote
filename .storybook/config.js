import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { configure, addDecorator } from '@storybook/react';
import ThemeDecorator from 'utils/theme/ThemeDecorator';

addDecorator(Story => <ThemeDecorator><MemoryRouter><Story /></MemoryRouter></ThemeDecorator>);

configure(require.context('../src', true, /\.stories\.tsx?$/), module);
