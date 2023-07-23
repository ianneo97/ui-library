import { useState } from "react";
import { Button } from "../Button";
import { Drawer } from ".";

export default {
    title: "Atoms/Drawer",
};

export const Default = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button onClick={showDrawer}>Open</Button>

            <Drawer
                title="Basic Drawer"
                placement="right"
                onClose={onClose}
                open={open}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};
