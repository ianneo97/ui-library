import { Divider as AntdDivider, DividerProps } from "antd";

export interface IDividerProps extends DividerProps {}

export const Divider: React.FC<IDividerProps> = (props) => {
    return <AntdDivider {...props}>{props.children}</AntdDivider>;
};
