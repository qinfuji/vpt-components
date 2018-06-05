import _ from 'lodash';
import React from 'react';
import {
	CommandBar,
	ICommandBarProps,
} from 'office-ui-fabric-react/lib/CommandBar';
import PropTypes from 'prop-types';

const items = [
	{
		key: 'newItem',
		name: 'New',
		cacheKey: 'myCacheKey',
		iconProps: {
			iconName: 'Add',
		},
		ariaLabel: 'New. Use left and right arrow keys to navigate',
		['data-automation-id']: 'newItemMenu',
		subMenuProps: {
			items: [
				{
					key: 'emailMessage',
					name: 'Email message',
					iconProps: {
						iconName: 'Mail',
					},
					['data-automation-id']: 'newEmailButton',
				},
				{
					key: 'calendarEvent',
					name: 'Calendar event',
					iconProps: {
						iconName: 'Calendar',
					},
				},
			],
		},
	},
	{
		key: 'upload',
		name: 'Upload',
		iconProps: {
			iconName: 'Upload',
		},
		href: 'https://dev.office.com/fabric',
		['data-automation-id']: 'uploadButton',
	},
	{
		key: 'share',
		name: 'Share',
		iconProps: {
			iconName: 'Share',
		},
		onClick: () => console.log('Share'),
	},
	{
		key: 'download',
		name: 'Download',
		iconProps: {
			iconName: 'Download',
		},
		onClick: () => console.log('Download'),
	},
];

const overflowItems = [
	{
		key: 'move',
		name: 'Move to...',
		iconProps: {
			iconName: 'MoveToFolder',
		},
	},
	{
		key: 'copy',
		name: 'Copy to...',
		iconProps: {
			iconName: 'Copy',
		},
	},
	{
		key: 'rename',
		name: 'Rename...',
		iconProps: {
			iconName: 'Edit',
		},
	},
];

const farItems = [
	{
		key: 'sort',
		name: 'Sort',
		iconProps: {
			iconName: 'SortLines',
		},
		onClick: () => console.log('Sort'),
	},
	{
		key: 'tile',
		name: 'Grid view',
		iconProps: {
			iconName: 'Tiles',
		},
		iconOnly: true,
		onClick: () => console.log('Tiles'),
	},
	{
		key: 'info',
		name: 'Info',
		iconProps: {
			iconName: 'Info',
		},
		iconOnly: true,
		onClick: () => console.log('Info'),
	},
];

class Menu extends React.Component {
	render() {
		return (
			<CommandBar
				items={items}
				overflowItems={overflowItems}
				farItems={farItems}
				ariaLabel={'Use left and right arrow keys to navigate between commands'}
			/>
		);
	}
}

Menu.displayName = 'Menu';

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
