import { useMemo, useState } from "react";
import { AddTable, ColumnsType, IAddTableColumns, Table, UploadTable } from ".";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { CollapsibleDropdown } from "../Dropdown";
import { useForm } from "../Form";
import { Input } from "../Input";
import { InputNumber } from "../InputNumber";
import { Select } from "../Select";
import { Tooltip } from "../Tooltip";
import { Link } from "../Typography";
import { UploadFile } from "../Upload";

export default {
    title: "Atoms/Table",
};

interface DataType {
    key: React.Key;
    // name: string;
    mock: {
        name: string;
    };
    age: number;
    address: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Full Name",
        width: 100,
        dataIndex: ["mock", "name"],
        key: "mock.name",
        ellipsis: {
            showTitle: false,
        },
        render: (name: string) => <Tooltip title={name}>{name}</Tooltip>,
    },
    {
        title: "Age",
        width: 100,
        dataIndex: "age",
        key: "age",
        ellipsis: true,
    },
    { title: "Column 1", dataIndex: "address", key: "1" },
    { title: "Column 2", dataIndex: "address", key: "2" },
    { title: "Column 3", dataIndex: "address", key: "3" },
    { title: "Column 4", dataIndex: "address", key: "4" },
    { title: "Column 5", dataIndex: "address", key: "5" },
    { title: "Column 6", dataIndex: "address", key: "6" },
    { title: "Column 7", dataIndex: "address", key: "7" },
    { title: "Column 8", dataIndex: "address", key: "8" },
    {
        title: "Actions",
        key: "operation",
        fixed: "right",
        width: 100,
        render: () => <Link>Action</Link>,
    },
];

const data: DataType[] = [
    {
        key: "1",
        mock: {
            name: "John",
        },
        age: 32,
        address: "New York Park",
    },
    {
        key: "2",
        mock: {
            name: "Jim Green",
        },
        age: 40,
        address: "London Park",
    },
];

export const Default = () => {
    return (
        <>
            <Table columns={columns} dataSource={data} rowKey={"key"} />
        </>
    );
};

export const FixedHeaderTable = () => {
    interface DataType {
        key: React.Key;
        name: string;
        age: number;
        address: string;
    }

    const columns: ColumnsType<DataType> = [
        {
            title: "Name",
            dataIndex: "name",
            width: 150,
        },
        {
            title: "Age",
            dataIndex: "age",
            width: 150,
        },
        {
            title: "Address",
            dataIndex: "address",
        },
    ];

    const data: DataType[] = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            name: `Edward King ${i}`,
            age: 32,
            address: `London, Park Lane no. ${i}`,
        });
    }

    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 240 }}
            key="key"
        />
    );
};

export const FixedColumnTable = () => {
    return (
        <Table
            columns={columns}
            dataSource={data}
            scroll={{ x: "max-content" }}
            actions={
                <CollapsibleDropdown
                    menu={{
                        items: [
                            { label: "Hello world", key: "1" },
                            { label: "Hello world", key: "2" },
                        ],
                    }}
                />
            }
            key="key"
        />
    );
};

export const ExampleAddTable = () => {
    const [form] = useForm();

    const columns: IAddTableColumns<any>[] = [
        {
            title: "Name",
            dataIndex: ["mock", "name"],
            component: <Input />,
            required: true,
            rules: [{ required: true, message: "Please input your username!" }],
        },
        {
            title: "Age",
            dataIndex: "age",
            component: <InputNumber />,
            required: true,
            rules: [
                {
                    pattern: /^\d*\.?\d*$/,
                    message: (
                        <Tooltip title="">
                            Please input a positive number only.
                        </Tooltip>
                    ),
                },
            ],
        },
        {
            title: "Country",
            dataIndex: "country",
            component: (
                <Select
                    options={[
                        { label: "Vietnam", value: "vn" },
                        { label: "Singapore", value: "sg" },
                    ]}
                />
            ),
        },
    ];

    return (
        <AddTable
            scroll={{ x: "max-content" }}
            form={form}
            columns={columns}
            dataSource={data}
        ></AddTable>
    );
};

export const ExampleUploadTable = () => {
    const [form] = useForm();
    const [files, setFiles] = useState<UploadFile[]>([]);

    const columns: IAddTableColumns<any>[] = [
        {
            title: "Name",
            dataIndex: ["mock", "name"],
            // component: <Input />,
            required: true,
            rules: [{ required: true, message: "Please input your username!" }],
        },
        {
            title: "Age",
            dataIndex: "age",
            // component: <InputNumber />,
            required: true,
            rules: [
                {
                    pattern: /^\d*\.?\d*$/,
                    message: (
                        <Tooltip title="">
                            Please input a positive number only.
                        </Tooltip>
                    ),
                },
            ],
        },
        {
            title: "Country",
            dataIndex: "country",
            component: (
                <Select
                    options={[
                        { label: "Vietnam", value: "vn" },
                        { label: "Singapore", value: "sg" },
                    ]}
                />
            ),
        },
        {
            title: "Private",
            dataIndex: "private",
            component: <Checkbox />,
            valuePropName: "checked",
        },
    ];

    const onUploadFile = (files: UploadFile[]) => {
        setFiles(files);

        const values = form.getFieldsValue(true);
        const items = values.items ? values.items : [];

        const newItems: any[] = [];

        files.forEach((x) => {
            const item = items.find((y: any) => y.id === x.uid);
            if (item) return;

            const record = {
                id: x.uid,
                mock: {
                    name: x.name,
                },
                age: 12,
                country: "vn",
            };

            newItems.push(record);
        });

        console.log(newItems);

        values.items = [...items, ...newItems];
    };

    return (
        <>
            <UploadTable
                form={form}
                files={files}
                setFiles={onUploadFile}
                columns={columns}
                scroll={{ x: "max-content" }}
            />

            <Button onClick={() => console.log(form.getFieldsValue(true))}>
                Test
            </Button>
        </>
    );
};

export const CheckboxTable = () => {
    const [form] = useForm();

    // const data = useMemo(
    //     () => ,
    //     []
    // );
    const [data] = useState<any>([
        {
            application: "io.lfx.t4s.workspace",
            objectCode: "user",
            scopes: ["create", "update", "remove", "read"],
        },
        {
            application: "io.lfx.t4s.workspace",
            objectCode: "workspace",
            scopes: ["create", "update", "remove", "read"],
        },
        {
            application: "io.lfx.t4s.workspace",
            objectCode: "role",
            scopes: ["create", "update", "remove", "read", "assign"],
        },
        {
            application: "io.lfx.t4s.workspace",
            objectCode: "award",
            scopes: ["create", "update", "remove", "read"],
        },
        {
            application: "io.lfx.t4s.workspace",
            objectCode: "buyer",
            scopes: ["create", "update", "remove", "read"],
        },
        {
            application: "io.lfx.t4s.workspace",
            objectCode: "certification",
            scopes: ["create", "update", "remove", "read"],
        },
        {
            application: "io.lfx.t4s.workspace",
            objectCode: "access",
            scopes: ["update", "read"],
        },
        {
            application: "io.lfx.t4s.workspace",
            objectCode: "supplier",
            scopes: ["create", "update", "remove", "read"],
        },
        {
            application: "io.lfx.t4s.workspace",
            objectCode: "task",
            scopes: ["create", "update", "remove", "read"],
        },
        {
            application: "io.lfx.t4s.workspace",
            objectCode: "ruleset",
            scopes: ["create", "update", "remove", "read"],
        },
        {
            application: "io.lfx.t4s.products",
            objectCode: "category",
            scopes: ["update", "remove", "create", "read"],
        },
        {
            application: "io.lfx.t4s.products",
            objectCode: "product",
            scopes: ["read", "create", "remove", "update"],
        },
        {
            application: "io.lfx.t4s.inventories",
            objectCode: "bins",
            scopes: ["release", "update", "create", "read", "remove"],
        },
        {
            application: "io.lfx.t4s.purchases",
            objectCode: "flags",
            scopes: ["clear", "read"],
        },
        {
            application: "io.lfx.t4s.purchases",
            objectCode: "suppliers",
            scopes: ["read", "update", "remove"],
        },
        {
            application: "io.lfx.t4s.purchases",
            objectCode: "purchases",
            scopes: ["read", "release", "remove", "create", "update"],
        },
        {
            application: "io.lfx.t4s.sales",
            objectCode: "sales",
            scopes: ["update", "remove", "create", "read"],
        },
        {
            application: "io.lfx.t4s.sales",
            objectCode: "flag",
            scopes: ["read", "remove", "update", "create"],
        },
        {
            application: "io.lfx.t4s.sales",
            objectCode: "fulfilment",
            scopes: ["update", "create", "remove", "read"],
        },
        {
            application: "io.lfx.t4s.sales",
            objectCode: "bins",
            scopes: ["read"],
        },
    ]);

    const hideFn = (item: any, hideParams: any) => {
        return !item?.scopes?.includes(hideParams) || false;
    };

    // Extract all unique scopes from the data
    const allScopesSet = new Set<string>(
        data.flatMap(({ scopes }: { scopes: any }) => scopes)
    );
    const allScopes: string[] = Array.from(allScopesSet);

    const columns = useMemo(
        () => [
            { title: "Application", dataIndex: "application" },
            { title: "Object Code", dataIndex: "objectCode" },
            ...allScopes.map((scope) => ({
                title: scope.charAt(0).toUpperCase() + scope.slice(1),
                dataIndex: scope.toLowerCase(),
                component: <Checkbox />,
                valuePropName: "checked",
                hidden: (item: any) => hideFn(item, scope),
            })),
        ],
        [allScopes]
    );

    return (
        <AddTable
            form={form}
            columns={columns}
            dataSource={data}
            rowKey="application"
            addEnabled={false}
        />
    );
};
