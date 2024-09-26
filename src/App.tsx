import "@mantine/core/styles.css";
import { Outlet } from "react-router-dom";
import classes from "./App.module.scss";
import Footer from "./components/footer";
import KeyboardEventsHandler from "./components/keyboard-events-handler";
import { useStateStore } from "./lib/hooks";
import { cls } from "./lib/utils";

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
        <>
            <button
                onClick={toggleA11y}
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
                    overlay ? classes.overlayVisible : classes.overlayHidden,
                )}
            />

            <Outlet />
            <Footer />

            <KeyboardEventsHandler />
        </>
    );
}

export default App;
