import React from 'react';
import { text, select, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../util/optionalSelect';
import { action } from '@storybook/addon-actions';
import readme from './README.md';
import Tabs from './Tabs';
import '../../index.less';

const component = () => {
	return (
		<div style={{ width: '800px' }}>
			<Tabs />
		</div>
	);
};

export default [readme, component];
