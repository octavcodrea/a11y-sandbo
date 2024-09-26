import React, { forwardRef } from "react";

type sDivProps = React.ComponentPropsWithoutRef<"div"> & {
    children: React.ReactNode;
    tag?: string;
};

/**
 * A functional component that renders a specified HTML tag with forwarded ref and additional props.
 *
 * @param children - The child elements to be rendered inside the component.
 * @param tag - The HTML tag to be rendered. Defaults to "div".
 * @param ref - The ref to be forwarded to the rendered element.
 *
 * @returns The specified HTML element with the provided children and props.
 */

const SDiv = forwardRef<HTMLDivElement, sDivProps>((props, ref) => {
    const { children, tag = "div", ...rest } = props;

    return React.createElement(
        tag,
        {
            ...rest,
            ref: ref,
        },
        children,
    );
});

export default SDiv;
