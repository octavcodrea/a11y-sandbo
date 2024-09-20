import { create } from "zustand";

interface StateStore {
    a11yOn: boolean;

    firstName: string;
    lastName: string;

    emailNotifications: boolean;
    pushNotifications: boolean;

    is12HourTime: boolean;
}

export const useStateStore = create<StateStore>((set) => ({
    a11yOn: false,

    firstName: "John",
    lastName: "Doe",

    emailNotifications: true,
    pushNotifications: true,

    is12HourTime: true,
}));
