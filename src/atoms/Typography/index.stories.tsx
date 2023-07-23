import { Link, LinkStrong, SubheaderTitle, Text, TextStrong, Title } from ".";
import { Space } from "../Space";

export default {
    title: "Atoms/Typography",
};

export const Fonts = () => {
    return (
        <>
            <Space direction="vertical">
                <Title>Sample title</Title>
                <SubheaderTitle>Sample Title</SubheaderTitle>
                <TextStrong>Sample text</TextStrong>
                <Text>Sample text</Text>
                <LinkStrong>Sample Text</LinkStrong>
                <Link>Sample Text</Link>
            </Space>
        </>
    );
};
