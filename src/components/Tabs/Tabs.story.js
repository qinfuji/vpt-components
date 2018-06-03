import React from 'react';
import { select, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import readme from './README.md';
import Tabs from './Tabs';
import '../../index.less';

const component = () => {
	let style = {
		//fontSize: '.5rem'
	};

	let orientation = {
		horizontal: 'horizontal',
		vertical: 'vertical'
	};

	let position = {
		top: 'top',
		left: 'left',
		bottom: 'bottom',
		right: 'right'
	};

	let size = {
		sm: 'sm',
		md: 'md',
		lg: 'lg',
		xl: 'xl'
	};

	return (
		<Tabs
			onChange={action('tab-change')}
			onClick={action('tab-click')}
			orientation={select('orientation', orientation, 'horizontal')}
			position={select('position', position, 'top')}
			size={select('size', size, 'md')}
			style={object('style', style)}
		/>
	);
};

export default [readme, component];
