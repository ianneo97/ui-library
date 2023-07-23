import { Select } from ".";

export default {
    title: "Atoms/Select",
};

export const Default = () => {
    const options = [
        {
            label: "Option 1",
            value: "one",
        },

        {
            label: "Option 2",
            value: "two",
        },
        {
            label: "Chelsea",
            value: "bb",
        },
    ];

    return (
        <>
            <Select options={options}></Select>
        </>
    );
};
