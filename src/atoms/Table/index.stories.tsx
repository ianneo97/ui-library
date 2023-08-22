import { useMemo, useState } from "react";
import { AddTable, ColumnsType, IAddTableColumns, Table, UploadTable } from ".";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { CollapsibleDropdown } from "../Dropdown";
import { Form, FormItem, useForm } from "../Form";
import { Input } from "../Input";
import { InputNumber } from "../InputNumber";
import { Select } from "../Select";
import { Tooltip } from "../Tooltip";
import { Link, Text } from "../Typography";
import { UploadFile } from "../Upload";
import { Modal } from "../Modal";
import { RadioGroup } from "../Radio";
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import { Card } from "../Card";

export default {
    title: "Atoms/Table",
};

const productOptions = [
    {
        id: "ac1e6fcb-579f-415f-a8ed-7576594b47a6",
        cost: "100.00",
        createdOn: "2023-02-08T06:57:41.165Z",
        compositions: [],
        label: "1",
        product: {
            id: "be8368ec-3600-4474-a216-55e72e62014a",
            code: "Dolor dolorem est a",
            collection: "Enim quis reiciendis",
            color: "Distinctio Ut dolor",
            createdOn: "2023-02-08T06:57:41.165Z",
            deletedOn: null,
            description: null,
            externalDataId: "Pariatur Aliqua Ad",
            hsCode: "Vel ea porro et perf",
            isActive: true,
            lastUpdatedOn: "2023-02-08T06:57:41.165Z",
            measureValue: "100.00",
            name: "Carly Palmer",
            pictures: [],
            remark: null,
            sku: "Dolore officiis itaq",
            specifications: [],
            tags: [],
            unit: "yd",
            upc: "Cum saepe fugiat ma",
            category: {
                id: "4abcfc15-29bc-47c1-970a-61ec4a9d7965",
                code: "BELT",
                createdOn: "2023-01-14T23:43:49.015Z",
                deletedOn: null,
                description: null,
                lastUpdatedOn: "2023-01-14T23:43:49.015Z",
                name: { locales: [{ text: "Belt", localeName: "en" }] },
                unit: "PCS",
                base: {
                    id: 1,
                    code: "APPAREL",
                    createdOn: "2023-01-13T06:22:01.401Z",
                    description: {
                        locales: [
                            {
                                text: "Apparel products including clothing and ready to wear.",
                                localeName: "en",
                            },
                        ],
                    },
                    lastUpdatedOn: "2023-01-13T06:22:01.401Z",
                    name: { locales: [{ text: "Apparel", localeName: "en" }] },
                },
                workspace: {
                    id: "5b48b95d-f110-4a25-bd36-8efa0991d0d7",
                    createdOn: "2023-01-14T23:43:49.015Z",
                    industry: "apparel",
                    lastUpdatedDate: "2023-02-27T05:54:39.042Z",
                    name: "Vazquez and Mcbride Co",
                    operations: [
                        "ALUMINIUM_EXTRUSION",
                        "BRAND",
                        "BUTTON_SUPPLIER",
                    ],
                },
            },
            workspace: {
                id: "5b48b95d-f110-4a25-bd36-8efa0991d0d7",
                createdOn: "2023-01-14T23:43:49.015Z",
                industry: "apparel",
                lastUpdatedDate: "2023-02-27T05:54:39.042Z",
                name: "Vazquez and Mcbride Co",
                operations: ["ALUMINIUM_EXTRUSION", "BRAND", "BUTTON_SUPPLIER"],
            },
        },
        released: true,
        weight: "100.00",
    },
    {
        id: "241af446-1fcc-42e5-8718-de0a423df7c8",
        cost: "200.00",
        createdOn: "2023-02-08T07:16:35.859Z",
        compositions: [
            {
                id: "2b016c43-3bb4-4edd-b1f8-62167c4e4f9d",
                consumption: 123,
                createdOn: "2023-06-15T10:11:52.235Z",
                deletedOn: null,
                details: null,
                lastUpdatedOn: "2023-06-15T10:11:52.235Z",
                notes: null,
                wastage: 0,
                weight: 0,
                certificatesRequired: [],
                material: {
                    id: "1fcf49ef-5288-4018-ba12-4c9c3887735f",
                    createdOn: "2023-06-15T10:11:35.087Z",
                    deletedOn: null,
                    description: "Labore ex aut facili",
                    lastUpdatedOn: "2023-06-15T10:11:35.087Z",
                    name: "Teegan Roth",
                    pictures: [],
                    specifications: [],
                    unit: "pcs",
                    width: null,
                    breakdowns: [],
                    material: {
                        id: "e7837a6d-0da0-4d75-b123-67a4adac46fb",
                        category: "SYNTHETIC_FABRIC",
                        description: [],
                        createdOn: "2023-04-05T09:39:28.761Z",
                        lastUpdatedOn: "2023-04-05T09:39:28.761Z",
                        name: {
                            locales: [{ text: "Tactel", localeName: "en" }],
                        },
                        specifications: [],
                        unit: "yd",
                        rules: null,
                    },
                    workspace: {
                        id: "5b48b95d-f110-4a25-bd36-8efa0991d0d7",
                        createdOn: "2023-01-14T23:43:49.015Z",
                        industry: "apparel",
                        lastUpdatedDate: "2023-02-27T05:54:39.042Z",
                        name: "Vazquez and Mcbride Co",
                        operations: [
                            "ALUMINIUM_EXTRUSION",
                            "BRAND",
                            "BUTTON_SUPPLIER",
                        ],
                    },
                },
            },
        ],
        label: "1",
        product: {
            id: "57e0b630-ca66-473c-b992-49d8302c6e8a",
            code: "Magni aliquip enim n",
            collection: "Ut aut sed est nulla",
            color: "Aliquid rerum et sin",
            createdOn: "2023-02-08T07:16:35.859Z",
            deletedOn: null,
            description: null,
            externalDataId: "Eum in in dolor eos",
            hsCode: "Natus dolores enim c",
            isActive: true,
            lastUpdatedOn: "2023-02-08T07:16:35.859Z",
            measureValue: "1200.00",
            name: "Abbot Powell",
            pictures: [],
            remark: null,
            sku: "Reprehenderit ut pra",
            specifications: [],
            tags: [],
            unit: "pcs",
            upc: "Fugiat totam eu ali",
            category: {
                id: "b33d69bf-b8dd-4423-b8a5-33707735a565",
                code: "BAG",
                createdOn: "2023-01-14T23:43:49.015Z",
                deletedOn: null,
                description: null,
                lastUpdatedOn: "2023-01-14T23:43:49.015Z",
                name: { locales: [{ text: "Bag", localeName: "en" }] },
                unit: "PCS",
                base: {
                    id: 1,
                    code: "APPAREL",
                    createdOn: "2023-01-13T06:22:01.401Z",
                    description: {
                        locales: [
                            {
                                text: "Apparel products including clothing and ready to wear.",
                                localeName: "en",
                            },
                        ],
                    },
                    lastUpdatedOn: "2023-01-13T06:22:01.401Z",
                    name: { locales: [{ text: "Apparel", localeName: "en" }] },
                },
                workspace: {
                    id: "5b48b95d-f110-4a25-bd36-8efa0991d0d7",
                    createdOn: "2023-01-14T23:43:49.015Z",
                    industry: "apparel",
                    lastUpdatedDate: "2023-02-27T05:54:39.042Z",
                    name: "Vazquez and Mcbride Co",
                    operations: [
                        "ALUMINIUM_EXTRUSION",
                        "BRAND",
                        "BUTTON_SUPPLIER",
                    ],
                },
            },
            workspace: {
                id: "5b48b95d-f110-4a25-bd36-8efa0991d0d7",
                createdOn: "2023-01-14T23:43:49.015Z",
                industry: "apparel",
                lastUpdatedDate: "2023-02-27T05:54:39.042Z",
                name: "Vazquez and Mcbride Co",
                operations: ["ALUMINIUM_EXTRUSION", "BRAND", "BUTTON_SUPPLIER"],
            },
        },
        released: true,
        weight: "100.00",
    },
    {
        id: "bcfafc9e-3e66-425e-b8c6-c9055c3aea33",
        cost: "123.00",
        createdOn: "2023-06-15T10:10:31.362Z",
        compositions: [],
        label: "1",
        product: {
            id: "91bf6240-c2f3-42d0-a4b8-de429afd1b4f",
            code: "EXTERNAL_ID_003",
            collection: "test",
            color: "red",
            createdOn: "2023-06-15T10:10:31.362Z",
            deletedOn: null,
            description: null,
            externalDataId: "EXTERNAL_ID_003",
            hsCode: null,
            isActive: true,
            lastUpdatedOn: "2023-06-15T10:10:31.362Z",
            measureValue: "1.00",
            name: "EXTERNAL_ID_003",
            pictures: [],
            remark: "This is a testing product",
            sku: "AK47",
            specifications: [],
            tags: [],
            unit: "pcs",
            upc: "ASD",
            category: {
                id: "179e635e-8c28-435a-8d89-9628f04e176e",
                code: "RECYCLE_POLYAMIDE",
                createdOn: "2023-01-14T23:43:49.015Z",
                deletedOn: null,
                description: null,
                lastUpdatedOn: "2023-01-14T23:43:49.015Z",
                name: {
                    locales: [{ text: "Recycled Polyamide", localeName: "en" }],
                },
                unit: "YD",
                base: {
                    id: 2,
                    code: "RAW_MATERIAL",
                    createdOn: "2023-01-13T06:22:01.401Z",
                    description: {
                        locales: [
                            {
                                text: "Base material applicable when sellable to customers",
                                localeName: "en",
                            },
                        ],
                    },
                    lastUpdatedOn: "2023-01-13T06:22:01.401Z",
                    name: {
                        locales: [{ text: "Raw Materials", localeName: "en" }],
                    },
                },
                workspace: {
                    id: "5b48b95d-f110-4a25-bd36-8efa0991d0d7",
                    createdOn: "2023-01-14T23:43:49.015Z",
                    industry: "apparel",
                    lastUpdatedDate: "2023-02-27T05:54:39.042Z",
                    name: "Vazquez and Mcbride Co",
                    operations: [
                        "ALUMINIUM_EXTRUSION",
                        "BRAND",
                        "BUTTON_SUPPLIER",
                    ],
                },
            },
            workspace: {
                id: "5b48b95d-f110-4a25-bd36-8efa0991d0d7",
                createdOn: "2023-01-14T23:43:49.015Z",
                industry: "apparel",
                lastUpdatedDate: "2023-02-27T05:54:39.042Z",
                name: "Vazquez and Mcbride Co",
                operations: ["ALUMINIUM_EXTRUSION", "BRAND", "BUTTON_SUPPLIER"],
            },
        },
        released: true,
        weight: "123.00",
    },
    {
        id: "66e1d4b6-eca1-43cf-869d-92abe954e907",
        cost: "123.00",
        createdOn: "2023-08-03T08:36:21.601Z",
        compositions: [
            {
                id: "b50e1ea0-699e-45a9-8e67-937084d70929",
                consumption: 123,
                createdOn: "2023-08-03T08:36:34.056Z",
                deletedOn: null,
                details: null,
                lastUpdatedOn: "2023-08-03T08:36:34.056Z",
                notes: null,
                wastage: 0,
                weight: 111,
                certificatesRequired: ["Recycled Cotton Certification"],
                material: {
                    id: "376ec7e7-da8c-4e5a-a01f-cb8e9c4373d3",
                    createdOn: "2023-08-03T08:36:01.494Z",
                    deletedOn: null,
                    description: "what is my data ",
                    lastUpdatedOn: "2023-08-03T08:36:01.494Z",
                    name: "Component August 4th",
                    pictures: [],
                    specifications: [],
                    unit: "bales",
                    width: null,
                    breakdowns: [],
                    material: {
                        id: "2ecd7f99-2f82-42cd-8e2d-200671accde1",
                        category: "FABRIC",
                        description: [],
                        createdOn: "2023-06-19T06:11:53.167Z",
                        lastUpdatedOn: "2023-06-19T06:11:53.167Z",
                        name: {
                            locales: [
                                { text: "Recycled Cotton", localeName: "en" },
                            ],
                        },
                        specifications: [],
                        unit: "yd",
                        rules: null,
                    },
                    workspace: {
                        id: "5b48b95d-f110-4a25-bd36-8efa0991d0d7",
                        createdOn: "2023-01-14T23:43:49.015Z",
                        industry: "apparel",
                        lastUpdatedDate: "2023-02-27T05:54:39.042Z",
                        name: "Vazquez and Mcbride Co",
                        operations: [
                            "ALUMINIUM_EXTRUSION",
                            "BRAND",
                            "BUTTON_SUPPLIER",
                        ],
                    },
                },
            },
        ],
        label: "1",
        product: {
            id: "d6ff8348-b701-4559-96b0-ebd006d83a05",
            code: null,
            collection: null,
            color: null,
            createdOn: "2023-08-03T08:36:21.601Z",
            deletedOn: null,
            description: null,
            externalDataId: null,
            hsCode: null,
            isActive: true,
            lastUpdatedOn: "2023-08-03T08:36:21.601Z",
            measureValue: "222.00",
            name: "Product 4th August",
            pictures: [],
            remark: null,
            sku: null,
            specifications: [],
            tags: [],
            unit: "pcs",
            upc: null,
            category: {
                id: "412b79a3-6a90-4960-ae51-4bc85313b4ef",
                code: "WHITE_GOLD_10K",
                createdOn: "2023-01-14T23:43:49.015Z",
                deletedOn: null,
                description: null,
                lastUpdatedOn: "2023-01-14T23:43:49.015Z",
                name: {
                    locales: [{ text: "10k White Gold", localeName: "en" }],
                },
                unit: "YD",
                base: {
                    id: 2,
                    code: "RAW_MATERIAL",
                    createdOn: "2023-01-13T06:22:01.401Z",
                    description: {
                        locales: [
                            {
                                text: "Base material applicable when sellable to customers",
                                localeName: "en",
                            },
                        ],
                    },
                    lastUpdatedOn: "2023-01-13T06:22:01.401Z",
                    name: {
                        locales: [{ text: "Raw Materials", localeName: "en" }],
                    },
                },
                workspace: {
                    id: "5b48b95d-f110-4a25-bd36-8efa0991d0d7",
                    createdOn: "2023-01-14T23:43:49.015Z",
                    industry: "apparel",
                    lastUpdatedDate: "2023-02-27T05:54:39.042Z",
                    name: "Vazquez and Mcbride Co",
                    operations: [
                        "ALUMINIUM_EXTRUSION",
                        "BRAND",
                        "BUTTON_SUPPLIER",
                    ],
                },
            },
            workspace: {
                id: "5b48b95d-f110-4a25-bd36-8efa0991d0d7",
                createdOn: "2023-01-14T23:43:49.015Z",
                industry: "apparel",
                lastUpdatedDate: "2023-02-27T05:54:39.042Z",
                name: "Vazquez and Mcbride Co",
                operations: ["ALUMINIUM_EXTRUSION", "BRAND", "BUTTON_SUPPLIER"],
            },
        },
        released: true,
        weight: "0.00",
    },
];

const productColumns = [
    {
        title: "product:listing.name",
        dataIndex: ["product", "name"],
        render: (_: any, item: any) => {
            return <Link>{item.product?.name}</Link>;
        },
    },
    {
        title: "product:listing.active",
        dataIndex: "isActive",
        render: (_: any, item: any) => {
            return (
                <Text>{item.product?.isActive ? "Active" : "Inactive"}</Text>
            );
        },
    },
    {
        title: "product:listing.code",
        dataIndex: ["product", "code"],
    },
    {
        title: "product:listing.hsCode",
        dataIndex: ["product", "hsCode"],
    },
    {
        title: "product:listing.category",
        render: (_: any, item: any) => {
            return (
                <Text>
                    {
                        item.product?.category?.base?.name.locales?.find(
                            (c: any) => c.localeName === "en"
                        )?.text
                    }
                </Text>
            );
        },
    },
    {
        title: "product:listing.subCategory",
        dataIndex: ["category", "code"],
        render: (_: any, item: any) => {
            return (
                <Text>
                    {
                        item.product?.category?.name?.locales?.find(
                            (c: any) => c.localeName === "en"
                        )?.text
                    }
                </Text>
            );
        },
    },
    { title: "product:listing.weight", dataIndex: "weight" },
    {
        title: "product:listing.measureValue",
        dataIndex: ["product", "measureValue"],
    },
    {
        title: "common:actions",
        dataIndex: "actions",
        render: (_: any, item: any) => {
            return (
                <>
                    <DeleteOutlined
                        style={{ color: "red" }}
                        // onClick={() => remove({ id: item.product?.id })}
                    />
                </>
            );
        },
    },
];

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
            <Card>
                <Table
                    columns={productColumns}
                    dataSource={productOptions}
                    rowKey={"key"}
                />
            </Card>
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
                            {
                                label: "Hello world",
                                key: "1",
                                icon: <CheckOutlined />,
                                disabled: true,
                            },
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
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen((prev) => !prev);
    };

    const submit = async () => {
        await form.submit();
        console.log(form.getFieldsValue(true));
    };

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
                    mode="tags"
                    options={[
                        { label: "Vietnam", value: "vn" },
                        { label: "Vietnam", value: "an" },
                        { label: "Vietnam", value: "bn" },
                        { label: "Singapore", value: "sg" },
                        { label: "Singapore", value: "gg" },
                        { label: "Singapore", value: "ag" },
                    ]}
                />
            ),
        },
    ];

    return (
        <>
            <Button onClick={toggle}>Open</Button>
            <Modal
                open={open}
                cancelFn={toggle}
                okFn={submit}
                title="Add Item"
                width="60vw"
            >
                <Form form={form}>
                    <FormItem label="Testing">
                        <Input />
                    </FormItem>
                </Form>

                <AddTable
                    scroll={{ x: "max-content" }}
                    form={form}
                    columns={columns}
                    dataSource={data}
                    defaultAdd={{
                        mock: {
                            name: "Ian Neo",
                        },
                    }}
                ></AddTable>
            </Modal>
        </>
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
            deleteEnabled={false}
            size="small"
        />
    );
};
