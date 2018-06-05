import React from 'react';
import { text, select, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../util/optionalSelect';
import { action } from '@storybook/addon-actions';
import readme from '../README.md';
import List from '../List';

const component = () => {
	return <List />;
};

export default component;
