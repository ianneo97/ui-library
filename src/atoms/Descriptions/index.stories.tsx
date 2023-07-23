import { DescriptionItems, Descriptions } from ".";

export default {
    title: "Atoms/Descriptions",
};

export const Default = () => {
    const data = [
        {
            label: "Entity Name",
            value: "John",
            span: 3,
        },
        {
            label: "Age",
            value: 12,
        },
        { label: "Address", value: "123 Main St" },
        { label: "City", value: "New York" },
    ];

    return (
        <Descriptions title="Sample Info" bordered>
            {data.map((item, index) => (
                <DescriptionItems
                    key={index}
                    label={item.label}
                    span={item.span}
                >
                    {item.value}
                </DescriptionItems>
            ))}
        </Descriptions>
    );
};
