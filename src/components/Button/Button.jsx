import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
class Button extends React.Component {
	render() {
		return <button>{this.props.title}</button>;
	}
}
Button.displayName = 'Button';
Button.propTypes = {
	/** buttomn 标题 */
	title: PropTypes.string,
};
Button.defaultProps = {};
export default Button;
