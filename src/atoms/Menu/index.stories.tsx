import { useState } from "react";
import { IMenuProps, ItemGroup, Menu, MenuItem, SubMenu } from ".";
import { LogoutOutlined, SettingOutlined } from "@ant-design/icons";

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

            <div style={{ width: "400px", height: "600px" }}>
                <Menu
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        height: "100%",
                    }}
                >
                    <MenuItem>Dashboard</MenuItem>
                    <SubMenu title="Products">
                        <MenuItem>Categories</MenuItem>
                        <MenuItem>Listing</MenuItem>
                    </SubMenu>
                    <ItemGroup
                        title="Settings"
                        style={{
                            position: "absolute",
                            bottom: 0,
                            width: "100%",
                        }}
                    >
                        <MenuItem>
                            <SettingOutlined /> Workspace Settings
                        </MenuItem>
                        <MenuItem>
                            <LogoutOutlined /> Sign Out
                        </MenuItem>
                    </ItemGroup>
                </Menu>
            </div>
        </>
    );
};
