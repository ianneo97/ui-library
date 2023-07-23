import { Popconfirm as AntdPopconfirm, PopconfirmProps } from "antd";
import { useState } from "react";

export interface IPopconfirmProps extends Omit<PopconfirmProps, "onConfirm"> {
    submit: <T>() => T | Promise<T> | void | Promise<void>;
}

export const Popconfirm: React.FC<IPopconfirmProps> = ({
    title = "",
    children,
    submit,
    ...rest
}) => {
    const [loading, setLoading] = useState(false);

    const handleConfirm = async () => {
        setLoading(true);
        await submit();
        setLoading(false);
    };

    return (
        <AntdPopconfirm
            {...rest}
            title={title}
            onConfirm={handleConfirm}
            okButtonProps={{ loading: loading }}
        >
            {children}
        </AntdPopconfirm>
    );
};
