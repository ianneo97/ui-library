import {
    Collapse as AntdCollapse,
    CollapseProps,
    CollapsePanelProps,
} from "antd";

export interface ICollapseProps extends CollapseProps {}
export interface ICollapsePanelProps extends CollapsePanelProps {}

const { Panel: AntdPanel } = AntdCollapse;

export const Collapse: React.FC<ICollapseProps> = (props) => {
    return <AntdCollapse {...props}>{props.children}</AntdCollapse>;
};

export const CollapsePanel: React.FC<ICollapsePanelProps> = (props) => {
    return <AntdPanel {...props}>{props.children}</AntdPanel>;
};
