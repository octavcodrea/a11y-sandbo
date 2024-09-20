import { useStateStore } from "../lib/hooks";
import c from "../App.module.scss";
import SDiv from "./s-div";

const Footer = () => {
    const a11yOn = useStateStore((state) => state.a11yOn);

    return (
        <SDiv className={c.footer} tag={a11yOn ? "footer" : undefined}>
            <a href="/">Homepage</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </SDiv>
    );
};

export default Footer;
