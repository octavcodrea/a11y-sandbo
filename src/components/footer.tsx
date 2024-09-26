import { useStateStore } from "../lib/hooks";
import SDiv from "./s-div";

const Footer = () => {
    const a11yOn = useStateStore((state) => state.a11yOn);

    return (
        <SDiv
            className={`flex items-center justify-center gap-4 bg-gray-800 px-4 py-6 text-white shadow-md`}
            tag={a11yOn ? "footer" : undefined}
        >
            <a href="/">Homepage</a>
            <a href="/about">About</a>
        </SDiv>
    );
};

export default Footer;
