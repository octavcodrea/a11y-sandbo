import { useState } from "react";
import { useStateStore } from "../../lib/hooks";

import { Expand, Mic, MonitorUp, PhoneOff } from "lucide-react";
import { Video } from "lucide-react";

import { MicOff } from "lucide-react";
import { VideoOff } from "lucide-react";
import { Tooltip } from "@mantine/core";

const ConferenceControls = () => {
    const allyOn = useStateStore((state) => state.a11yOn);

    const [micOn, setMicOn] = useState(false);
    const [camOn, setCamOn] = useState(false);

    const [lastAnnouncement, setLastAnnouncement] = useState("");

    const toggleMic = () => {
        setMicOn(!micOn);

        if (micOn) {
            setLastAnnouncement("Microphone is on");
        } else {
            setLastAnnouncement("Microphone is off");
        }
    };

    const toggleCam = () => {
        setCamOn(!camOn);

        if (camOn) {
            setLastAnnouncement("Camera is on");
        } else {
            setLastAnnouncement("Camera is off");
        }
    };

    return (
        <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-bold">Conference controls</h3>
            <p>An example of a conference call control panel</p>

            <div className="flex items-center justify-center gap-4">
                {allyOn ? (
                    <>
                        <div className="flex gap-4 rounded-lg border p-4">
                            <Tooltip label="Toggle microphone" position="top">
                                <button
                                    className={`h-12 w-12 ${
                                        micOn ? "" : "bg-red-100 text-red-500"
                                    }`}
                                    onClick={toggleMic}
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
                                        camOn ? "" : "bg-red-100 text-red-500"
                                    }`}
                                    onClick={toggleCam}
                                    aria-pressed={camOn}
                                    aria-label={
                                        camOn
                                            ? "Turn off camera"
                                            : "Turn on camera"
                                    }
                                >
                                    {camOn ? (
                                        <Video size={32} />
                                    ) : (
                                        <VideoOff size={32} />
                                    )}
                                </button>
                            </Tooltip>

                            <Tooltip
                                label="Toggle screen sharing"
                                position="top"
                            >
                                <button
                                    className="h-12 w-12 bg-blue-100 text-blue-500"
                                    aria-label="Start screen sharing"
                                >
                                    <MonitorUp size={32} />
                                </button>
                            </Tooltip>

                            <Tooltip label="Full screen" position="top">
                                <button
                                    className="h-12 w-12"
                                    aria-label="Full screen"
                                >
                                    <Expand size={32} />
                                </button>
                            </Tooltip>

                            <Tooltip label="Leave call" position="top">
                                <button
                                    className="h-12 w-12 bg-red-100 text-red-500"
                                    aria-label="Leave call"
                                >
                                    <PhoneOff size={32} />
                                </button>
                            </Tooltip>
                        </div>

                        <div
                            className="aria-announcer"
                            aria-live="assertive"
                            aria-atomic="true"
                        >
                            {lastAnnouncement}
                        </div>
                    </>
                ) : (
                    <div className="flex gap-4 rounded-lg border p-4">
                        <Tooltip label="Toggle microphone" position="top">
                            <button
                                onClick={toggleMic}
                                className={`h-12 w-12 ${
                                    micOn ? "" : "bg-red-100 text-red-500"
                                }`}
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
                                onClick={toggleCam}
                                className={`h-12 w-12 ${
                                    camOn ? "" : "bg-red-100 text-red-500"
                                }`}
                            >
                                {camOn ? (
                                    <Video size={32} />
                                ) : (
                                    <VideoOff size={32} />
                                )}
                            </button>
                        </Tooltip>

                        <Tooltip label="Toggle screen sharing" position="top">
                            <button className="h-12 w-12 bg-blue-100 text-blue-500">
                                <MonitorUp size={32} />
                            </button>
                        </Tooltip>

                        <Tooltip label="Full screen" position="top">
                            <button className="h-12 w-12">
                                <Expand size={32} />
                            </button>
                        </Tooltip>

                        <Tooltip label="Leave call" position="top">
                            <button className="h-12 w-12 bg-red-100 text-red-500">
                                <PhoneOff size={32} />
                            </button>
                        </Tooltip>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ConferenceControls;
