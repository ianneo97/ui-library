import { Radio as AntdRadio, RadioProps, RadioGroupProps } from "antd";
import "./index.css";

export type { RadioChangeEvent } from "antd/lib/radio/interface";
export interface IRadioProps extends RadioProps {}
export interface IRadioGroupProps extends RadioGroupProps {
    options: { label: string; value: string; disabled?: boolean }[];
}

export const Radio: React.FC<IRadioProps> = ({ children, ...rest }) => {
    return <AntdRadio {...rest}>{children}</AntdRadio>;
};

export const RadioGroup: React.FC<IRadioGroupProps> = ({
    children,
    options,
    className,
    ...rest
}) => {
    return (
        <AntdRadio.Group
            {...rest}
            options={options}
            className={`custom-radio-group ${className || ""}`}
        >
            {children}
        </AntdRadio.Group>
    );
};

export const RadioButton: React.FC<IRadioProps> = ({ children, ...rest }) => {
    return <AntdRadio.Button {...rest}>{children}</AntdRadio.Button>;
};
