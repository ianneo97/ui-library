import { List, ListItem } from ".";
import { Title } from "../Typography";

export default {
    title: "Atoms/List",
};

interface MockItem {
    name: string;
    value: string;
}

export const Default = () => {
    const items: MockItem[] = [
        { name: "Item 1", value: "Value 1" },
        { name: "Item 2", value: "Value 2" },
    ];

    return (
        <List
            header={<Title>List items</Title>}
            dataSource={items}
            renderItem={(item, index) => (
                <ListItem key={index}>{item.name}</ListItem>
            )}
        />
    );
};
