import { Switch as AntdSwitch, SwitchProps } from "antd";

export interface ISwitchProps extends SwitchProps {}

export const Switch: React.FC<ISwitchProps> = ({ ...rest }) => {
    return <AntdSwitch {...rest}></AntdSwitch>;
};
