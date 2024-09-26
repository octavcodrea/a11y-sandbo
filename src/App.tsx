import classes from "./App.module.scss";
import { useStateStore } from "./lib/hooks";
import Header from "./components/header";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { cls, menuListItemClass } from "./lib/utils";
import Footer from "./components/footer";
import FileList from "./components/sections/section-file-list";
import ConferenceControls from "./components/sections/section-conference-controls";
import Settings from "./components/sections/section-settings";
import Emails from "./components/sections/section-emails";
import KeyboardEventsHandler from "./components/keyboard-events-handler";

const theme = createTheme({
    fontFamily: "Raleway, sans-serif",
    fontFamilyMonospace: "Monaco, Courier, monospace",
    headings: { fontFamily: "Greycliff CF, sans-serif" },

    colors: {
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

    components: {
        Menu: {
            classNames: {
                itemLabel: menuListItemClass,
            },
        },
    },
});

function App() {
    const allyOn = useStateStore((state) => state.a11yOn);
    const overlay = useStateStore((state) => state.overlay);

    const toggleOverlay = () => {
        useStateStore.setState((state) => ({
            overlay: !state.overlay,
        }));
    };

    const toggleA11y = () => {
        useStateStore.setState((state) => ({
            a11yOn: !state.a11yOn,
        }));
    };

    return (
        <MantineProvider theme={theme}>
            <div>
                <button
                    onClick={toggleA11y}
                    //z index is set to 50 to ensure the button is always on top
                    className={`fixed bottom-4 left-4 z-50 cursor-pointer rounded-md border-none px-4 py-2 font-semibold text-white ${allyOn ? "bg-green-600 hover:bg-green-700" : "z-50 bg-gray-600 hover:bg-gray-700"}`}
                >
                    {allyOn ? "Disable" : "Enable"} A11y Features
                </button>

                <button
                    onClick={toggleOverlay}
                    className={`fixed bottom-16 left-4 z-50 cursor-pointer rounded-md border-none px-4 py-2 font-semibold text-white ${overlay ? "bg-green-600 hover:bg-green-700" : "z-50 bg-gray-600 hover:bg-gray-700"}`}
                >
                    Toggle overlay
                </button>

                <div
                    className={cls(
                        classes.overlay,
                        overlay
                            ? classes.overlayVisible
                            : classes.overlayHidden,
                    )}
                />

                <Header />

                <div
                    className={cls(
                        classes.body,
                        "mx-auto flex max-w-6xl flex-col gap-16 p-4 py-12",
                    )}
                >
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-bold text-gray-800">
                            A11y Sandbox
                        </h1>
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

                    <FileList />

                    <div className="flex w-full border-t border-gray-200" />

                    <ConferenceControls />
                    <div className="flex w-full border-t border-gray-200" />

                    <Settings />

                    <div className="flex w-full border-t border-gray-200" />

                    <Emails />

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

            <KeyboardEventsHandler />
        </MantineProvider>
    );
}

export default App;
