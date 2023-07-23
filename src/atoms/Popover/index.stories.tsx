import { Popover } from ".";
import { Text } from "../Typography";

export default {
    title: "Atoms/Popover",
};

export const Default = () => {
    return (
        <Popover content={<Text>Hover text</Text>}>
            <Text>Sample Text</Text>
        </Popover>
    );
};
