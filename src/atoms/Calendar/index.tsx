import { Calendar as AntdCalendar, CalendarProps } from "antd";

export interface ICalendarProps<T> extends CalendarProps<T> {}

export const Calendar: React.FC<ICalendarProps<any>> = ({ ...props }) => {
    return <AntdCalendar {...props}></AntdCalendar>;
};
