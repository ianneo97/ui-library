import { Progress } from ".";

export default {
    title: "Atoms/Progress",
};

export const Default = () => {
    return (
        <>
            <Progress percent={10}></Progress>
            <Progress percent={50}></Progress>
            <Progress percent={100}></Progress>
        </>
    );
};
