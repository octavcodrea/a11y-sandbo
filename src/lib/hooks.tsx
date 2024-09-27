import { create } from "zustand";

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
