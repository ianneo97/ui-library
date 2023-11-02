import { Affix as AntdAffix, AffixProps } from "antd";

export interface IAffixProps extends AffixProps {}

export const Affix: React.FC<AffixProps> = ({ children, ...props }) => {
    return <AntdAffix {...props}>{children}</AntdAffix>;
};
