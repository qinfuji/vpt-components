import React from 'react';
import { text, select, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../util/optionalSelect';
import { action } from '@storybook/addon-actions';
import readme from './README.md';
import Pane from './Pane';

const component = () => {
	return (
		<div
			style={{ backgroundColor: '#00a7cf', height: '300px', width: '200px' }}
		>
			<Pane
				className={text('className', '')}
				initialSize={text('initialSize', '200px')}
				maxSize={text('maxSize', '50%')}
				minSize={text('minSize', '50%')}
			>
				Pane
			</Pane>
		</div>
	);
};

export default [readme, component];
