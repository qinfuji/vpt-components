import * as React from 'react';
import { IList, IListProps } from './List.types';
import './List.less';
declare class List extends React.Component<IListProps, {}> implements IList {
    constructor(props: IListProps);
    static displayName: string;
    static propTypes: {};
    static defaultProps: {};
    render(): JSX.Element;
}
export default List;
