import { DatePicker as AntdDatePicker, DatePickerProps } from "antd";

export { DatePickerProps as IDatePickerProps };

export const DatePicker: React.FC<DatePickerProps> = ({ ...props }) => {
    return <AntdDatePicker {...props}></AntdDatePicker>;
};
