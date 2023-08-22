import { Cascader as AntdCascader, CascaderProps } from "antd";

export type { CascaderProps as ICascaderProps } from "antd";

export const Cascader: React.FC<CascaderProps> = ({ ...props }) => {
    return <AntdCascader {...props}></AntdCascader>;
};
