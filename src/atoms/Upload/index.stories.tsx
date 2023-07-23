import { useState } from "react";
import { Dragger, Upload, UploadFile } from ".";
import { Link, Text } from "../Typography";
import { Space } from "../Space";

export default {
    title: "Atoms/Upload",
};

export const Default = () => {
    const [files, setFiles] = useState<UploadFile[]>([]);

    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <Upload files={files} setFiles={setFiles}>
                + Upload
            </Upload>

            <div>
                <Text>Without State</Text>
                <Dragger></Dragger>
            </div>

            <div>
                <Text>With State</Text>
                <Dragger files={files} setFiles={setFiles}></Dragger>
            </div>

            <Upload>
                <Link>+ Upload</Link>
            </Upload>

            <Upload listType="picture-card" files={files} setFiles={setFiles}>
                + Upload
            </Upload>
        </Space>
    );
};
