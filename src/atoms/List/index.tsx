import { List as AntdList, ListProps } from "antd";
import { ListItemProps, ListItemMetaProps } from "antd/es/list/Item";

export interface IListProps<T> extends ListProps<T> {}
export interface IListItemProps extends ListItemProps {}
export interface IListItemMetaProps extends ListItemMetaProps {}

export const List: React.FC<IListProps<any>> = ({ children, ...rest }) => {
    return <AntdList {...rest}>{children}</AntdList>;
};

export const ListItem: React.FC<IListItemProps> = ({ children, ...rest }) => {
    return <AntdList.Item {...rest}>{children}</AntdList.Item>;
};

export const ListItemMeta: React.FC<IListItemMetaProps> = ({
    children,
    ...rest
}) => {
    return <AntdList.Item.Meta {...rest}>{children}</AntdList.Item.Meta>;
};
