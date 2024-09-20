import { useState } from "react";
import { useStateStore } from "../../lib/hooks";

import { Expand, Mic, MonitorUp, PhoneOff, Shrink } from "lucide-react";
import { Video } from "lucide-react";

import { MicOff } from "lucide-react";
import { VideoOff } from "lucide-react";
import { Tooltip } from "@mantine/core";

const ConferenceControls = () => {
    const a11yOn = useStateStore((state) => state.a11yOn);

    const [micOn, setMicOn] = useState(false);
    const [camOn, setCamOn] = useState(false);
    const [screenShareOn, setScreenShareOn] = useState(false);
    const [fullScreenOn, setFullScreenOn] = useState(false);

    const [lastAnnouncement, setLastAnnouncement] = useState("");

    const handleToggleMic = () => {
        setMicOn(!micOn);

        if (micOn) {
            setLastAnnouncement("Microphone is on");
        } else {
            setLastAnnouncement("Microphone is off");
        }
    };

    const handleToggleCam = () => {
        setCamOn(!camOn);

        if (camOn) {
            setLastAnnouncement("Camera is on");
        } else {
            setLastAnnouncement("Camera is off");
        }
    };

    const handleToggleScreenShare = () => {
        setScreenShareOn(!screenShareOn);
    };

    const handleToggleFullScreen = () => {
        setFullScreenOn(!fullScreenOn);
    };

    return (
        <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-bold">Conference controls</h3>
            <p>An example of a conference call control panel</p>

            <div className="flex items-center justify-center gap-4">
                <>
                    <div className="flex gap-4 rounded-lg border border-gray-300 p-4">
                        <Tooltip label="Toggle microphone" position="top">
                            <button
                                className={`h-12 w-12 ${
                                    micOn
                                        ? "text-gray-600"
                                        : "bg-red-100 text-red-500 hover:bg-red-200"
                                }`}
                                onClick={handleToggleMic}
                                aria-pressed={micOn}
                                aria-label={
                                    micOn
                                        ? "Mute microphone"
                                        : "Unmute microphone"
                                }
                            >
                                {micOn ? (
                                    <Mic size={32} />
                                ) : (
                                    <MicOff size={32} />
                                )}
                            </button>
                        </Tooltip>

                        <Tooltip label="Toggle camera" position="top">
                            <button
                                className={`h-12 w-12 ${
                                    camOn
                                        ? "text-gray-600"
                                        : "bg-red-100 text-red-500 hover:bg-red-200"
                                }`}
                                onClick={handleToggleCam}
                                aria-pressed={camOn}
                                aria-label={
                                    camOn ? "Turn off camera" : "Turn on camera"
                                }
                            >
                                {camOn ? (
                                    <Video size={32} />
                                ) : (
                                    <VideoOff size={32} />
                                )}
                            </button>
                        </Tooltip>

                        <Tooltip label="Toggle screen sharing" position="top">
                            <button
                                className={`h-12 w-12 ${screenShareOn ? "bg-blue-100 text-blue-500 hover:bg-blue-200" : "text-gray-600"}`}
                                aria-label="Start screen sharing"
                                onClick={handleToggleScreenShare}
                            >
                                <MonitorUp size={32} />
                            </button>
                        </Tooltip>

                        <Tooltip label="Full screen" position="top">
                            <button
                                className="h-12 w-12 text-gray-600"
                                aria-label="Full screen"
                                onClick={handleToggleFullScreen}
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
                                className="h-12 w-12 bg-red-100 text-red-500 hover:bg-red-200"
                                aria-label="Leave call"
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
        </div>
    );
};

export default ConferenceControls;
