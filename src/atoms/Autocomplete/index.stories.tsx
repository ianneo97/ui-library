import { useState } from "react";
import { AutoComplete } from ".";

export default {
    title: "Atoms/Autocomplete",
};
const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat),
    label: str.repeat(repeat),
});
export const Default = () => {
    const [value, setValue] = useState("");
    const [options, setOptions] = useState<{ value: string; label: string }[]>(
        []
    );
    const [anotherOptions, setAnotherOptions] = useState<
        { value: string; label: string }[]
    >([]);

    const getPanelValue = (searchText: string) =>
        !searchText
            ? []
            : [
                  mockVal(searchText),
                  mockVal(searchText, 2),
                  mockVal(searchText, 3),
              ];

    const onSelect = (data: string) => {
        console.log("onSelect", data);
    };

    const onChange = (data: string) => {
        setValue(data);
    };
    return (
        <>
            <AutoComplete
                options={options}
                style={{ width: 200 }}
                onSelect={onSelect}
                onSearch={(text) => setOptions(getPanelValue(text))}
                placeholder="input here"
            />
            <br />
            <br />
            <AutoComplete
                value={value}
                options={anotherOptions}
                style={{ width: 200 }}
                onSelect={onSelect}
                onSearch={(text) => setAnotherOptions(getPanelValue(text))}
                onChange={onChange}
                placeholder="control mode"
            />
        </>
    );
};
