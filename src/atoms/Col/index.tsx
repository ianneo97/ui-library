import { Col as AntdCol, ColProps } from "antd";

interface IColProps extends ColProps {}

export const Col: React.FC<IColProps> = ({ children, ...rest }) => {
    return <AntdCol {...rest}>{children}</AntdCol>;
};
