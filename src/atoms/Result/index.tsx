import { Result as AntdResult, ResultProps } from "antd";

export interface IResultProps extends ResultProps {}

export const Result: React.FC<IResultProps> = ({ children, ...props }) => {
    return <AntdResult {...props}>{children}</AntdResult>;
};
