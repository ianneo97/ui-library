import { Checkbox as AntdCheckbox, CheckboxProps } from "antd";
import { CheckboxGroupProps } from "antd/es/checkbox";

interface ICheckboxProps extends CheckboxProps {}
interface ICheckboxGroupProps extends CheckboxGroupProps {}

export const Checkbox: React.FC<ICheckboxProps> = (props) => {
    return <AntdCheckbox {...props} />;
};

export const CheckboxGroup: React.FC<ICheckboxGroupProps> = (props) => {
    return <AntdCheckbox.Group {...props} />;
};

export type { CheckboxValueType } from "antd/es/checkbox/Group";
export type { CheckboxChangeEvent } from "antd/es/checkbox";
