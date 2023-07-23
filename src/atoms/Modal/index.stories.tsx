import { useState } from "react";
import { Modal, StepModal } from ".";
import { Button } from "../Button";
import { TextBase } from "../Typography";

export default {
    title: "Atoms/Modal",
};

export const Default = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <Button onClick={toggle}>Open</Button>
            <Modal open={open} cancelFn={toggle} title="Some Title">
                <p>Some contents...</p>
            </Modal>
        </>
    );
};

export const ExampleStepContent = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen((prev) => !prev);
    };

    const content = [
        {
            title: "First",
            content: <TextBase>First Content</TextBase>,
            // description: "First description that is so stupidly liong",
        },
        { title: "Second", content: <TextBase>Second Content2</TextBase> },
    ];

    return (
        <>
            <Button onClick={toggle}>Open</Button>
            <StepModal
                open={open}
                cancelFn={toggle}
                title="Some Title"
                subtitle="If a product has been already traced, the changes will immediately be reflected in past orders
                Thus, be careful to update the details"
                stepContent={content}
            ></StepModal>
        </>
    );
};
