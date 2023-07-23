import { UploadOutlined } from "@ant-design/icons";
import { Upload as AntdUpload, UploadFile, UploadProps, message } from "antd";
import { Space } from "../Space";
import { Text } from "../Typography";
import { useState } from "react";
import { RcFile } from "antd/es/upload";
import { Modal } from "../Modal";

export interface IUploadProps extends UploadProps {
    content?: React.ReactNode;
    defaultTitle?: string;
    defaultDescription?: string;
    files?: UploadFile<any>[];
    setFiles?: (files: UploadFile<any>[]) => void;
}

export const Upload: React.FC<IUploadProps> = ({
    children,
    accept = "*",
    multiple = false,
    showUploadList = true,
    files,
    fileList,
    setFiles,
    beforeUpload = (file, files) => {
        if (accept === "*") return false;

        const isSupported = accept.split(",").includes(file.type);

        if (!isSupported) {
            message.error("Unsupported file type");
        }

        return isSupported ? false : AntdUpload.LIST_IGNORE;
    },
    onChange = (info) => {
        if (!setFiles) return;

        const fileList = info.fileList.map((file) => {
            if (file.response) {
                file.url = file.response.url;
            }
            return file;
        });

        setFiles(fileList);
    },
    ...rest
}) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [previewTitle, setPreviewTitle] = useState("");

    const getBase64 = (file: RcFile): Promise<string> =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(
            file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
        );
    };

    return (
        <>
            <AntdUpload
                accept={accept}
                multiple={multiple}
                showUploadList={showUploadList}
                beforeUpload={beforeUpload}
                fileList={files ? files : fileList}
                onChange={onChange}
                onPreview={handlePreview}
                {...rest}
            >
                {children}
            </AntdUpload>

            <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                cancelFn={handleCancel}
            >
                <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                />
            </Modal>
        </>
    );
};

export const Dragger: React.FC<IUploadProps> = ({
    accept = "*",
    multiple = true,
    defaultTitle = "Select a file and drag it here.",
    defaultDescription = "Supported file types are PDF, JPG, PNG.",
    showUploadList = true,
    fileList,
    files,
    setFiles,
    beforeUpload = (file, files) => {
        if (accept === "*") return false;

        const isSupported = accept.split(",").includes(file.type);

        if (!isSupported) {
            message.error("Unsupported file type");
        }

        return isSupported ? false : AntdUpload.LIST_IGNORE;
    },
    onChange = (info) => {
        if (!setFiles) return;

        const fileList = info.fileList.map((file) => {
            if (file.response) {
                file.url = file.response.url;
            }
            return file;
        });

        setFiles(fileList);
    },
    content = (
        <>
            <div style={{ display: "flex" }}>
                <Space
                    align="center"
                    style={{ width: "100%", justifyContent: "center" }}
                >
                    <UploadOutlined style={{ fontSize: "42px" }} />

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "baseline",
                        }}
                    >
                        <Text fontSize="16px">{defaultTitle}</Text>
                        <Text fontSize="12px">{defaultDescription}</Text>
                    </div>
                </Space>
            </div>
        </>
    ),
    ...rest
}) => {
    return (
        <AntdUpload.Dragger
            accept={accept}
            multiple={multiple}
            beforeUpload={beforeUpload}
            showUploadList={showUploadList}
            fileList={files ? files : fileList}
            onChange={onChange}
            {...rest}
        >
            {content}
        </AntdUpload.Dragger>
    );
};

export type {
    UploadFile,
    UploadFileStatus,
    UploadListProps,
    RcFile,
} from "antd/lib/upload/interface";
