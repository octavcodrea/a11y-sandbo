import { useHoverData, useStateStore } from "../lib/hooks";
import SDiv from "./s-div";

const Footer = () => {
    const a11yOn = useStateStore((state) => state.a11yOn);

    const { handleMouseEnter: hoverOn, handleMouseLeave: hoverOff } =
        useHoverData();
    const hoverProps = { onMouseEnter: hoverOn, onMouseLeave: hoverOff };

    return (
        <SDiv
            className={`flex items-center justify-center gap-4 bg-gray-800 px-4 py-6 text-white shadow-md`}
            tag={a11yOn ? "footer" : undefined}
            {...hoverProps}
        >
            <a href="/" {...hoverProps}>
                Homepage
            </a>
            <a href="/about" {...hoverProps}>
                About
            </a>
        </SDiv>
    );
};

export default Footer;
