import { Avatar as AntdAvatar, AvatarProps } from "antd";

export interface IAvatarProps extends AvatarProps {}
export interface IAvatarGroupProps extends AvatarProps {}

export const Avatar: React.FC<IAvatarProps> = ({ children, ...props }) => {
    return <AntdAvatar {...props}>{children}</AntdAvatar>;
};

export const AvatarGroup: React.FC<IAvatarGroupProps> = ({ ...props }) => {
    return <AntdAvatar.Group {...props}></AntdAvatar.Group>;
};
