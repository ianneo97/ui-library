import { Space, SpaceCompact } from ".";

export default {
    title: "Atoms/Space",
};

export const Default = () => {
    return (
        <>
            <Space direction="vertical">
                <Space>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </Space>

                <br></br>

                <Space direction="vertical">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </Space>

                <br></br>

                <SpaceCompact>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </SpaceCompact>

                <br></br>

                <SpaceCompact direction="vertical">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </SpaceCompact>
            </Space>
        </>
    );
};
