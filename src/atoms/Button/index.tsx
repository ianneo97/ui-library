import { Button as AntdButton, ButtonProps } from "antd";
import { ButtonGroupProps } from "antd/es/button";
import { useState } from "react";
import { ITooltipProps, Tooltip } from "../Tooltip";
import { Text } from "../Typography";
import { COLOURS } from "../constant";

export interface IButtonProps extends Omit<ButtonProps, "type" | "onClick"> {
    onClick?: () => any | Promise<any>;
    btntype?: "Submit" | "Close" | "Delete" | "Edit" | "Default";
}

export interface IButtonGroupProps extends ButtonGroupProps {}

export interface IButtonWithTooltipProps
    extends IButtonProps,
        Omit<ITooltipProps, "color" | "title"> {
    tooltipTitle: string;
    tooltipColor?: string;
}

export const ButtonTypes = (
    hovering: boolean,
    hidden?: boolean
): Record<string, React.CSSProperties> => ({
    Submit: {
        background: COLOURS.BRAND.PrimaryDark,
        color: COLOURS.TEXT.White,
        borderColor: COLOURS.BRAND.PrimaryDark,
        borderRadius: "46px",
        transform: hovering ? "scale(1.05)" : "scale(1)",
        transition: "all 0.3s ease",
        display: hidden ? "none" : "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    Close: {
        background: COLOURS.TEXT.White,
        color: COLOURS.BRAND.PrimaryDark,
        borderColor: COLOURS.BRAND.PrimaryDark,
        borderRadius: "46px",
        transform: hovering ? "scale(1.05)" : "scale(1)",
        transition: "all 0.3s ease",
        display: hidden ? "none" : "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    Edit: {
        background: COLOURS.TEXT.Blue,
        color: COLOURS.TEXT.White,
        borderColor: COLOURS.TEXT.Blue,
        borderRadius: "46px",
        transform: hovering ? "scale(1.05)" : "scale(1)",
        transition: "all 0.3s ease",
        display: hidden ? "none" : "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    Delete: {
        background: COLOURS.TEXT.White,
        color: COLOURS.TEXT.Red,
        borderColor: COLOURS.TEXT.Red,
        borderRadius: "46px",
        transform: hovering ? "scale(1.05)" : "scale(1)",
        transition: "all 0.3s ease",
        display: hidden ? "none" : "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    Default: {
        background: COLOURS.BRAND.Secondary,
        color: COLOURS.TEXT.White,
        borderColor: COLOURS.BRAND.Secondary,
        borderRadius: "46px",
        transform: hovering ? "scale(1.05)" : "scale(1)",
        transition: "all 0.3s ease",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});

export const Button: React.FC<IButtonProps> = ({
    children,
    hidden,
    onClick,
    ...rest
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const handleClick = async () => {
        try {
            setIsLoading(true);
            if (onClick) {
                const response = await onClick();

                return response;
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AntdButton
            {...rest}
            onClick={handleClick}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={ButtonTypes(isHover, hidden)[rest.btntype || "Default"]}
            loading={isLoading}
        >
            <Text
                color={
                    ButtonTypes(isHover, hidden)[rest.btntype || "Default"]
                        ?.color || ""
                }
            >
                {children}
            </Text>
        </AntdButton>
    );
};

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
    children,
    ...rest
}) => {
    return <AntdButton.Group {...rest}>{children}</AntdButton.Group>;
};

export const TooltipButton: React.FC<IButtonWithTooltipProps> = ({
    tooltipTitle,
    tooltipColor,
    children,
    onClick,
    ...rest
}) => {
    return (
        <Tooltip {...rest} title={tooltipTitle} color={tooltipColor}>
            <Button {...rest} onClick={onClick}>
                {children}
            </Button>
        </Tooltip>
    );
};
