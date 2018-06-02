import React from 'react';
import path from 'path';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

let stories = storiesOf('Components', module);

const storyWrapper = story => {
	return <div style={{ margin: '35px' }}>{story()}</div>;
};

stories = stories
	.addDecorator((story, context) => withInfo('')(story)(context))
	.addDecorator(storyWrapper)
	.addDecorator(withKnobs);

const req = require.context('../src/components', true, /\.story.js$/);

req.keys().forEach(filename => {
	//console.log(filename, req);
	stories.add(path.basename(filename), withReadme(...req(filename).default));
});
