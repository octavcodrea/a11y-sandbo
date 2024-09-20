import { useMemo, useState } from "react";
import { useStateStore } from "../../lib/hooks";
import SettingsTabProfile from "../settings-tab-profile";
import SettingsTabNotifications from "../settings-tab-notifications";
import SettingsTabGeneral from "../settings-tab-general";

const tabs = ["Profile", "General", "Notifications"];

const Settings = () => {
    const a11yOn = useStateStore((state) => state.a11yOn);

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
            <p>An example of a settings panel with tabs</p>

            <div className={containerClass}>
                <div className={tabContainerClass}>
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex justify-start text-lg ${
                                activeTab === tab
                                    ? "font-bold text-blue-500"
                                    : ""
                            }`}
                            role={a11yOn ? "tab" : undefined}
                            aria-selected={
                                a11yOn ? activeTab === tab : undefined
                            }
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className={settingsContainerClass}>{activeTabContent}</div>
            </div>
        </div>
    );
};

export default Settings;
