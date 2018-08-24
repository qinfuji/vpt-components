import React from 'react';
import { text, select, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../util/optionalSelect';
import { action } from '@storybook/addon-actions';
import readme from './README.md';
import Menu from './Menu';
var component = function component() {
	return React.createElement(
		'div',
		{
			style: { backgroundColor: '#00a7cf', height: '300px', width: '200px' }
		},
		React.createElement(Menu, null)
	);
};
export default [readme, component];