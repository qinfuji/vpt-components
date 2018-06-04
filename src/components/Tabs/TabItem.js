import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';

const noloop = () => {};

const TabItem = ({
	name,
	label,
	style = {},
	active = false,
	disabled = false,
	icon = '',
	onClick = noloop,
}) => {
	const cx = classname({
		active: !!active,
		disabled: !!disabled,
	});

	const handClick = () => {
		onClick({ name, label, style, active, disabled });
	};

	return (
		<li className={cx} onClick={handClick}>
			<a href="javascript:void(0)">{label}</a>
		</li>
	);
};

TabItem.displayName = 'TabItem';

TabItem.propTypes = {
	/**  tab唯一名称 */
	name: PropTypes.string.isRequired,
	/** 显示名称 */
	label: PropTypes.string,
	/** 图标， 暂未实现 */
	icon: PropTypes.string,
	/** 可以覆盖的样式 */
	style: PropTypes.object,
	/** 是否选中 */
	active: PropTypes.bool,
	/** 是否可用 */
	disabled: PropTypes.bool,
	/** tab 点击后的回调函数 */
	onClick: PropTypes.func,
};

export default TabItem;
