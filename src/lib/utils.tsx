import { File, FileAudio, FileVideo, Folder, Image } from "lucide-react";
import { FileItemType } from "../components/file-list-item";

export const cls = (...classes: (string | undefined)[]) =>
    classes.filter(Boolean).join(" ");

export const getFileIcon = (type: FileItemType) => {
    switch (type) {
        case "image":
            return <Image />;
        case "video":
            return <FileVideo />;
        case "audio":
            return <FileAudio />;
        case "document":
            return <File />;
        case "folder":
            return <Folder />;
    }
};

export const inputRootClass =
    "border border-gray-300 rounded-lg p-2 flex items-center gap-2";

export const tabContentClass = "flex flex-col gap-4 p-4 w-full min-h-[200px]";

export const settingsLabelContainerClass =
    "w-full flex flex-row items-center justify-between gap-4 min-h-[36px]";
