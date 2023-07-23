import {
    CloseCircleOutlined,
    DeleteOutlined,
    DownloadOutlined,
    EditOutlined,
    PlusOutlined,
} from "@ant-design/icons";
import { Button, TooltipButton } from ".";
import { Space } from "../Space";

export default {
    title: "Atoms/Button",
};

export const Default = () => {
    const fn = async () => {
        const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

        await sleep(1000);
    };

    return (
        <>
            <Space direction="vertical">
                <Button icon={<PlusOutlined />} onClick={fn} btntype="Submit">
                    Button
                </Button>

                <TooltipButton
                    icon={<CloseCircleOutlined />}
                    btntype="Close"
                    tooltipTitle="Button"
                    onClick={fn}
                >
                    Button
                </TooltipButton>

                <Button onClick={fn} icon={<DeleteOutlined />} btntype="Delete">
                    Button
                </Button>

                <Button onClick={fn} icon={<EditOutlined />} btntype="Edit">
                    Button
                </Button>

                <Button onClick={fn} icon={<DownloadOutlined />}>
                    Button
                </Button>
            </Space>
        </>
    );
};
