import { MenuOutlined } from "@ant-design/icons";
import { Dropdown as AntdDropdown, DropdownProps } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Space } from "../Space";

export type {
  MenuDividerType,
  MenuItemGroupType,
  MenuItemType,
  SubMenuType,
} from "antd/es/menu/hooks/useItems";
export type { MenuProps } from "antd/lib/menu";

export interface IDropdownProps extends DropdownProps {}
export interface IMenuItemType extends Omit<MenuItemType, "onClick"> {
  onClick?: () => any | Promise<any>;
  disabled?: boolean;
}
export interface ICollapsibleDropdownProps extends IDropdownProps {
  hoverLabel?: string;
  hoverIcon?: React.ReactNode;
  triggerHoverWidth?: number;
  hidden?: boolean;
}

export const Dropdown: React.FC<IDropdownProps> = (props) => {
  return <AntdDropdown {...props}></AntdDropdown>;
};

export const CollapsibleDropdown: React.FC<ICollapsibleDropdownProps> = ({
  hoverLabel = "Actions",
  hoverIcon = <MenuOutlined />,
  triggerHoverWidth = 600,
  menu,
  hidden,
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
          {hoverIcon}
        </Dropdown>
      ) : (
        <Space>
          {menu?.items?.map((x, index) => {
            const value = x as IMenuItemType;
            console.log(x);

            return (
              <div key={`btn-${index}`} hidden={hidden}>
                <Button
                  icon={value.icon}
                  onClick={value.onClick}
                  disabled={value.disabled}
                >
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
