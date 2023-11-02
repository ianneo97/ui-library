import { Alert as AntdAlert, AlertProps } from "antd";

export interface IAlertProps extends AlertProps {}

export const Alert: React.FC<AlertProps> = ({ ...props }) => {
    return <AntdAlert {...props}></AntdAlert>;
};
