import { Form as AntdForm, FormItemProps, FormProps } from "antd";
import { ErrorListProps, FormListProps } from "antd/es/form";

export interface IFormProps extends FormProps {}
export interface IFormItemProps extends FormItemProps {}
export interface IFormListProps extends FormListProps {}
export interface IFormErrorListProps extends ErrorListProps {}
export type { Rule } from "antd/es/form";

export const Form: React.FC<IFormProps> = ({
    children,
    labelCol = { span: 8 },
    labelAlign = "left",
    labelWrap = true,
    wrapperCol = { span: 16 },
    colon = true,
    ...rest
}) => {
    return (
        <AntdForm
            labelCol={labelCol}
            labelAlign={labelAlign}
            labelWrap={labelWrap}
            wrapperCol={wrapperCol}
            colon={colon}
            className="lfx-form"
            {...rest}
        >
            <>{children}</>
        </AntdForm>
    );
};

export const FormItem: React.FC<IFormItemProps> = ({ children, ...rest }) => {
    return <AntdForm.Item {...rest}>{children}</AntdForm.Item>;
};

export const FormList: React.FC<IFormListProps> = ({ children, ...rest }) => {
    return <AntdForm.List {...rest}>{children}</AntdForm.List>;
};

export const FormErrorList: React.FC<IFormErrorListProps> = ({ ...rest }) => {
    return <AntdForm.ErrorList {...rest}></AntdForm.ErrorList>;
};

export { useForm, useWatch } from "antd/es/form/Form";
export type { FormInstance } from "antd/es/form/Form";
export type { InternalNamePath } from "antd/es/form/interface";
