import { Drawer as AntdDrawer, DrawerProps } from "antd";

export interface IDrawerProps extends DrawerProps {}

export const Drawer: React.FC<IDrawerProps> = (props) => {
    return <AntdDrawer {...props}>{props.children}</AntdDrawer>;
};
