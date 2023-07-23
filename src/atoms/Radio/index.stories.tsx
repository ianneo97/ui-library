import { Radio, RadioGroup } from ".";

export default {
    title: "Atoms/Radio",
};

export const Default = () => {
    const options = [
        { label: "Item 1", value: "a" },
        { label: "Item 2", value: "b" },
    ];
    return (
        <>
            <Radio>Hello</Radio>

            <RadioGroup options={options} optionType="button"></RadioGroup>
        </>
    );
};
