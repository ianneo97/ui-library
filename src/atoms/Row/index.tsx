import { Row as AntdRow, RowProps } from "antd";

export interface IRowProps extends RowProps {}

export const Row: React.FC<IRowProps> = ({ children, ...rest }) => {
    return <AntdRow {...rest}>{children}</AntdRow>;
};
