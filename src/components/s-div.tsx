import React, { forwardRef } from "react";

type sDivProps = React.ComponentPropsWithoutRef<"div"> & {
    children: React.ReactNode;
    tag?: string;
};

//semantic div component - if a11y is on, add role and aria-label
const SDiv = forwardRef<HTMLDivElement, sDivProps>((props, ref) => {
    const { children, tag = "div" } = props;

    return React.createElement(
        tag,
        {
            ...props,

            ref: ref,
        },
        children,
    );
});

export default SDiv;
