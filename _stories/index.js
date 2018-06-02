import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

// import TestComp from '../src/components/pane/examples/base';
// import Button from '../src/components/Button/examples';

let stories = storiesOf('Test', module);

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
	stories.add(filename, withReadme(...req(filename).default));
});
