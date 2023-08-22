import { Empty as AntdEmpty, EmptyProps } from "antd";

export interface IEmptyProps extends EmptyProps {}

export const Empty: React.FC<IEmptyProps> = ({ children, ...props }) => {
    return <AntdEmpty {...props}>{children}</AntdEmpty>;
};
