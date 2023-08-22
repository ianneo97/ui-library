import { Content, Footer, Header, Layout, Sider } from ".";

export default {
    title: "Atoms/Layout",
};

export const Default = () => {
    return (
        <>
            <Layout>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </>
    );
};
