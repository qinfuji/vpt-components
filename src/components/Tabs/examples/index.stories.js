import React from 'react';
import path from 'path';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import readme from '../README.md';
import defaultTabs from './default.story';

const storyWrapper = story => {
	return <div style={{ margin: '35px' }}>{story()}</div>;
};

storiesOf('Tabs', module)
	.addDecorator((story, context) => withInfo('')(story)(context))
	.addDecorator(storyWrapper)
	.addDecorator(withKnobs)
	.add('default', withReadme(readme, defaultTabs));
