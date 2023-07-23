import { InputNumber as AntdInputNumber, InputNumberProps } from "antd";

export interface IInputNumberProps extends InputNumberProps {}

export const InputNumber: React.FC<IInputNumberProps> = (props) => {
    return <AntdInputNumber {...props} style={{ width: "100%" }} />;
};
