import {
    Breadcrumb as AntdBreadcrumb,
    BreadcrumbProps,
    BreadcrumbItemProps,
} from "antd";

export interface IBreadcrumbProps extends BreadcrumbProps {}
export interface IBreadcrumbItemProps extends BreadcrumbItemProps {}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
    children,
    ...props
}) => {
    return <AntdBreadcrumb {...props}>{children}</AntdBreadcrumb>;
};

export const BreadcrumbItem: React.FC<IBreadcrumbItemProps> = ({
    children,
    ...props
}) => {
    return <AntdBreadcrumb.Item {...props}>{children}</AntdBreadcrumb.Item>;
};
