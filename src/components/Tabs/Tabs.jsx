import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './Tabs.less';

class Tabs extends React.Component {
	componentDidMount() {}

	render() {
		let { style, orientation, position, size } = this.props;
		let cx = classname(
			'tabs',
			size,
			//'expand',
			'tabs-expand-fs',
			'flex-justify-center mt-2',
			position,
			orientation
		);
		return (
			<div className={cx} style={style}>
				<div className="expand-title">Home</div>
				<ul>
					<li className="active">
						<a href="#">文件</a>
					</li>
					<li>
						<a href="#">编辑</a>
					</li>
					<li>
						<a href="#">设置</a>
					</li>
					<li className="disabled">
						<a href="#">帮助</a>
					</li>
				</ul>
				<button className="hamburger menu-down dark" type="button">
					<span className="line" />
					<span className="line" />
					<span className="line" />
				</button>
			</div>
		);
	}
}

Tabs.displayName = 'Tabs';

Tabs.propTypes = {
	/**
	 * tab orientation
	 */
	orientation: PropTypes.oneOf(['vertical', 'horizontal']),
	/**
	 * 当orientation为horizontal ， 可以选择top,bottom
	 * 当orientation为vertical ，可以选择left,right
	 */
	position: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
	/**
	 * 当tab选择发生变换时触发
	 */
	onChange: PropTypes.func,
	/**
	 * 选项卡点击时发生
	 */
	onClick: PropTypes.func,

	/**
	 * style
	 */
	style: PropTypes.object,

	/**
	 * tab szie
	 */
	size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl'])
};

Tabs.defaultProps = {
	orientation: 'horizontal',
	position: 'top',
	size: 'md'
};

export default Tabs;
