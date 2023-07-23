import { useState } from "react";
import { IMenuProps, Menu } from ".";

export default {
    title: "Atoms/Menu",
};

export const Default = () => {
    const [current, setCurrent] = useState("mail");

    const items: IMenuProps["items"] = [
        { label: "Mail", key: "mail" },
        { label: "App", key: "app" },
    ];

    const handleClick: IMenuProps["onClick"] = (e) => {
        setCurrent(e.key);
    };

    return (
        <>
            <Menu
                items={items}
                selectedKeys={[current]}
                onClick={handleClick}
                mode="horizontal"
            ></Menu>
        </>
    );
};
