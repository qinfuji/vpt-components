import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import prefixAll from 'inline-style-prefixer/static';
import { getUnit, convertSizeToCssValue } from '../../util/unit';

function PaneStyle({
	split,
	initialSize,
	size,
	minSize,
	maxSize,
	resizersSize,
}) {
	const value = size || initialSize;
	const vertical = split === 'vertical';
	const styleProp = {
		minSize: vertical ? 'minWidth' : 'minHeight',
		maxSize: vertical ? 'maxWidth' : 'maxHeight',
		size: vertical ? 'width' : 'height',
	};

	let style = {
		display: 'flex',
		outline: 'none',
		margin: '2px 1px',
	};

	style[styleProp.minSize] = convertSizeToCssValue(minSize, resizersSize);
	style[styleProp.maxSize] = convertSizeToCssValue(maxSize, resizersSize);

	switch (getUnit(value)) {
		case 'ratio':
			style.flex = value;
			break;
		case '%':
		case 'px':
			style.flexGrow = 0;
			style[styleProp.size] = convertSizeToCssValue(value, resizersSize);
			break;
	}

	return style;
}

class Pane extends PureComponent {
	setRef = element => {
		if (this.props.innerRef) {
			this.props.innerRef(this.props.index, element);
		}
	};

	render() {
		const { children, className } = this.props;
		const prefixedStyle = prefixAll(PaneStyle(this.props));

		return (
			<div className={className} ref={this.setRef} style={prefixedStyle}>
				{children}
			</div>
		);
	}
}

Pane.propTypes = {
	children: PropTypes.node,
	innerRef: PropTypes.func,
	index: PropTypes.number,
	className: PropTypes.string,
	initialSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	minSize: PropTypes.string,
	maxSize: PropTypes.string,
};

Pane.defaultProps = {
	initialSize: '1',
	split: 'vertical',
	minSize: '0',
	maxSize: '100%',
};

export default Pane;
