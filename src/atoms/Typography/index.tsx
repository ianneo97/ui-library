import { Typography as AntdTypograhy } from "antd";
import { LinkProps } from "antd/es/typography/Link";
import { ParagraphProps } from "antd/es/typography/Paragraph";
import { TextProps } from "antd/es/typography/Text";
import { TitleProps } from "antd/es/typography/Title";
import { CSSProperties } from "react";
import { COLOURS } from "../constant";

const subtitleStyle = {
    color: COLOURS.TEXT.Subtitle,
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
};

const textStyle = (
    color: string = COLOURS.TEXT.Primary,
    strong: boolean = false,
    as?: "text" | "ref",
    fontSize: string = "14px"
): CSSProperties => ({
    color: color,
    fontSize: fontSize,
    fontStyle: "normal",
    fontWeight: strong ? 600 : 400,
    lineHeight: "normal",
    alignSelf: "center",
    wordBreak: "keep-all",
    cursor: as === "ref" ? "pointer" : "auto",
});

const linkStyle = (strong: boolean = false): CSSProperties => ({
    color: COLOURS.TEXT.Blue,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: strong ? 600 : 400,
    lineHeight: "normal",
    alignSelf: "center",
});

const titleStyle = (isHeader: boolean): CSSProperties => ({
    color: COLOURS.TEXT.Primary,
    fontSize: isHeader ? "24px" : "20px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    alignSelf: "center",
});

export interface ITextProps extends TextProps {
    children: React.ReactNode;
    as?: "text" | "ref";
    fontSize?: string;
}

export const TextBase: React.FC<TextProps> = ({ children, style, ...rest }) => {
    return (
        <AntdTypograhy.Text style={style} {...rest}>
            {children}
        </AntdTypograhy.Text>
    );
};

export const TitleBase: React.FC<TitleProps> = ({ children, ...rest }) => {
    return <AntdTypograhy.Title {...rest}>{children}</AntdTypograhy.Title>;
};

export const Paragraph: React.FC<ParagraphProps> = ({ children, ...rest }) => {
    return (
        <AntdTypograhy.Paragraph {...rest}>{children}</AntdTypograhy.Paragraph>
    );
};

export const LinkBase: React.FC<LinkProps> = ({ children, ...rest }) => {
    return <AntdTypograhy.Link {...rest}>{children}</AntdTypograhy.Link>;
};

export const Subtitle: React.FC<TextProps> = ({ children, style, ...rest }) => {
    return (
        <TextBase {...rest} style={{ ...subtitleStyle, ...style }}>
            {children}
        </TextBase>
    );
};

export const Text: React.FC<ITextProps> = ({
    children = "",
    color,
    as = "text",
    fontSize,
    style,
    ...rest
}) => {
    return (
        <TextBase
            {...rest}
            style={{ ...textStyle(color, false, as, fontSize), ...style }}
        >
            {children}
        </TextBase>
    );
};

export const TextStrong: React.FC<ITextProps> = ({
    children,
    color,
    as = "text",
    fontSize,
    style,
    ...rest
}) => {
    return (
        <TextBase
            {...rest}
            style={{ ...textStyle(color, true, as, fontSize), ...style }}
        >
            {children}
        </TextBase>
    );
};

export const Title: React.FC<TextProps> = ({ children, style, ...rest }) => {
    return (
        <TextBase {...rest} style={{ ...titleStyle(true), ...style }}>
            {children}
        </TextBase>
    );
};

export const SubheaderTitle: React.FC<TextProps> = ({
    children,
    style,
    ...rest
}) => {
    return (
        <TextBase {...rest} style={{ ...titleStyle(false), ...style }}>
            {children}
        </TextBase>
    );
};

export const Link: React.FC<LinkProps> = ({ children, style, ...rest }) => {
    return (
        <LinkBase {...rest} style={{ ...linkStyle(false), ...style }}>
            {children}
        </LinkBase>
    );
};

export const LinkStrong: React.FC<LinkProps> = ({
    children,
    style,
    ...rest
}) => {
    return (
        <LinkBase {...rest} style={{ ...linkStyle(true), ...style }}>
            {children}
        </LinkBase>
    );
};
