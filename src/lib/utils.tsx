import { File, FileAudio, FileVideo, Folder, Image } from "lucide-react";
import { FileItemType } from "../components/file-list-item";

export const cls = (...classes: (string | undefined)[]) =>
    classes.filter(Boolean).join(" ");

export const getFileIcon = (type: FileItemType) => {
    const iconClass = "text-gray-400";

    switch (type) {
        case "image":
            return <Image className={iconClass} />;
        case "video":
            return <FileVideo className={iconClass} />;
        case "audio":
            return <FileAudio className={iconClass} />;
        case "document":
            return <File className={iconClass} />;
        case "folder":
            return <Folder className={iconClass} />;
    }
};

export const inputRootClass =
    "border border-gray-300 rounded-lg p-2 flex items-center gap-2";

export const tabContentClass = "flex flex-col gap-4 p-4 w-full min-h-[200px]";

export const settingsLabelContainerClass =
    "w-full flex flex-row items-center justify-between gap-4 min-h-[36px]";

export const menuListItemClass = "flex items-center gap-2";

export const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
};
