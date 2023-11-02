import { DownOutlined } from "@ant-design/icons";
import { CollapsibleDropdown, Dropdown, MenuProps } from ".";
import { Card } from "../Card";
import { Space } from "../Space";

export default {
  title: "Atoms/Dropdown",
};
const fn = async () => {
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  await sleep(1000);
  console.log("operation completed");
};

const menuItems: MenuProps["items"] = [
  { label: "Item A", key: "0", onClick: fn },
  {
    label: "Item B",
    key: "1",
    onClick: () => {
      console.log("hello bro");
    },
    disabled: true,
  },
];

export const Default = () => {
  return (
    <>
      <Card>
        <Dropdown menu={{ items: menuItems }}>
          <Space>
            Hover me
            <DownOutlined />
          </Space>
        </Dropdown>

        <CollapsibleDropdown menu={{ items: menuItems }} />
      </Card>
    </>
  );
};
