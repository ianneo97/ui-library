import { CardProps, Card as AntdCard } from "antd";

export interface ICardProps extends CardProps {}

export const Card: React.FC<ICardProps> = (props) => {
    return (
        <AntdCard {...props} bordered>
            {props.children}
        </AntdCard>
    );
};
