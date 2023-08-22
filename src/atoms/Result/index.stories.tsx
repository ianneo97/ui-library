import { Result } from ".";

export default {
    title: "Atoms/Result",
};

export const Default = () => {
    return (
        <>
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
            />
        </>
    );
};
