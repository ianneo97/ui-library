import { Menu as AntdMenu, MenuProps, MenuItemProps } from "antd";

export interface IMenuProps extends MenuProps {}
export interface IMenuItemProps extends MenuItemProps {}

export const Menu: React.FC<IMenuProps> = ({ children, ...rest }) => {
    return <AntdMenu {...rest}>{children}</AntdMenu>;
};

export const MenuItem: React.FC<IMenuItemProps> = ({ children, ...rest }) => {
    return <AntdMenu.Item {...rest}>{children}</AntdMenu.Item>;
};
