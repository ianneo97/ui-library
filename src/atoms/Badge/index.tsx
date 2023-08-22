import { Badge as AntdBadge, BadgeProps } from "antd";

export interface IBadgeProps extends BadgeProps {}

export const Badge: React.FC<IBadgeProps> = ({ children, ...props }) => {
    return <AntdBadge {...props}>{children}</AntdBadge>;
};

export const Ribbon: React.FC<IBadgeProps> = ({ children, ...props }) => {
    return <AntdBadge.Ribbon {...props}>{children}</AntdBadge.Ribbon>;
};
