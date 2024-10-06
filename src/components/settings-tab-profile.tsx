import { useHoverData, useStateStore } from "../lib/hooks";
import {
    inputRootClass,
    settingsLabelContainerClass,
    tabContentClass,
} from "../lib/utils";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

const SettingsTabProfile = () => {
    const { a11yOn, firstName, lastName } = useStateStore((state) => state);

    const { handleMouseEnter: hoverOn, handleMouseLeave: hoverOff } =
        useHoverData();
    const hoverProps = { onMouseEnter: hoverOn, onMouseLeave: hoverOff };

    const [opened, { open, close }] = useDisclosure(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        useStateStore.setState({ firstName: e.target.value });
    };

    const labelClass = "font-semibold text-sm";

    return (
        <>
            <div
                id="profile-tabpanel"
                className={tabContentClass}
                role={a11yOn ? "tabpanel" : undefined}
                aria-labelledby="profile-tab"
            >
                <h3 className="text-xl font-bold">Profile</h3>
                <div className={settingsLabelContainerClass}>
                    <p className={labelClass}>First name</p>
                    <div className={inputRootClass}>
                        <input
                            placeholder="First name"
                            className="border-none outline-none"
                            value={firstName}
                            onChange={handleInputChange}
                            aria-label={a11yOn ? "First name" : undefined}
                            {...hoverProps}
                        />
                    </div>
                </div>

                <div className={settingsLabelContainerClass}>
                    <p className={labelClass}>Last name</p>
                    <div className={inputRootClass}>
                        <input
                            placeholder="Last name"
                            className="border-none outline-none"
                            value={lastName}
                            onChange={(e) =>
                                useStateStore.setState({
                                    lastName: e.target.value,
                                })
                            }
                            aria-label={a11yOn ? "Last name" : undefined}
                            {...hoverProps}
                        />
                    </div>
                </div>

                <div className={settingsLabelContainerClass}>
                    <p className={labelClass}>Delete account</p>
                    <button
                        className="rounded-lg bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600 active:bg-red-700"
                        onClick={open}
                        {...hoverProps}
                    >
                        Delete
                    </button>
                </div>
            </div>

            <Modal
                opened={opened}
                onClose={close}
                title={
                    <h3 className="text-xl font-bold">
                        Confirm account deletion
                    </h3>
                }
                centered
                closeButtonProps={{
                    "aria-label": a11yOn ? "Close modal" : undefined,
                    ...hoverProps,
                }}
            >
                <p>
                    Are you sure you want to delete your account? This action
                    cannot be undone.
                </p>
                <div className="mt-5 flex justify-end gap-4">
                    <Button onClick={close} color="gray" {...hoverProps}>
                        Cancel
                    </Button>
                    <Button onClick={close} color="red" {...hoverProps}>
                        Delete
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default SettingsTabProfile;
