import { useEffect, useRef } from "react";
import { useStateStore } from "../lib/hooks";
import { checkGlobalKeybinds, KeybindAction } from "../lib/keybinds";

const KeyboardEventsHandler = () => {
    const { microphoneOn, cameraOn, handRaised } = useStateStore(
        (state) => state,
    );

    const fn = useRef({
        handleFn: (event: KeyboardEvent) => {},
    });

    const handleToggleMic = () => {
        useStateStore.setState((state) => ({
            microphoneOn: !state.microphoneOn,
        }));
    };

    const handleToggleCam = () => {
        useStateStore.setState((state) => ({
            cameraOn: !state.cameraOn,
        }));
    };

    const handleToggleHand = () => {
        useStateStore.setState((state) => ({
            handRaised: !state.handRaised,
        }));
    };

    useEffect(() => {
        fn.current.handleFn = (event: KeyboardEvent) => {
            const action: KeybindAction | undefined =
                checkGlobalKeybinds(event);
            let stopPropagation = false;

            switch (action) {
                case "toggleAudio":
                    handleToggleMic();
                    stopPropagation = true;
                    break;
                case "toggleVideo":
                    handleToggleCam();
                    stopPropagation = true;
                    break;
                case "toggleRaiseHand":
                    handleToggleHand();
                    stopPropagation = true;
                    break;
                default:
                    break;
            }

            if (stopPropagation) {
                event.preventDefault();
                event.stopPropagation();
            }
        };
    }, [microphoneOn, cameraOn, handRaised]);

    const handleFn = (event: KeyboardEvent) => {
        fn.current.handleFn(event);
    };

    useEffect(() => {
        document.body.addEventListener("keyup", handleFn);

        return () => {
            document.body.removeEventListener("keyup", handleFn);
        };
    }, []);

    return null;
};

export default KeyboardEventsHandler;
