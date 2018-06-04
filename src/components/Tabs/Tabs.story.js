import React from 'react';
import { select, object, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import readme from './README.md';
import Tabs from './Tabs';
import TabItem from './TabItem';
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

	let itemData = (name, label, isActive, isdisabled) => {
		return {
			name: name,
			label: label,
			isdisabled: !!isdisabled
		};
	};

	return (
		<div style={{ width: '500px', fontSize: '30%' }}>
			<Tabs
				activeTab={text('activeTab', 'test1')}
				onChange={action('tab-change')}
				onClick={action('tab-click')}
				orientation={select('orientation', orientation, 'horizontal')}
				position={select('position', position, 'top')}
				size={select('size', size, 'md')}
				style={object('style', style)}
				textCompress={boolean('textCompress', true)}
			>
				<TabItem {...itemData('test1', '工具箱')} />
				<TabItem {...itemData('test2', '项目结构')} />
				<TabItem {...itemData('test3', '项目依赖')} />
				<TabItem {...itemData('test4', '项目配置')} />
			</Tabs>
		</div>
	);
};

export default [readme, component];
