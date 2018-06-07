import * as React from 'react';
//import PropTypes from 'prop-types';
import { IList, IListProps } from './List.types';
import './List.less';

class List extends React.Component<IListProps, {}> implements IList {
	constructor(props: IListProps) {
		super(props);
	}
	static displayName = 'List';
	static propTypes = {};
	static defaultProps = {};

	render() {
		//let { name = 'qinfuji' } = this.props;
		return <div {...this.props} />;
	}
}
export default List;
