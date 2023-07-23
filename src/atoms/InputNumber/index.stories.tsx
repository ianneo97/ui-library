import { InputNumber } from ".";
import { Form, FormItem } from "../Form";

export default {
    title: "Atoms/InputNumber",
};

export const Default = () => {
    return (
        <Form>
            <FormItem>
                <InputNumber />
            </FormItem>
        </Form>
    );
};
