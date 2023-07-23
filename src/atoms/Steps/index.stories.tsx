import { Steps } from ".";

export default {
    title: "Atoms/Steps",
};

export const Default = () => {
    const description = "This is a description.";
    const items = [
        {
            title: "Finished",
            description,
        },
        {
            title: "In Progress",
            description,
        },
        {
            title: "Waiting",
            description,
        },
    ];

    return <Steps items={items} direction="vertical" />;
};
