import { Switch } from "@mantine/core";
import { useHoverData, useStateStore } from "../lib/hooks";
import { settingsLabelContainerClass, tabContentClass } from "../lib/utils";

const SettingsTabNotifications = () => {
    const { a11yOn, emailNotifications, pushNotifications } = useStateStore(
        (state) => state,
    );

    const { handleMouseEnter: hoverOn, handleMouseLeave: hoverOff } =
        useHoverData();
    const hoverProps = { onMouseEnter: hoverOn, onMouseLeave: hoverOff };

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
        <div
            id="notifications-tabpanel"
            className={tabContentClass}
            role={a11yOn ? "tabpanel" : undefined}
            aria-labelledby="notifications-tab"
        >
            <h3 className="text-xl font-bold">Notifications</h3>
            <div className={settingsLabelContainerClass}>
                <div className={settingsLabelContainerClass}>
                    <p className={labelClass}>Email notifications</p>
                    <Switch
                        checked={emailNotifications}
                        onChange={handleEmailNotificationsChange}
                        wrapperProps={hoverProps}
                    />
                </div>
            </div>

            <div className={settingsLabelContainerClass}>
                <div className={settingsLabelContainerClass}>
                    <p className={labelClass}>Push notifications</p>
                    <Switch
                        checked={pushNotifications}
                        onChange={handlePushNotificationsChange}
                        wrapperProps={hoverProps}
                    />
                </div>
            </div>
        </div>
    );
};

export default SettingsTabNotifications;
