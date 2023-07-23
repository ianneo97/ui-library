import { Progress as AntdProgress, ProgressProps } from "antd";

export interface IProgressProps extends ProgressProps {}

export const Progress: React.FC<IProgressProps> = ({ children, ...rest }) => {
    return <AntdProgress {...rest}>{children}</AntdProgress>;
};
