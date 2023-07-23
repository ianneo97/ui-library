import { Space as AntdSpace, SpaceProps } from "antd";
import { SpaceCompactProps } from "antd/es/space/Compact";

export const Space: React.FC<SpaceProps> = (props) => {
    return <AntdSpace {...props}>{props.children}</AntdSpace>;
};

export const SpaceCompact: React.FC<SpaceCompactProps> = (props) => {
    return <AntdSpace.Compact {...props}>{props.children}</AntdSpace.Compact>;
};
