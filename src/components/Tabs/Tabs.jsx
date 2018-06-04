import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './Tabs.less';
import TabItem from './TabItem';

class Tabs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: props.activeTab,
		};
	}

	state = {
		activeTab: null,
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		console.log('getDerivedStateFromProps');
		return null;
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	shouldComponentUpdate() {
		console.log('shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate() {
		console.log('getSnapshotBeforeUpdate');
	}

	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	componentDidCatch() {
		console.log('componentDidCatch');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	onTabClick(tabItemData) {
		let { activeTab } = this.state;
		if (activeTab != tabItemData.name) {
			this.setState({ activeTab: tabItemData.name });
			if (this.props.onChange) {
				this.props.onChange(tabItemData, activeTab);
			}
		}
		if (this.props.onClick) {
			this.props.onClick(tabItemData);
		}
	}

	/**
	 * 过滤无用的子节点
	 */
	genTabItemWithChildren(children) {
		if (!children) {
			return null;
		}
		let ret = [];
		React.Children.forEach(children, child => {
			if (child.type == TabItem) {
				ret.push({
					...child.props,
				});
			}
		});
		return this.genTabItemWithDatas(ret);
	}

	/**
	 * 通过动态数据产生的TabItem
	 */
	genTabItemWithDatas(tabItems) {
		if (!tabItems) {
			return null;
		}
		let ret = [];
		let { activeTab } = this.state;
		tabItems.forEach((tab, idx) => {
			let active = activeTab == tab['name'];
			ret.push(
				<TabItem
					key={tab.name}
					{...{ ...tab, active }}
					onClick={this.onTabClick.bind(this)}
				/>
			);
		});
		return ret;
	}

	render() {
		let {
			style,
			orientation,
			position,
			size,
			textCompress,
			children,
			tabItems,
		} = this.props;
		let cx = classname('tabs', size, 'tabs-expand', position, orientation, {
			'text-compress': !!textCompress,
		});
		return (
			<div className={cx} style={style}>
				<ul>
					{this.genTabItemWithChildren(children)}
					{this.genTabItemWithDatas(tabItems)}
				</ul>
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
	size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),

	/**
	 * 在tab垂直布局是，是否压缩tabname为垂直显示
	 */
	textCompress: PropTypes.bool,

	/**
	 * 当前激活的tab name
	 */
	activeTab: PropTypes.string.isRequired,
	/**
	 * 通过该数据产生tab
	 */
	tabItems: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			label: PropTypes.string,
			icon: PropTypes.string,
			style: PropTypes.object,
			disabled: PropTypes.bool,
		})
	),
};

Tabs.defaultProps = {
	orientation: 'horizontal',
	position: 'top',
	size: 'md',
	textCompress: true,
	tabItems: null,
	activeTab: null,
};

export default Tabs;
