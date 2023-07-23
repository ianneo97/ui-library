import { Divider } from ".";
import { TextBase } from "../Typography";

export default {
    title: "Atoms/Divider",
};

export const Default = () => {
    return (
        <>
            <TextBase>Divider 1</TextBase>
            <Divider dashed>This is the divider</Divider>
            <TextBase>Divider 2</TextBase>
        </>
    );
};
