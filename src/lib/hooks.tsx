import { Attributes, HTMLAttributes, useMemo } from "react";
import { create } from "zustand";
import { tagBackgrounds } from "./utils";

interface StateStore {
    a11yOn: boolean;
    overlay: boolean;

    firstName: string;
    lastName: string;

    emailNotifications: boolean;
    pushNotifications: boolean;

    is12HourTime: boolean;

    microphoneOn: boolean;
    cameraOn: boolean;
    handRaised: boolean;
}

export const useStateStore = create<StateStore>((set) => ({
    a11yOn: localStorage.getItem("a11yOn") === "true" || false,
    overlay: false,

    firstName: "John",
    lastName: "Doe",

    emailNotifications: true,
    pushNotifications: true,

    is12HourTime: true,

    microphoneOn: false,
    cameraOn: false,
    handRaised: false,
}));

//implementing a component where the user can hover over elements and see ARIA attributes
interface HoverDataState {
    hoveredElement: HTMLElement | null;
}

const attributesToCheck: {
    label: string;
    value: keyof HTMLAttributes<HTMLElement>;
}[] = [
    { label: "ARIA role", value: "role" },
    { label: "ARIA expanded", value: "aria-expanded" },
    { label: "ARIA checked", value: "aria-checked" },
    { label: "ARIA current", value: "aria-current" },
    { label: "ARIA described by", value: "aria-describedby" },
    { label: "ARIA has popup", value: "aria-haspopup" },
    { label: "ARIA hidden", value: "aria-hidden" },
    { label: "ARIA selected", value: "aria-selected" },
];

const tagsToMakeLabelFromTextContent = [
    "button",
    "a",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "span",
    "li",
    "label",
];

export const useHoverDataStore = create<HoverDataState>((set) => ({
    hoveredElement: null,
}));

export const useHoverData = () => {
    const { hoveredElement } = useHoverDataStore();

    const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.currentTarget as HTMLElement;
        useHoverDataStore.setState({ hoveredElement: target });
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
        useHoverDataStore.setState({ hoveredElement: null });
    };

    const invisibleClass = "opacity-0 bg-transparent shadow-none";
    const visibleClass = "opacity-100 bg-white shadow-md";

    const renderedHoverData = useMemo(() => {
        let noValue = true;

        const ariaLabelValue = hoveredElement?.getAttribute("aria-label");
        const textContent = hoveredElement
            ? tagsToMakeLabelFromTextContent.includes(
                  hoveredElement?.tagName.toLowerCase(),
              )
                ? hoveredElement?.textContent?.trim()
                : null
            : null;

        if (ariaLabelValue || textContent) {
            noValue = false;
        }

        return (
            <div
                className={`fixed bottom-4 right-4 z-50 max-w-[500px] rounded-lg border border-gray-100 shadow-md transition-opacity duration-300 ${hoveredElement ? visibleClass : invisibleClass}`}
                aria-hidden
            >
                {hoveredElement ? (
                    <>
                        <div
                            className={`rounded-t-lg p-2 ${tagBackgrounds[hoveredElement.tagName.toLowerCase()] || "bg-gray-500"}`}
                        >
                            <h3 className="text-sm font-bold text-white">
                                {hoveredElement.tagName.toLowerCase()}
                            </h3>
                        </div>
                        <div className="gap- flex flex-col px-4 py-2">
                            <div
                                key={"label"}
                                className="flex items-center gap-4"
                            >
                                <strong className="text-sm">
                                    {ariaLabelValue || textContent
                                        ? !ariaLabelValue &&
                                          tagsToMakeLabelFromTextContent.includes(
                                              hoveredElement.tagName.toLowerCase(),
                                          )
                                            ? "Label (derived from text content)"
                                            : "ARIA label"
                                        : null}
                                </strong>
                                <span>
                                    {ariaLabelValue || textContent || null}
                                </span>
                            </div>

                            {attributesToCheck
                                .filter((a) => a.value !== "aria-label")
                                .map((attr) => {
                                    let value = hoveredElement.getAttribute(
                                        attr.value,
                                    );

                                    if (value) {
                                        noValue = false;
                                    }

                                    return value ? (
                                        <div
                                            key={attr.value}
                                            className="flex items-center gap-4"
                                        >
                                            <strong className="text-sm">
                                                {attr.label}
                                            </strong>
                                            <span>{value || null}</span>
                                        </div>
                                    ) : null;
                                })}

                            {noValue && (
                                <div className="text-gray-400">
                                    No ARIA attributes found
                                </div>
                            )}
                        </div>
                    </>
                ) : null}
            </div>
        );
    }, [hoveredElement]);

    return {
        hoveredElement,
        handleMouseEnter,
        handleMouseLeave,
        renderedHoverData,
    };
};
