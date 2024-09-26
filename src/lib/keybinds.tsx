import browserInfo from "./browserInfo";

const OS = browserInfo.OS();

type KeyCombination = {
    key: string;
    altKey?: boolean;
    ctrlKey?: boolean;
    shiftKey?: boolean;
    metaKey?: boolean;
};

type Keybind = {
    WindowsKeys: KeyCombination;
    MacKeys: KeyCombination;
};

export type KeybindAction =
    | "toggleAudio"
    | "toggleVideo"
    | "toggleScreenShare"
    | "toggleRaiseHand";

export const Keybinds: Record<KeybindAction, Keybind> = {
    toggleAudio: {
        WindowsKeys: {
            altKey: true,
            key: "a",
        },
        MacKeys: {
            altKey: true,
            shiftKey: true,
            key: "a",
        },
    },

    toggleVideo: {
        WindowsKeys: {
            altKey: true,
            key: "v",
        },
        MacKeys: {
            altKey: true,
            shiftKey: true,
            key: "v",
        },
    },

    toggleScreenShare: {
        WindowsKeys: {
            altKey: true,
            shiftKey: true,
            key: "s",
        },
        MacKeys: {
            altKey: true,
            shiftKey: true,
            key: "s",
        },
    },

    toggleRaiseHand: {
        WindowsKeys: {
            altKey: true,
            key: "h",
        },
        MacKeys: {
            altKey: true,
            shiftKey: true,
            key: "h",
        },
    },
};

export const checkGlobalKeybinds = (event: KeyboardEvent) => {
    for (const action in Keybinds) {
        const keybind = Keybinds[action as KeybindAction];
        const keys = OS.toLowerCase().includes("mac")
            ? keybind.MacKeys
            : keybind.WindowsKeys;

        if (
            event.altKey === !!keys.altKey &&
            event.ctrlKey === !!keys.ctrlKey &&
            event.shiftKey === !!keys.shiftKey &&
            event.metaKey === !!keys.metaKey &&
            event.key.toLowerCase() === keys.key
        ) {
            return action as KeybindAction;
        }
    }

    return undefined;
};

/**
 * @param action - The action to get the keybind for
 * @returns A string array with the keys for the given action
 * @example getGlobalKeybind("toggleAudio") // ["Alt", "A"]
 *
 **/

export const getGlobalKeybind = (action: KeybindAction): string[] => {
    const foundAction = Keybinds[action];
    const isMac = OS.toLowerCase().includes("mac");
    const keybind = isMac ? foundAction.MacKeys : foundAction.WindowsKeys;

    const keys: string[] = [];

    if (!isMac) {
        if (keybind.ctrlKey) {
            keys.push("Ctrl");
        }
        if (keybind.altKey) {
            keys.push("Alt");
        }
        if (keybind.shiftKey) {
            keys.push("Shift");
        }
    } else {
        if (keybind.metaKey) {
            keys.push("⌘");
        }
        if (keybind.altKey) {
            keys.push("⌥");
        }
        if (keybind.ctrlKey) {
            keys.push("⌃");
        }
        if (keybind.shiftKey) {
            keys.push("⇧");
        }
    }

    const key = keybind.key;
    keys.push(key.toUpperCase());

    return keys;
};

/**
 * @param action - The action to get the keybind for
 * @returns A string with the keys for the given action joined by " + "
 * @example // "Ctrl + Shift + A"
 **/

export const getGlobalKeybindString = (action: KeybindAction): string => {
    const stringArray = getGlobalKeybind(action);
    return stringArray.join(" + ");
};
