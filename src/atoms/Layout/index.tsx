import { Layout as AntdLayout, LayoutProps, SiderProps } from "antd";

export interface ILayoutProps extends LayoutProps {}
export interface ISiderProps extends SiderProps {}

export const Layout: React.FC<ILayoutProps> = ({ children, ...props }) => {
    return <AntdLayout {...props}>{children}</AntdLayout>;
};

export const Header: React.FC<ILayoutProps> = ({ children, ...props }) => {
    return <AntdLayout.Header {...props}>{children}</AntdLayout.Header>;
};

export const Footer: React.FC<ILayoutProps> = ({ children, ...props }) => {
    return <AntdLayout.Footer {...props}>{children}</AntdLayout.Footer>;
};

export const Content: React.FC<ILayoutProps> = ({ children, ...props }) => {
    return <AntdLayout.Content {...props}>{children}</AntdLayout.Content>;
};

export const Sider: React.FC<ISiderProps> = ({ children, ...props }) => {
    return <AntdLayout.Sider {...props}>{children}</AntdLayout.Sider>;
};
