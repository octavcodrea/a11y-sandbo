import React from "react";
import classes from "./App.module.scss";
import { useStateStore } from "./lib/hooks";
import Header from "./components/header";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { cls } from "./lib/utils";
import Footer from "./components/footer";
import FileList from "./components/sections/section-file-list";
import ConferenceControls from "./components/sections/section-conference-controls";
import Settings from "./components/sections/section-settings";

const theme = createTheme({
    fontFamily: "Raleway, sans-serif",
    fontFamilyMonospace: "Monaco, Courier, monospace",
    headings: { fontFamily: "Greycliff CF, sans-serif" },

    colors: {
        //replace blue with the tailwind blue

        blue: [
            "#eff6ff",
            "#dbeafe",
            "#bfdbfe",
            "#93c5fd",
            "#60a5fa",
            "#3b82f6",
            "#2563eb",
            "#1d4ed8",
            "#1e40af",
            "#1e3a8a",
            "#172554",
        ],
    },
});

function App() {
    const allyOn = useStateStore((state) => state.a11yOn);

    const toggleA11y = () => {
        useStateStore.setState((state) => ({
            a11yOn: !state.a11yOn,
        }));
    };

    return (
        <MantineProvider theme={theme}>
            <div>
                <Header />

                <div
                    className={cls(
                        classes.body,
                        "mx-auto flex max-w-4xl flex-col gap-16 p-4 py-12",
                    )}
                >
                    <div className="flex flex-col gap-4">
                        <p>
                            This application showcases examples of a basic user
                            interface with both good and poor accessibility
                            implementations.
                            <br />
                            You can toggle the accessibility features using the
                            button below.
                        </p>

                        <p>
                            Visually, this application appears the same whether
                            accessibility features are enabled or not.
                            <br /> However, the accessibility enhancements are
                            present and most noticeable when using a screen
                            reader.
                        </p>
                    </div>

                    <button
                        onClick={toggleA11y}
                        className={cls(
                            classes.a11yButton,
                            allyOn ? classes.a11yButtonOn : "",
                        )}
                    >
                        {allyOn ? "Disable" : "Enable"} A11y Features
                    </button>

                    <FileList />

                    <div className="flex w-full border-t border-gray-200" />

                    <ConferenceControls />
                    <div className="flex w-full border-t border-gray-200" />

                    <Settings />

                    <div className="flex w-full border-t border-gray-200" />
                </div>

                <div
                    className={"aria-announcer"}
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    Accessibility features are {allyOn ? "enabled" : "disabled"}
                </div>

                <Footer />
            </div>
        </MantineProvider>
    );
}

export default App;
