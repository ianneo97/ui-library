import { InputProps, Input as AntdInput } from "antd";

export interface IInputProps extends InputProps {}

export const Input: React.FC<IInputProps> = ({ children, ...rest }) => {
  return <AntdInput {...rest}>{children}</AntdInput>;
};

export const TextArea = AntdInput.TextArea;
export const Password = AntdInput.Password;
export const Search = AntdInput.Search;
export const Group = AntdInput.Group;
