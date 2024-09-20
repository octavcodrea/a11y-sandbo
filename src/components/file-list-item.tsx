import { Menu } from "@mantine/core";
import { Download, EllipsisVertical, Trash } from "lucide-react";
import c from "../App.module.scss";
import { getFileIcon, menuListItemClass } from "../lib/utils";
import SDiv from "./s-div";
import { useRef, useState } from "react";

export type FileItemType = "image" | "video" | "audio" | "document" | "folder";

export type FileListItemType = {
    title: string;
    type: FileItemType;
};

export type FileListItemProps = FileListItemType & {
    a11yOn?: boolean;
};

const FileListItem = (props: FileListItemProps) => {
    const { a11yOn } = props;
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <li className="flex list-none items-center justify-between gap-4 rounded-md border border-gray-200 px-4 py-2">
            <div className={`flex items-center gap-2`}>
                {getFileIcon(props.type)}
                {props.title}
            </div>

            <Menu
                shadow="md"
                width={250}
                position="bottom-end"
                opened={menuOpen}
                onClose={() => setMenuOpen(false)}
            >
                <Menu.Target>
                    <SDiv
                        tag={props.a11yOn ? "button" : undefined}
                        className={`flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-md text-gray-500 hover:bg-gray-200 ${menuOpen ? "bg-gray-100" : ""}`}
                        onClick={handleToggleMenu}
                        aria-label={
                            a11yOn ? `Options for ${props.title}` : undefined
                        }
                    >
                        <EllipsisVertical />
                    </SDiv>
                </Menu.Target>

                <Menu.Dropdown>
                    <Menu.Item>
                        <Download className="text-gray-500" />
                        Download {props.type}
                    </Menu.Item>
                    <Menu.Item>
                        <Trash className="text-red-500" />
                        Delete {props.type}
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </li>
    );
};

export default FileListItem;
