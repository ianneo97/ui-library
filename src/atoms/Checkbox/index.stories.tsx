import { useState } from "react";
import {
    Checkbox,
    CheckboxChangeEvent,
    CheckboxGroup,
    CheckboxValueType,
} from ".";
import { Space } from "../Space";
import { TextBase } from "../Typography";
import { Divider } from "../Divider";

export default {
    title: "Atoms/Checkbox",
};

const plainOptions = ["Apple", "Pear", "Orange"];
const defaultCheckedList = ["Apple", "Orange"];

export const Default = () => {
    const [checkedList, setCheckedList] =
        useState<CheckboxValueType[]>(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
    const options = [
        { label: "Apple", value: "Apple" },
        { label: "Pear", value: "Pear" },
        { label: "Orange", value: "Orange" },
    ];

    const onChange = (list: CheckboxValueType[]) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = (e: CheckboxChangeEvent) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    return (
        <>
            <Space direction="vertical">
                <div>
                    <TextBase>Normal Checkbox</TextBase>
                    <br />
                    <Checkbox />
                </div>

                <div>
                    <TextBase>Checkbox Group</TextBase>
                    <br />
                    <CheckboxGroup options={options} />
                </div>

                <div>
                    <TextBase>Indeterminate</TextBase>
                    <br />
                    <Checkbox
                        indeterminate={indeterminate}
                        onChange={onCheckAllChange}
                        checked={checkAll}
                    >
                        Check all
                    </Checkbox>
                    <Divider />
                    <CheckboxGroup
                        options={plainOptions}
                        value={checkedList}
                        onChange={onChange}
                    />
                </div>
            </Space>
        </>
    );
};
