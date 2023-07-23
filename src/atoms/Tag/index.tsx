import { Tag as AntdTag, TagProps } from "antd";

export interface ITagProps extends TagProps {}

export const Tag: React.FC<ITagProps> = ({ children, ...rest }) => {
    return <AntdTag {...rest}>{children}</AntdTag>;
};
