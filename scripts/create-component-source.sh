#!/usr/bin/env bash
COMPONENT_NAME=$1

if [ -z "$COMPONENT_NAME" ]; then
	echo 'Must specify a component name.'
	exit
fi

echo "Scaffolding new source code for new component: '${COMPONENT_NAME}'"

mkdir ./src/components/$COMPONENT_NAME
touch ./src/components/$COMPONENT_NAME/$COMPONENT_NAME.jsx
touch ./src/components/$COMPONENT_NAME/$COMPONENT_NAME.spec.jsx
touch ./src/components/$COMPONENT_NAME/$COMPONENT_NAME.less
touch ./src/components/$COMPONENT_NAME/README.md

cat << EOF >> ./src/components/$COMPONENT_NAME/$COMPONENT_NAME.jsx
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import style from './${COMPONENT_NAME}.less'

class ${COMPONENT_NAME}  extends React.Component {
	 
	return (
		<div></div>
	);
};

${COMPONENT_NAME}.propTypes = {};

${COMPONENT_NAME}.defaultProps = {};

export default ${COMPONENT_NAME};
EOF
echo "Created ./src/components/$COMPONENT_NAME/$COMPONENT_NAME.jsx"

cat << EOF >> ./src/components/$COMPONENT_NAME/$COMPONENT_NAME.spec.jsx
import React from 'react';
import { shallow } from 'enzyme';

import { common } from '../../util/generic-tests';
import ${COMPONENT_NAME} from './${COMPONENT_NAME}';

describe('${COMPONENT_NAME}', () => {
	common(${COMPONENT_NAME});
	describe('Events', () => {
		describe('demo fn', () => {
			it('demo', () => {
				
			});
		});
	});
});
EOF
echo "Created ./src/components/$COMPONENT_NAME/$COMPONENT_NAME.spec.jsx"

cat << EOF >> ./src/components/$COMPONENT_NAME/${COMPONENT_NAME}.less
@import (reference) '../../styles/variables.less';
@import (reference) '../../styles/mixins.less';

.vpt-${COMPONENT_NAME} {
	display: flex;
}
EOF
echo "Created ./src/components/$COMPONENT_NAME/${COMPONENT_NAME}.less"

echo "Make sure to export '${COMPONENT_NAME}' in 'src/index.js' and import '${COMPONENT_NAME}.less' in 'src/styles/components.less'!"
echo "Created new component: '${COMPONENT_NAME}'"
