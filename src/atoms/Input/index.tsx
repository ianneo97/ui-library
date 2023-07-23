import { InputProps, Input as AntdInput } from "antd";

export interface IInputProps extends InputProps {}

export const Input: React.FC<IInputProps> = ({ children, ...rest }) => {
    return <AntdInput {...rest}>{children}</AntdInput>;
};
