import { Popconfirm } from ".";

export default {
    title: "Atoms/Popconfirm",
};

export const Default = () => {
    const fn = async () => {
        const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

        await sleep(1000);
    };

    return (
        <Popconfirm submit={fn} title="">
            Button
        </Popconfirm>
    );
};
