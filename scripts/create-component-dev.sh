#!/usr/bin/env bash
COMPONENT_NAME=$1

if [ -z "$COMPONENT_NAME" ]; then
	echo 'Must specify a component name.'
	exit
fi

echo "Adding storybook story for '${COMPONENT_NAME}' for local development"

touch ./src/components/$COMPONENT_NAME/examples/$COMPONENT_NAME.stories.js

cat << EOF >> ./src/components/$COMPONENT_NAME/examples/$COMPONENT_NAME.stories.js
import React from 'react';
import { text, select, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../util/optionalSelect';
import { action } from '@storybook/addon-actions';
import readme from '../README.md';
import ${COMPONENT_NAME} from '../${COMPONENT_NAME}';

const component = () => {
	return (
		<div
    style={{ backgroundColor: '#00a7cf', height: '300px', width: '200px' }}
		>
			<${COMPONENT_NAME}/>
		</div>
	);
};

export default [readme, component];
EOF
echo "Created ./src/components/$COMPONENT_NAME/examples/$COMPONENT_NAME.stories.js"

echo "Story added for '${COMPONENT_NAME}'. Do \`npm run dev\` to start development"
