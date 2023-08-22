import { Breadcrumb, BreadcrumbItem } from ".";

export default {
    title: "Atoms/Breadcrumb",
};

export const Default = () => {
    return (
        <>
            <Breadcrumb>HI</Breadcrumb>

            <Breadcrumb>
                <BreadcrumbItem>Hello</BreadcrumbItem>
                <BreadcrumbItem>Hello</BreadcrumbItem>
            </Breadcrumb>
        </>
    );
};
