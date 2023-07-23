import { Tooltip as AntdTooltip } from "antd";
import { TooltipPropsWithTitle } from "antd/es/tooltip";

export interface ITooltipProps extends TooltipPropsWithTitle {}

export const Tooltip: React.FC<ITooltipProps> = ({ children, ...rest }) => {
    return <AntdTooltip {...rest}>{children}</AntdTooltip>;
};
