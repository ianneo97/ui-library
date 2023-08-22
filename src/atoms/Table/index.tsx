import {
    DeleteOutlined,
    FilterOutlined,
    PlusOutlined,
    SearchOutlined,
    WarningOutlined,
} from "@ant-design/icons";
import { Table as AntdTable, Checkbox, TableProps } from "antd";
import { ColumnType } from "antd/es/table";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "../Button";
import {
    CheckboxChangeEvent,
    CheckboxGroup,
    CheckboxValueType,
} from "../Checkbox";
import {
    Form,
    FormInstance,
    FormItem,
    FormList,
    IFormProps,
    InternalNamePath,
    Rule,
    useForm,
} from "../Form";
import { Input } from "../Input";
import { Modal } from "../Modal";
import { Popover } from "../Popover";
import { Select } from "../Select";
import { Space } from "../Space";
import { Tooltip } from "../Tooltip";
import { Text } from "../Typography";
import { COLOURS } from "../constant";
import "./index.css";
import { Dragger, UploadFile } from "../Upload";
import { Drawer } from "../Drawer";

export interface ITableProps<T> extends TableProps<T> {
    showFilter?: boolean;
    showSearch?: boolean;
    showColumns?: boolean;
    actions?: React.ReactNode;
}

export interface IAddTableProps<T> extends Omit<TableProps<T>, "columns"> {
    form: FormInstance;
    contentName?: string;
    defaultAdd?: any;
    columns: IAddTableColumns<T>[];
    innerFormProps?: IFormProps;
    errorText?: string;
    addEnabled?: boolean;
    deleteEnabled?: boolean;
}

export interface IAddTableColumns<T> extends ColumnType<T> {
    component?: React.ReactNode;
    required?: boolean;
    rules?: Rule[];
    valuePropName?: string;
    hidden?: (item: T) => boolean;
}

export interface IUploadTableProps<T> extends Omit<TableProps<T>, "columns"> {
    form: FormInstance;
    accept?: string;
    files?: UploadFile[];
    columns: IAddTableColumns<T>[];
    setFiles?: (files: UploadFile[]) => void;
}

export type { ColumnsType } from "antd/es/table";

export const Table: React.FC<ITableProps<any>> = ({
    children,
    dataSource,
    columns,
    actions,
    showFilter = true,
    showSearch = true,
    showColumns = true,
    size = "small",
    ...rest
}) => {
    const [form] = useForm();
    const [searchValue, setSearchValue] = useState("");

    // Checkbox controls
    const [indeterminate, setIndeterminate] = useState(false);
    const [checkAll, setCheckAll] = useState(true);
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(
        (columns || []).map((x) => x.title?.toString() || "")
    );
    const checkboxOptions = (columns || [])?.filter(
        (column) => column.title !== "Actions"
    );

    // Filtered Columns
    const filteredCols = useMemo(
        () =>
            (columns || []).filter((column) => {
                if (column.title === "Actions") return true;

                return checkedList.includes(column.title?.toString() || "");
            }),
        [columns, checkedList]
    );
    const [filteredData, setFilteredData] = useState<any>(dataSource);

    function stripNullValues(obj: any): any {
        if (typeof obj !== "object" || obj === null) {
            return obj;
        }

        if (Array.isArray(obj)) {
            return obj.map(stripNullValues);
        }

        return Object.keys(obj).reduce((acc, key) => {
            const value = stripNullValues(obj[key]);
            if (value !== null) {
                // @ts-ignore
                acc[key] = value;
            }
            return acc;
        }, {});
    }

    const handleSearch = () => {
        const content = dataSource?.filter((item) =>
            Object.values(stripNullValues(item)).some((value) =>
                JSON.stringify(value || "")
                    .toLocaleLowerCase()
                    .includes(searchValue.toLocaleLowerCase())
            )
        );

        setFilteredData(content);
    };

    const handleFilter = async () => {
        await form.validateFields();
        const values = form.getFieldsValue();

        const newVal = dataSource?.filter((obj) => {
            const propertyNames = values.column.split(".");
            const value = propertyNames.reduce((acc: any, curr: any) => {
                return acc && acc[curr];
            }, obj);

            return JSON.stringify(value)
                .toLowerCase()
                .includes(values.value.toLowerCase());
        });

        setFilteredData(newVal);
    };

    const clearFilter = () => {
        setFilteredData(dataSource);
        setSearchValue("");
        form.resetFields();
    };

    const renderCheckboxContent = () => {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "5px 5px",
                    gap: "2px",
                    zIndex: 200,
                }}
            >
                <Checkbox
                    checked={checkAll}
                    indeterminate={indeterminate}
                    onChange={onCheckAllChange}
                >
                    All
                </Checkbox>

                <CheckboxGroup
                    className="custom-table-checkbox"
                    onChange={onChange}
                    value={checkedList}
                    options={checkboxOptions.map((x) => ({
                        label: x.title?.toString() || "",
                        value: x.title?.toString() || "",
                    }))}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                ></CheckboxGroup>
            </div>
        );
    };

    const renderPopoverContent = () => {
        const defaultRules = [
            {
                required: true,
                message: "This field is required",
            },
        ];
        return (
            <>
                <Form
                    form={form}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    labelAlign="left"
                >
                    <FormItem
                        label="Column"
                        name="column"
                        required
                        rules={defaultRules}
                    >
                        <Select
                            getPopupContainer={undefined}
                            options={(columns || []).map((x) => ({
                                label: x.title?.toString() || "",
                                value: x.key?.toString() || "",
                            }))}
                        />
                    </FormItem>

                    <FormItem
                        label="Condition"
                        name="condition"
                        required
                        rules={defaultRules}
                    >
                        <Select
                            getPopupContainer={undefined}
                            options={[{ label: "Contains", value: "contains" }]}
                        />
                    </FormItem>

                    <FormItem
                        label="Value"
                        name="value"
                        required
                        rules={defaultRules}
                    >
                        <Input />
                    </FormItem>

                    <Space
                        align="end"
                        size="small"
                        style={{ width: "100%", justifyContent: "flex-end" }}
                    >
                        <Button btntype="Close" onClick={clearFilter}>
                            Clear
                        </Button>
                        <Button btntype="Submit" onClick={handleFilter}>
                            Submit
                        </Button>
                    </Space>
                </Form>
            </>
        );
    };

    const onChange = (list: CheckboxValueType[]) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < checkboxOptions.length);
        setCheckAll(list.length === checkboxOptions.length);
    };

    const onCheckAllChange = (e: CheckboxChangeEvent) => {
        setCheckedList(
            e.target.checked
                ? checkboxOptions.map((x) => x.title?.toString() || "")
                : []
        );
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    useEffect(() => {
        if (dataSource) {
            setFilteredData(dataSource);
        }
    }, [dataSource]);

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "15px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                        alignItems: "center",
                        flex: 2,
                    }}
                >
                    <div
                        style={{ flex: 1, maxWidth: "250px" }}
                        hidden={!showSearch}
                    >
                        <Input
                            onChange={(e) => setSearchValue(e.target.value)}
                            addonAfter={
                                <SearchOutlined onClick={handleSearch} />
                            }
                            className="custom-table-search"
                            onPressEnter={handleSearch}
                            placeholder="Search text"
                            value={searchValue}
                        />
                    </div>

                    <div
                        style={{
                            flex: 1,
                            display: !showColumns ? "none" : "flex",
                            flexDirection: "row",
                            gap: "5px",
                            maxWidth: "200px",
                            width: "200px",
                        }}
                    >
                        <Form
                            style={{
                                maxWidth: "200px",
                                display: "block",
                                width: "100%",
                            }}
                        >
                            <FormItem
                                label="Columns"
                                style={{ margin: "0 auto" }}
                            >
                                <Select
                                    placeholder="Columns"
                                    value={checkedList.join(",")}
                                    dropdownRender={() =>
                                        renderCheckboxContent()
                                    }
                                    popupClassName="table-dropdown-popup"
                                    getPopupContainer={undefined}
                                />
                            </FormItem>
                        </Form>
                    </div>

                    <div style={{ flex: 1, gap: "5px" }} hidden={!showFilter}>
                        <Popover
                            className="custom-table-filter"
                            content={renderPopoverContent}
                            placement="bottomLeft"
                            arrow={false}
                            trigger={["click"]}
                        >
                            <FilterOutlined />
                            <Text color={COLOURS.BRAND.Secondary}>Filters</Text>
                        </Popover>
                    </div>
                </div>

                <div style={{ flex: 1 }}>{actions}</div>
            </div>

            <AntdTable
                {...rest}
                dataSource={filteredCols.length > 1 ? filteredData : []}
                columns={filteredCols}
                className="custom-table"
                size={size}
            >
                {children}
            </AntdTable>
        </>
    );
};

export const AddTable: React.FC<IAddTableProps<any>> = ({
    form,
    children,
    dataSource,
    columns,
    rowKey = "name",
    contentName = "Item",
    innerFormProps = {
        labelAlign: "left",
    },
    defaultAdd,
    errorText = "Please resolve invalid form fields",
    addEnabled = true,
    deleteEnabled = true,
    size = "small",
    ...rest
}) => {
    const [errors, setErrors] = useState<
        {
            name: InternalNamePath;
            errors: string[];
        }[]
    >([]);

    const memoizedColumns = useCallback(
        (remove: any) => {
            const col = (columns || []).map((x) => {
                return {
                    ...x,
                    render: (_: unknown, item: any, index: number) => {
                        const dataIndex =
                            x.dataIndex instanceof Array
                                ? [...x.dataIndex]
                                : x.dataIndex;

                        const parsedName: [number | string] = [index];

                        if (
                            x.hidden &&
                            x.hidden(
                                form.getFieldValue(["items", ...parsedName])
                            )
                        )
                            return null;

                        if (dataIndex instanceof Array) {
                            parsedName.push(...dataIndex);
                        } else {
                            parsedName.push(dataIndex?.toString() || "");
                        }

                        const error = errors.find(
                            (y) =>
                                JSON.stringify(y.name) ===
                                JSON.stringify(["items", ...parsedName])
                        );

                        return (
                            <Tooltip
                                title={
                                    error?.errors?.map((x, index) => (
                                        <Text
                                            color={COLOURS.TEXT.White}
                                            key={index}
                                        >
                                            {x}
                                        </Text>
                                    )) || ""
                                }
                                key={index}
                                color={COLOURS.STATUS.Error}
                            >
                                <FormItem
                                    name={parsedName}
                                    required={x.required}
                                    rules={x.rules}
                                    help={false}
                                    valuePropName={x.valuePropName || "value"}
                                >
                                    {x.component
                                        ? x.component
                                        : form.getFieldValue([
                                              "items",
                                              ...parsedName,
                                          ])}
                                </FormItem>
                            </Tooltip>
                        );
                    },
                };
            });

            if (deleteEnabled) {
                col.push({
                    title: "Actions",
                    dataIndex: "action",
                    fixed: "right",
                    width: 10,
                    render: (_: unknown, item: any, index: number) => {
                        return (
                            <Space>
                                <Button
                                    btntype="Delete"
                                    onClick={() => remove(index)}
                                >
                                    <DeleteOutlined
                                        style={{
                                            color: COLOURS.BRAND.Secondary,
                                        }}
                                    />
                                </Button>
                            </Space>
                        );
                    },
                });
            }

            return col;
        },
        [columns, errors, form]
    );

    useEffect(() => {
        if (dataSource && form) {
            form.setFieldsValue({ items: dataSource });
        }
    }, [dataSource, form]);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Form
                form={form}
                onFinishFailed={(err) => {
                    setErrors(err.errorFields);
                }}
                wrapperCol={{ span: 24 }}
                labelCol={{ span: 0 }}
                onValuesChange={async () => {
                    await form.submit();
                }}
                onFinish={() => {
                    setErrors([]);
                }}
            >
                <FormList name="items">
                    {(fields, { add, remove }, meta) => {
                        return (
                            <AntdTable
                                dataSource={fields}
                                columns={memoizedColumns(remove)}
                                rowKey={rowKey}
                                pagination={false}
                                className={`custom-table ${
                                    rest.className || ""
                                }`}
                                footer={() => (
                                    <Text
                                        as="ref"
                                        color={COLOURS.BRAND.Secondary}
                                        onClick={() =>
                                            defaultAdd ? add(defaultAdd) : add()
                                        }
                                        hidden={!addEnabled}
                                    >
                                        <Space>
                                            <PlusOutlined />
                                            {`Add ${contentName}`}
                                        </Space>
                                    </Text>
                                )}
                                size={size}
                                {...rest}
                            >
                                {children}
                            </AntdTable>
                        );
                    }}
                </FormList>
            </Form>

            <div
                hidden={errors.length > 0 ? false : true}
                style={{
                    width: "100%",
                    backgroundColor: "rgb(204, 36, 36, 0.3)",
                    padding: "8px",
                }}
            >
                <Text>
                    <Space>
                        <WarningOutlined />
                        {errorText}
                    </Space>
                </Text>
            </div>
        </div>
    );
};

export const UploadTable: React.FC<IUploadTableProps<any>> = ({
    form,
    children,
    files,
    setFiles,
    rowKey = "id",
    columns,
    accept = "*",
    size = "small",
    ...rest
}) => {
    const [errors, setErrors] = useState<
        {
            name: InternalNamePath;
            errors: string[];
        }[]
    >([]);

    const memoizedColumns = useCallback(
        (remove: any) => {
            const cols = (columns || []).map((x) => ({
                ...x,
                width: x.width || 200,
                render: (_: unknown, item: any, index: number) => {
                    const dataIndex =
                        x.dataIndex instanceof Array
                            ? [...x.dataIndex]
                            : x.dataIndex;

                    const parsedName: [number | string] = [index];

                    if (
                        x.hidden &&
                        x.hidden(form.getFieldValue(["items", ...parsedName]))
                    )
                        return null;

                    if (dataIndex instanceof Array) {
                        parsedName.push(...dataIndex);
                    } else {
                        parsedName.push(dataIndex?.toString() || "");
                    }
                    const error = errors.find(
                        (y) =>
                            JSON.stringify(y.name) ===
                            JSON.stringify(["items", ...parsedName])
                    );

                    return (
                        <Tooltip
                            title={
                                error?.errors?.map((x, index) => (
                                    <Text
                                        color={COLOURS.TEXT.White}
                                        key={index}
                                    >
                                        {x}
                                    </Text>
                                )) || ""
                            }
                            key={index}
                            color={COLOURS.STATUS.Error}
                            arrow={false}
                        >
                            <FormItem
                                name={parsedName}
                                required={x.required}
                                rules={x.rules}
                                help={false}
                                valuePropName={x.valuePropName || "value"}
                            >
                                {x.component
                                    ? x.component
                                    : form.getFieldValue([
                                          "items",
                                          ...parsedName,
                                      ])}
                            </FormItem>
                        </Tooltip>
                    );
                },
            }));

            cols.push({
                title: "Actions",
                dataIndex: "action",
                key: "action",
                fixed: "right",
                width: 20,
                render: (_: unknown, item: unknown, index: number) => {
                    return (
                        <Button
                            btntype="Delete"
                            onClick={() => {
                                if (!setFiles) return;
                                if (!files) return;

                                const fields = form.getFieldsValue(true);
                                fields.items = fields.items ? fields.items : [];

                                // Find the object in the array and remove from state.
                                const item = fields.items[index];
                                setFiles(
                                    files.filter((x) => x.uid !== item.id)
                                );

                                // Removing the object from the form
                                remove(index);
                            }}
                        >
                            <DeleteOutlined
                                style={{ color: COLOURS.TEXT.Red }}
                            />
                        </Button>
                    );
                },
            });

            return cols;
        },
        [columns, errors, files, setFiles, form]
    );

    return (
        <>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    gap: "15px",
                    flexDirection: "column",
                }}
            >
                <Dragger
                    files={files}
                    setFiles={setFiles}
                    accept={accept}
                    showUploadList={false}
                />

                <Form
                    form={form}
                    onFinishFailed={(err) => {
                        setErrors(err.errorFields);
                    }}
                    onValuesChange={form.submit}
                    wrapperCol={{ span: 24 }}
                >
                    <FormList name="items">
                        {(fields, { remove }, meta) => {
                            return (
                                <AntdTable
                                    dataSource={fields}
                                    columns={memoizedColumns(remove)}
                                    rowKey={rowKey}
                                    pagination={false}
                                    className={`custom-table ${
                                        rest.className || ""
                                    }`}
                                    scroll={{ x: "max-content" }}
                                    size={size}
                                    {...rest}
                                >
                                    {children}
                                </AntdTable>
                            );
                        }}
                    </FormList>
                </Form>
            </div>
        </>
    );
};
