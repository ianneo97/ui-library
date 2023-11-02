import { DatePicker } from ".";
import { Form, FormItem } from "../Form";

export default {
  title: "Atoms/Datepicker",
};

export const Default = () => {
  return (
    <>
      <DatePicker></DatePicker>
      <Form>
        <FormItem label="he">
          <DatePicker />
        </FormItem>
      </Form>
    </>
  );
};
