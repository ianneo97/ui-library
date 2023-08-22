import { Badge } from ".";
import { Avatar } from "../Avatar";

export default {
    title: "Atoms/Badge",
};

export const Default = () => {
    return (
        <>
            <Badge count={5}>
                <Avatar size="large" shape="square"></Avatar>
            </Badge>
        </>
    );
};
