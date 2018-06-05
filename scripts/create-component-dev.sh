#!/usr/bin/env bash
COMPONENT_NAME=$1

if [ -z "$COMPONENT_NAME" ]; then
	echo 'Must specify a component name.'
	exit
fi

echo "Adding storybook story for '${COMPONENT_NAME}' for local development"

mkdir ./src/components/$COMPONENT_NAME/examples
touch ./src/components/$COMPONENT_NAME/examples/index.stories.js
touch ./src/components/$COMPONENT_NAME/examples/default.story.js

cat << EOF >> ./src/components/$COMPONENT_NAME/examples/index.stories.js
import React from 'react';
import path from 'path';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import readme from '../README.md';
import default$COMPONENT_NAME from './default.story';

const storyWrapper = story => {
	return <div style={{ margin: '35px' }}>{story()}</div>;
};

storiesOf('$COMPONENT_NAME', module)
	.addDecorator((story, context) => withInfo('')(story)(context))
	.addDecorator(storyWrapper)
	.addDecorator(withKnobs)
	.add('default', withReadme(readme, default$COMPONENT_NAME));


EOF
echo "Created ./src/components/$COMPONENT_NAME/examples/index.stories.js"

cat << EOF >> ./src/components/$COMPONENT_NAME/examples/default.story.js
import React from 'react';
import { text, select, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../util/optionalSelect';
import { action } from '@storybook/addon-actions';
import readme from '../README.md';
import $COMPONENT_NAME from '../$COMPONENT_NAME';

const component = () => {
	return <$COMPONENT_NAME />;
};

export default component;

EOF
echo "Created ./src/components/$COMPONENT_NAME/examples/default.story.js"
echo "Story added for '${COMPONENT_NAME}'. Do \`npm run dev\` to start development"
