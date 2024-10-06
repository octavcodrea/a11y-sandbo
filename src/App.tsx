import "@mantine/core/styles.css";
import { Outlet } from "react-router-dom";
import classes from "./App.module.scss";
import Footer from "./components/footer";
import KeyboardEventsHandler from "./components/keyboard-events-handler";
import { useHoverData, useStateStore } from "./lib/hooks";
import { cls } from "./lib/utils";

function App() {
    const allyOn = useStateStore((state) => state.a11yOn);
    const overlay = useStateStore((state) => state.overlay);

    const { renderedHoverData } = useHoverData();

    const toggleOverlay = () => {
        useStateStore.setState((state) => ({
            overlay: !state.overlay,
        }));
    };

    const toggleA11y = () => {
        useStateStore.setState((state) => ({
            a11yOn: !state.a11yOn,
        }));
        localStorage.setItem("a11yOn", String(!allyOn));
    };

    return (
        <>
            <div
                className={cls(
                    "fixed bottom-4 left-4 z-50 flex flex-col gap-2",
                    classes.controls,
                )}
            >
                <button
                    onClick={toggleA11y}
                    className={`w-fit cursor-pointer rounded-md border-none px-4 py-2 font-semibold text-white outline-8 outline-offset-2 outline-orange-400 ${allyOn ? "bg-blue-600 hover:bg-blue-700" : "z-50 bg-gray-600 hover:bg-gray-700"}`}
                >
                    {allyOn ? "Disable" : "Enable"} A11y Features
                </button>

                <button
                    onClick={toggleOverlay}
                    className={`w-fit cursor-pointer rounded-md border-none px-4 py-2 font-semibold text-white outline-8 outline-offset-2 outline-orange-400 ${overlay ? "bg-blue-600 hover:bg-blue-700" : "z-50 bg-gray-600 hover:bg-gray-700"}`}
                >
                    Toggle overlay
                </button>
            </div>

            <div
                className={cls(
                    classes.overlay,
                    overlay ? classes.overlayVisible : classes.overlayHidden,
                )}
            />

            <Outlet />
            <Footer />

            <KeyboardEventsHandler />

            {renderedHoverData}
        </>
    );
}

export default App;
