import { ReactNode, useState } from "react";
import { Card } from ".";
import { TextBase } from "../Typography";
import { Space } from "../Space";

export default {
    title: "Atoms/Cards",
};

export const Default = () => {
    const [selectedTab, setSelectedTab] = useState("tab1");

    const tabTitles = [
        {
            key: "tab1",
            tab: "tab1",
        },
        {
            key: "tab2",
            tab: "tab2",
        },
    ];

    const tabContent: Record<string, ReactNode> = {
        tab1: <TextBase>Tab 1</TextBase>,
        tab2: <TextBase>Tab 2</TextBase>,
    };

    return (
        <>
            <Space direction="vertical" style={{ width: "100%" }}>
                <Card title="Hello" extra={[<TextBase>Hello</TextBase>]}>
                    Hello
                </Card>

                <Card
                    title="Card with Title"
                    tabList={tabTitles}
                    onTabChange={(e) => setSelectedTab(e)}
                >
                    {tabContent[selectedTab]}
                </Card>

                <Card
                    tabList={tabTitles}
                    onTabChange={(e) => setSelectedTab(e)}
                    activeTabKey={selectedTab}
                >
                    {tabContent[selectedTab]}
                </Card>
            </Space>
        </>
    );
};
