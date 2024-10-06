import { useEffect, useState } from "react";
import { useHoverData, useStateStore } from "../lib/hooks";

import {
    Expand,
    Hand,
    Info,
    Mic,
    MonitorUp,
    PhoneOff,
    Shrink,
} from "lucide-react";
import { Video } from "lucide-react";

import { MicOff } from "lucide-react";
import { VideoOff } from "lucide-react";
import { Tooltip } from "@mantine/core";
import { getGlobalKeybindString } from "../lib/keybinds";
import Code from "../components/code";

const ConferenceControls = () => {
    const { a11yOn, microphoneOn, cameraOn, handRaised } = useStateStore(
        (state) => state,
    );

    const { handleMouseEnter: hoverOn, handleMouseLeave: hoverOff } =
        useHoverData();
    const hoverProps = { onMouseEnter: hoverOn, onMouseLeave: hoverOff };

    const [info, setInfo] = useState(false);

    const toggleInfo = () => {
        setInfo(!info);
    };

    const [screenShareOn, setScreenShareOn] = useState(false);
    const [fullScreenOn, setFullScreenOn] = useState(false);

    const [lastAnnouncement, setLastAnnouncement] = useState("");

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

    const handleToggleScreenShare = () => {
        setScreenShareOn(!screenShareOn);
    };

    const handleToggleHand = () => {
        useStateStore.setState((state) => ({
            handRaised: !state.handRaised,
        }));
    };

    const handleToggleFullScreen = () => {
        setFullScreenOn(!fullScreenOn);
    };

    useEffect(() => {
        if (cameraOn) {
            setLastAnnouncement("Camera is now on");
        } else if (!cameraOn) {
            setLastAnnouncement("Camera is now off");
        }
    }, [cameraOn]);

    useEffect(() => {
        if (microphoneOn) {
            setLastAnnouncement("Microphone is now on");
        } else if (!microphoneOn) {
            setLastAnnouncement("Microphone is now off");
        }
    }, [microphoneOn]);

    useEffect(() => {
        if (screenShareOn) {
            setLastAnnouncement("Screen sharing is now on");
        } else if (!screenShareOn) {
            setLastAnnouncement("Screen sharing is now off");
        }
    }, [screenShareOn]);

    useEffect(() => {
        if (handRaised) {
            setLastAnnouncement("Hand is now raised");
        } else if (!handRaised) {
            setLastAnnouncement("Hand is now lowered");
        }
    }, [handRaised]);

    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold">Conference controls</h2>
            <p>An example of a conference call control panel.</p>

            <div className="flex items-center justify-center gap-4">
                <>
                    <div className="flex gap-4 rounded-lg border border-gray-300 p-4">
                        <Tooltip
                            label={`Toggle microphone (${getGlobalKeybindString("toggleAudio")})`}
                            position="top"
                        >
                            <button
                                className={`flex h-12 w-12 justify-center rounded-md ${
                                    microphoneOn
                                        ? "text-gray-600"
                                        : "bg-red-100 text-red-500 hover:bg-red-200"
                                }`}
                                onClick={handleToggleMic}
                                aria-label={
                                    a11yOn
                                        ? microphoneOn
                                            ? `Mute microphone, ${getGlobalKeybindString("toggleAudio")}`
                                            : `Unmute microphone, ${getGlobalKeybindString("toggleAudio")}`
                                        : undefined
                                }
                                {...hoverProps}
                            >
                                {microphoneOn ? (
                                    <Mic size={32} />
                                ) : (
                                    <MicOff size={32} />
                                )}
                            </button>
                        </Tooltip>

                        <Tooltip
                            label={`Toggle camera (${getGlobalKeybindString("toggleVideo")})`}
                            position="top"
                        >
                            <button
                                className={`flex h-12 w-12 justify-center rounded-md ${
                                    cameraOn
                                        ? "text-gray-600"
                                        : "bg-red-100 text-red-500 hover:bg-red-200"
                                }`}
                                onClick={handleToggleCam}
                                aria-label={
                                    a11yOn
                                        ? cameraOn
                                            ? `Turn off camera, ${getGlobalKeybindString("toggleVideo")}`
                                            : `Turn on camera, ${getGlobalKeybindString("toggleVideo")}`
                                        : undefined
                                }
                                {...hoverProps}
                            >
                                {cameraOn ? (
                                    <Video size={32} />
                                ) : (
                                    <VideoOff size={32} />
                                )}
                            </button>
                        </Tooltip>

                        <Tooltip
                            label={`Toggle screen sharing (${getGlobalKeybindString("toggleScreenShare")})`}
                            position="top"
                        >
                            <button
                                className={`flex h-12 w-12 justify-center rounded-md ${screenShareOn ? "bg-blue-100 text-blue-600 hover:bg-blue-200" : "text-gray-600"}`}
                                aria-label={
                                    a11yOn
                                        ? `Start screen sharing, ${getGlobalKeybindString("toggleScreenShare")}`
                                        : undefined
                                }
                                onClick={handleToggleScreenShare}
                                {...hoverProps}
                            >
                                <MonitorUp size={32} />
                            </button>
                        </Tooltip>

                        <Tooltip
                            label={`Toggle raise hand (${getGlobalKeybindString("toggleRaiseHand")})`}
                            position="top"
                        >
                            <button
                                className={`flex h-12 w-12 justify-center rounded-md ${handRaised ? "bg-blue-100 text-blue-600 hover:bg-blue-200" : "text-gray-600"}`}
                                aria-label={
                                    a11yOn
                                        ? `Toggle raise hand, ${getGlobalKeybindString("toggleRaiseHand")}`
                                        : undefined
                                }
                                onClick={handleToggleHand}
                                {...hoverProps}
                            >
                                {handRaised ? (
                                    <Hand size={32} />
                                ) : (
                                    <Hand size={32} />
                                )}
                            </button>
                        </Tooltip>

                        <Tooltip label="Full screen" position="top">
                            <button
                                className="flex h-12 w-12 justify-center rounded-md text-gray-600"
                                aria-label={a11yOn ? "Full screen" : undefined}
                                onClick={handleToggleFullScreen}
                                {...hoverProps}
                            >
                                {fullScreenOn ? (
                                    <Shrink size={32} />
                                ) : (
                                    <Expand size={32} />
                                )}
                            </button>
                        </Tooltip>

                        <Tooltip label="Leave call" position="top">
                            <button
                                className="flex h-12 w-12 justify-center rounded-md bg-red-100 text-red-500 hover:bg-red-200"
                                aria-label={a11yOn ? "Leave call" : undefined}
                                {...hoverProps}
                            >
                                <PhoneOff size={32} />
                            </button>
                        </Tooltip>
                    </div>

                    {a11yOn && (
                        <div
                            className="aria-announcer"
                            aria-live="assertive"
                            aria-atomic="true"
                        >
                            {lastAnnouncement}
                        </div>
                    )}
                </>
            </div>

            <div className="mt-6 flex flex-col gap-4">
                <button
                    onClick={toggleInfo}
                    className="mr-auto flex items-center gap-2 px-2 font-semibold text-blue-600"
                    aria-expanded={a11yOn ? info : undefined}
                    {...hoverProps}
                >
                    <Info className="h-5 w-5" /> {info ? "Hide" : "Show"} A11y
                    info - Conference controls
                </button>

                {info && (
                    <p>
                        In this example, there are icon buttons that normally
                        communicate their purpose and state a glance through
                        color and icon changes.
                        <br />
                        <br />
                        To communicate purpose to users with visual impairments,
                        each button has an <Code>aria-label</Code> attribute
                        that describes its function, along with the keybind to
                        activate it.
                        <br />
                        To communicate state to screen readers, a{" "}
                        <Code>{"div"}</Code> with{" "}
                        <Code>aria-live="assertive"</Code> and{" "}
                        <Code>aria-atomic="true"</Code> is used to announce
                        changes in the state of the conference controls.
                        <br />
                        Each time a control is toggled, the content of the{" "}
                        <Code>{"div"}</Code> is updated to announce the change.
                        <br />
                        Screen readers will announce the last change made to the
                        state of the controls.
                    </p>
                )}
            </div>
        </div>
    );
};

export default ConferenceControls;
