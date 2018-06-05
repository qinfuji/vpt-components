import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import style from './Menu.less';

class Menu extends React.Component {
	render() {
		return (
			<ul class="h-menu mega">
				<li>
					<a href="#">文件</a>
				</li>
				<li>
					<a href="#" class="dropdown-toggle">
						编辑
					</a>
					<ul class="d-menu" data-role="dropdown" style={{ display: 'block' }}>
						<li>
							<a href="#" class="dropdown-toggle">
								查看
							</a>
							<ul class="d-menu" data-role="dropdown">
								<li>
									<a href="#">Windows 10</a>
								</li>
								<li>
									<a href="#">Windows Server</a>
								</li>
								<li class="divider" />
								<li>
									<a href="#">MS-DOS</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="#">Skype</a>
						</li>
						<li class="divider" />
						<li>
							<a href="#">Office</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#">支持</a>
				</li>
				<li>
					<a href="#">购买</a>
				</li>
			</ul>
		);
	}
}

Menu.displayName = 'Menu';

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
