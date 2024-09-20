import { Switch } from "@mantine/core";
import { useStateStore } from "../lib/hooks";
import {
    inputRootClass,
    settingsLabelContainerClass,
    tabContentClass,
} from "../lib/utils";

const SettingsTabNotifications = () => {
    const { a11yOn, emailNotifications, pushNotifications } = useStateStore(
        (state) => state,
    );

    const labelClass = "font-semibold text-sm";

    const handleEmailNotificationsChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        useStateStore.setState({ emailNotifications: event.target.checked });
    };

    const handlePushNotificationsChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        useStateStore.setState({ pushNotifications: event.target.checked });
    };

    return (
        <div className={tabContentClass}>
            <h3 className="text-xl font-extrabold">Notifications</h3>
            <div className={settingsLabelContainerClass}>
                <div className={settingsLabelContainerClass}>
                    <p className={labelClass}>Email notifications</p>
                    <Switch
                        checked={emailNotifications}
                        onChange={handleEmailNotificationsChange}
                    />
                </div>
            </div>

            <div className={settingsLabelContainerClass}>
                <div className={settingsLabelContainerClass}>
                    <p className={labelClass}>Push notifications</p>
                    <Switch
                        checked={pushNotifications}
                        onChange={handlePushNotificationsChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default SettingsTabNotifications;
