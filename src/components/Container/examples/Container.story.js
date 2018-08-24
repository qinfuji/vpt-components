import React from 'react';
import { text, select, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../util/optionalSelect';
import { action } from '@storybook/addon-actions';
import readme from '../README.md';
import Container from '../Container';
const component = () => {
	return (
		<div
    style={{ backgroundColor: '#00a7cf', height: '300px', width: '200px' }}
		>
			<Container/>
		</div>
	);
};
export default [readme, component];
