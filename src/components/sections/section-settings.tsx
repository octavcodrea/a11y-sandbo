import { useMemo, useState } from "react";
import { useStateStore } from "../../lib/hooks";
import SettingsTabProfile from "../settings-tab-profile";
import SettingsTabNotifications from "../settings-tab-notifications";
import SettingsTabGeneral from "../settings-tab-general";
import SDiv from "../s-div";
import { Info } from "lucide-react";

const tabs = [
    { name: "Profile", id: "profile-tab", controls: "profile-tabpanel" },
    {
        name: "General",
        id: "general-tab",
        controls: "general-tabpanel",
    },
    {
        name: "Notifications",
        id: "notifications-tab",
        controls: "notifications-tabpanel",
    },
];

const Settings = () => {
    const a11yOn = useStateStore((state) => state.a11yOn);

    const [info, setInfo] = useState(false);

    const toggleInfo = () => {
        setInfo(!info);
    };

    const [activeTab, setActiveTab] = useState("Profile");

    const containerClass = "flex border border-gray-200 rounded-lg ";
    const tabContainerClass =
        "flex flex-col gap-1 p-4 border-r border-gray-200 min-w-[200px]";
    const settingsContainerClass = "flex flex-col gap-4 w-full";

    const activeTabContent = useMemo(() => {
        switch (activeTab) {
            case "Profile":
                return <SettingsTabProfile />;
            case "General":
                return <SettingsTabGeneral />;
            case "Notifications":
                return <SettingsTabNotifications />;
            default:
                return <SettingsTabProfile />;
        }
    }, [activeTab]);

    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold">Settings</h3>
            <p>An example of a settings panel with tabs.</p>

            <div className={containerClass}>
                <SDiv
                    className={tabContainerClass}
                    tag={a11yOn ? "nav" : undefined}
                    role={a11yOn ? "tablist" : undefined}
                    aria-label="Settings tabs"
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab.name}
                            id={a11yOn ? tab.id : undefined}
                            onClick={() => setActiveTab(tab.name)}
                            className={`flex justify-start text-lg ${
                                activeTab === tab.name
                                    ? "font-bold text-blue-500"
                                    : ""
                            }`}
                            role={a11yOn ? "tab" : undefined}
                            aria-selected={
                                a11yOn ? activeTab === tab.name : undefined
                            }
                            aria-controls={a11yOn ? tab.controls : undefined}
                        >
                            {tab.name}
                        </button>
                    ))}
                </SDiv>
                <div className={settingsContainerClass}>{activeTabContent}</div>
            </div>

            <div className="mt-6 flex flex-col gap-4">
                <button
                    onClick={toggleInfo}
                    className="mr-auto flex items-center gap-2 px-2 font-semibold text-blue-500"
                    aria-expanded={a11yOn ? info : undefined}
                >
                    <Info className="h-5 w-5" /> {info ? "Hide" : "Show"} A11y
                    info - Settings
                </button>

                {info && (
                    <p>
                        Here, the container element has a role of{" "}
                        <code>tablist</code> and an <code>aria-label</code> of
                        "Settings tabs". Each tab button has a role of{" "}
                        <code>tab</code> and an <code>aria-selected</code>{" "}
                        attribute that reflects the current active tab.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Settings;
