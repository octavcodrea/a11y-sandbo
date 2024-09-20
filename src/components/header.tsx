import { Menu, Text, rem } from "@mantine/core";
import {
    Bell,
    CircleHelp,
    FilePlus2,
    LogOut,
    Mail,
    Settings,
} from "lucide-react";
import c from "../App.module.scss";
import logo from "../assets/logo.svg";
import profilePic from "../assets/profile.jpg";
import { useStateStore } from "../lib/hooks";
import BreadcrumbsComponent from "./breadcrumbs";
import SDiv from "./s-div";
import SearchBar from "./search-bar";
import { menuListItemClass } from "../lib/utils";

const profileMenuItems = [
    { name: "Account settings", icon: Settings },
    { name: "Help", icon: CircleHelp },
    { name: "Log out", icon: LogOut },
];

const Header = () => {
    const a11yOn = useStateStore((state) => state.a11yOn);

    const logoClass = "h-auto w-16";

    return (
        <SDiv
            className={`flex items-center justify-between gap-4 bg-white p-4 shadow-md`}
            tag={a11yOn ? "header" : undefined}
            role={a11yOn ? "banner" : undefined}
        >
            <div className="flex items-center gap-4">
                <img src={logo} alt="Logo" className={logoClass} />

                <BreadcrumbsComponent />
            </div>

            <div className={`flex items-center gap-4`}>
                <SearchBar a11yOn={a11yOn} />

                <Menu shadow="md" width={250} position="bottom-end">
                    <Menu.Target>
                        <SDiv
                            tag={a11yOn ? "button" : undefined}
                            aria-label={a11yOn ? "Notifications" : undefined}
                            className={
                                "text-color-gray-700 h-10 w-10 cursor-pointer rounded-md p-2 hover:bg-gray-100 active:bg-gray-200"
                            }
                        >
                            <Bell className="h-full w-full text-gray-500" />
                        </SDiv>
                    </Menu.Target>

                    <Menu.Dropdown>
                        <Menu.Label>
                            <Text size="sm" style={{ marginBottom: rem(10) }}>
                                Notifications
                            </Text>
                        </Menu.Label>
                        <Menu.Item>
                            <FilePlus2 className="text-gray-500" /> New file
                            uploaded
                        </Menu.Item>

                        <Menu.Item>
                            <Mail className="text-gray-500" />
                            New message received
                        </Menu.Item>

                        <Menu.Item>
                            <Mail className="text-gray-500" />
                            New message received
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>

                <Menu shadow="md" width={200} position="bottom-end">
                    <Menu.Target>
                        <SDiv
                            tag={a11yOn ? "button" : undefined}
                            aria-label={a11yOn ? "Profile" : undefined}
                            className={
                                "h-12 w-12 cursor-pointer overflow-hidden rounded-full p-0"
                            }
                        >
                            <img
                                className="h-full w-auto object-cover"
                                src={profilePic}
                                alt={a11yOn ? "Profile" : undefined}
                                role={a11yOn ? "img" : undefined}
                            />
                        </SDiv>
                    </Menu.Target>

                    <Menu.Dropdown>
                        {profileMenuItems.map((item, index) => (
                            <Menu.Item key={index}>
                                <item.icon className="text-gray-500" />
                                {item.name}
                            </Menu.Item>
                        ))}
                    </Menu.Dropdown>
                </Menu>
            </div>
        </SDiv>
    );
};

export default Header;
