import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.less';

class Tabs extends React.Component {
	render() {
		return (
			<div className="tabs tabs-expand-md">
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
			</div>
		);
	}
}

Tabs.displayName = 'Tabs';

Tabs.propTypes = {};

Tabs.defaultProps = {};

export default Tabs;
