import { useHoverData, useStateStore } from "../lib/hooks";
import SDiv from "./s-div";

const Breadcrumbs = () => {
    const a11yOn = useStateStore((state) => state.a11yOn);

    const { handleMouseEnter: hoverOn, handleMouseLeave: hoverOff } =
        useHoverData();
    const hoverProps = { onMouseEnter: hoverOn, onMouseLeave: hoverOff };

    const items = [
        { title: "A11y Sandbox", href: "#" },
        { title: "Dashboard", href: "#" },
        { title: "Files", href: "#" },
    ].map((item, index) => (
        <>
            <a
                key={`breadcrumb-${index}`}
                href={item.href}
                className={`${
                    index < 2 ? "text-gray-500" : "font-bold text-blue-600"
                }`}
                aria-current={
                    a11yOn ? (index === 2 ? "page" : undefined) : undefined
                }
                {...hoverProps}
            >
                {item.title}
            </a>

            {index < 2 && <span className="text-gray-500">/</span>}
        </>
    ));

    const rootClass = "flex gap-2";

    return (
        <SDiv
            className={rootClass}
            tag={a11yOn ? "nav" : undefined}
            aria-label={a11yOn ? "Breadcrumb" : undefined}
        >
            {items}
        </SDiv>
    );
};

export default Breadcrumbs;
