import { Popover as AntdPopover, PopoverProps } from "antd";

export interface IPopoverProps extends PopoverProps {}

export const Popover: React.FC<IPopoverProps> = ({ children, ...rest }) => {
    return <AntdPopover {...rest}>{children}</AntdPopover>;
};
