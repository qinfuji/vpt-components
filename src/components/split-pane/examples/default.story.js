import React from 'react';
import { text, select, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../util/optionalSelect';
import { action } from '@storybook/addon-actions';
import readme from '../README.md';
import SplitPane from '../SplitPane';
import Pane from '../../pane/Pane';

const component = () => {
	return (
		<div style={{ backgroundColor: '#00a7cf', height: '300px' }}>
			<SplitPane>
				<Pane initialSize="50%">pane1</Pane>
				<Pane>
					<SplitPane split="horizontal">
						<Pane initialSize="25%" />
						<Pane />
					</SplitPane>
				</Pane>
			</SplitPane>
		</div>
	);
};

export default component;
