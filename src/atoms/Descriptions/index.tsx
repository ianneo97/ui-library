import { Descriptions as AntdDescriptions, DescriptionsProps } from "antd";
import { DescriptionsItemProps } from "antd/es/descriptions/Item";

export interface IDescriptionProps extends DescriptionsProps {}
export interface IDescriptionItemProps extends DescriptionsItemProps {}

export const Descriptions: React.FC<IDescriptionProps> = (props) => {
    return <AntdDescriptions {...props}>{props.children}</AntdDescriptions>;
};

export const DescriptionItems: React.FC<IDescriptionItemProps> = (props) => {
    return (
        <AntdDescriptions.Item {...props}>
            {props.children}
        </AntdDescriptions.Item>
    );
};
