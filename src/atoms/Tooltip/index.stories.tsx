import { Tooltip } from ".";
import { TextBase } from "../Typography";

export default {
    title: "Atoms/Tooltip",
};

export const Default = () => {
    return (
        <>
            <Tooltip title="Sample" autoAdjustOverflow>
                <TextBase>Hello</TextBase>
            </Tooltip>
        </>
    );
};
