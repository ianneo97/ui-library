import { ConfigProvider as AntdConfigProvider } from "antd";
import { ConfigProviderProps } from "antd/lib/config-provider";

interface IConfigProviderProps extends ConfigProviderProps {}

export const ConfigProvider: React.FC<IConfigProviderProps> = ({
  children,
  ...rest
}) => {
  return <AntdConfigProvider {...rest}>{children}</AntdConfigProvider>;
};
