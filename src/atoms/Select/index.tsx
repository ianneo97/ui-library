import { Select as AntdSelect, SelectProps } from "antd";
import { OptionProps } from "antd/es/select";
import "./index.css";

interface ISelectProps extends SelectProps {}
interface IOptionProps extends OptionProps {}
interface IOptionGroupProps extends OptionProps {}

export const Select: React.FC<ISelectProps> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <AntdSelect
            className={`custom-select ${className || ""}`}
            allowClear
            showSearch
            filterOption={(input, option) => {
                return (
                    option?.label
                        ?.toString()
                        .toLocaleLowerCase()
                        .includes(input.toLocaleLowerCase()) || false
                );
            }}
            getPopupContainer={(trigger) => trigger.parentElement}
            {...rest}
        >
            {children}
        </AntdSelect>
    );
};

export const Option: React.FC<IOptionProps> = ({ children, ...rest }) => {
    return <AntdSelect.Option {...rest}>{children}</AntdSelect.Option>;
};

export const OptGroup: React.FC<IOptionGroupProps> = ({
    children,
    ...rest
}) => {
    return <AntdSelect.OptGroup {...rest}>{children}</AntdSelect.OptGroup>;
};
