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

export const tagBackgrounds: Record<string, string> = {
    button: "bg-blue-500",
    a: "bg-green-500",
    h1: "bg-yellow-500",
    h2: "bg-yellow-500",
    h3: "bg-yellow-500",
    h4: "bg-yellow-500",
    h5: "bg-yellow-500",
    h6: "bg-yellow-500",
    p: "bg-purple-500",
    span: "bg-indigo-500",
    li: "bg-red-500",
    label: "bg-pink-500",
    nav: "bg-gray-500",
    header: "bg-gray-500",
    section: "bg-gray-500",
    div: "bg-gray-500",
    article: "bg-gray-500",
    aside: "bg-gray-500",
    footer: "bg-gray-500",
    form: "bg-gray-500",
    main: "bg-gray-500",
    table: "bg-gray-500",
    tr: "bg-gray-500",
    td: "bg-gray-500",
    th: "bg-gray-500",
    thead: "bg-gray-500",
    tbody: "bg-gray-500",
    tfoot: "bg-gray-500",
};
