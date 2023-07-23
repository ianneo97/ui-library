import { Card } from "antd";
import { Form, FormItem, FormList, useForm } from ".";
import { Input } from "../Input";
import { Button } from "../Button";
import React from "react";
import { Space } from "../Space";
import { TextBase } from "../Typography";

export default {
    title: "Atoms/Form",
};

export const Default = () => {
    const [form] = useForm();

    const submit = async () => {
        console.log(form.getFieldsValue(true));
    };

    return (
        <>
            <Card>
                <Form
                    form={form}
                    labelCol={{ span: 8 }}
                    labelAlign="left"
                    labelWrap
                    wrapperCol={{ span: 16 }}
                    colon={false}
                >
                    <FormItem
                        label={"ruleset:detail.name"}
                        name={"name"}
                        required
                    >
                        <Input />
                    </FormItem>

                    <FormItem
                        label={"ruleset:detail.code"}
                        name="code"
                        required
                    >
                        <Input />
                    </FormItem>

                    <FormItem
                        label={"ruleset:detail.description"}
                        name="description"
                        required
                    >
                        <Input />
                    </FormItem>

                    <Button onClick={submit}>Submit</Button>
                </Form>
            </Card>
        </>
    );
};

export const ExampleFormList = () => {
    const [form] = useForm();

    const submit = async () => {
        console.log(form.getFieldsValue(true));
    };

    return (
        <Card>
            <Form
                form={form}
                initialValues={{ fields: [{ code: "" }] }}
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 24 }}
            >
                <FormList name="fields">
                    {(fields, { add, remove }) => {
                        return (
                            <>
                                {fields.map((x: any, index: number) => (
                                    <React.Fragment key={index}>
                                        <TextBase>List Item: {index}</TextBase>
                                        <FormItem
                                            name={[index, "code"]}
                                            label="Code"
                                        >
                                            <Input />
                                        </FormItem>
                                    </React.Fragment>
                                ))}

                                <Space>
                                    <Button
                                        onClick={() => add({ code: "123" })}
                                    >
                                        Add
                                    </Button>

                                    <Button onClick={submit}>Submit</Button>
                                </Space>
                            </>
                        );
                    }}
                </FormList>
            </Form>
        </Card>
    );
};
