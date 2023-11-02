import { Spin as AntdSpin, SpinProps } from "antd";

export interface ISpinProps extends SpinProps {}

export const Spin: React.FC<ISpinProps> = ({ children, ...props }) => {
  return <AntdSpin {...props}>{children}</AntdSpin>;
};
