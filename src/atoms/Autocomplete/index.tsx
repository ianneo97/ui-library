import { AutoComplete as AntdAutoComplete, AutoCompleteProps } from "antd";

export interface IAutoCompleteProps extends AutoCompleteProps {}

export const AutoComplete: React.FC<IAutoCompleteProps> = (props) => {
    return <AntdAutoComplete {...props}>{props.children}</AntdAutoComplete>;
};
