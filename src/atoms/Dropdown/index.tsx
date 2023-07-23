import { DropdownProps, Dropdown as AntdDropdown } from "antd";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Space } from "../Space";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "../Typography";
import { MenuItemType } from "antd/es/menu/hooks/useItems";

export type { MenuProps } from "antd/lib/menu";
export type {
    MenuItemType,
    SubMenuType,
    MenuItemGroupType,
    MenuDividerType,
} from "antd/es/menu/hooks/useItems";

export interface IDropdownProps extends DropdownProps {}
export interface IMenuItemType extends Omit<MenuItemType, "onClick"> {
    onClick?: () => any | Promise<any>;
}
export interface ICollapsibleDropdownProps extends IDropdownProps {
    hoverLabel?: string;
    hoverIcon?: React.ReactNode;
    triggerHoverWidth?: number;
}

export const Dropdown: React.FC<IDropdownProps> = (props) => {
    return <AntdDropdown {...props}></AntdDropdown>;
};

export const CollapsibleDropdown: React.FC<ICollapsibleDropdownProps> = ({
    hoverLabel = "Actions",
    hoverIcon = <DownOutlined />,
    triggerHoverWidth = 600,
    menu,
    ...rest
}) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            setVisible(screenWidth <= 600); // Adjust the threshold as needed
        };

        // Add an event listener to handle window resize
        window.addEventListener("resize", handleResize);

        // Call the handleResize function initially to set the state based on the initial screen width
        handleResize();

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {visible ? (
                <Dropdown {...rest} menu={{ items: menu?.items }}>
                    <Space>
                        <Link>{hoverLabel}</Link>
                        {hoverIcon}
                    </Space>
                </Dropdown>
            ) : (
                <Space>
                    {menu?.items?.map((x, index) => {
                        const value = x as IMenuItemType;

                        return (
                            <div key={`btn-${index}`}>
                                <Button onClick={value.onClick}>
                                    {value.label}
                                </Button>
                            </div>
                        );
                    })}
                </Space>
            )}
        </div>
    );
};
