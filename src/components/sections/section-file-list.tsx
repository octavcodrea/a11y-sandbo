import { useStateStore } from "../../lib/hooks";
import c from "../../App.module.scss";
import FileListItem, { FileListItemType } from "../file-list-item";
import { useState } from "react";
import { ChevronDown, ChevronUp, Info } from "lucide-react";
import SDiv from "../s-div";
import Code from "../code";

const folders: FileListItemType[] = [
    { title: "Folder 1", type: "folder" },
    { title: "Folder 2", type: "folder" },
    { title: "Folder 3", type: "folder" },
];

const files: FileListItemType[] = [
    { title: "File 1", type: "document" },
    { title: "File 2", type: "image" },
    { title: "File 3", type: "video" },
    { title: "File 4", type: "audio" },
];

const FileList = () => {
    const a11yOn = useStateStore((state) => state.a11yOn);
    const [info, setInfo] = useState(false);

    const [foldersOpen, setFoldersOpen] = useState(false);
    const [filesOpen, setFilesOpen] = useState(false);

    const toggleFolders = () => {
        setFoldersOpen(!foldersOpen);
    };

    const toggleFiles = () => {
        setFilesOpen(!filesOpen);
    };

    const toggleInfo = () => {
        setInfo(!info);
    };

    const headerClass =
        "flex items-center justify-between cursor-pointer w-full";
    const titleClass = "text-xl font-bold text-gray-700";
    const listClass = "flex flex-col gap-2";

    return (
        <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-bold">File manager</h3>
            <p>
                An example of a file manager, with accordion sections for
                folders and files.
            </p>

            <div className="flex flex-col gap-4">
                <div
                    className={
                        "flex flex-col gap-4 rounded-lg border border-gray-300 p-4"
                    }
                >
                    <SDiv
                        tag={a11yOn ? "button" : undefined}
                        className={headerClass}
                        onClick={toggleFolders}
                        role={a11yOn ? "button" : undefined}
                        aria-expanded={a11yOn ? foldersOpen : undefined}
                    >
                        <h3 className={titleClass}>Folders</h3>

                        {foldersOpen ? (
                            <ChevronUp className="text-gray-500" />
                        ) : (
                            <ChevronDown className="text-gray-500" />
                        )}
                    </SDiv>

                    {foldersOpen && (
                        <SDiv
                            tag={a11yOn ? "ul" : undefined}
                            className={listClass}
                        >
                            {folders.map((file, index) => (
                                <FileListItem key={index} {...file} a11yOn />
                            ))}
                        </SDiv>
                    )}
                </div>

                <div
                    className={
                        "flex flex-col gap-4 rounded-lg border border-gray-300 p-4"
                    }
                >
                    <SDiv
                        tag={a11yOn ? "button" : undefined}
                        className={headerClass}
                        onClick={toggleFiles}
                        role={a11yOn ? "button" : undefined}
                        aria-expanded={a11yOn ? filesOpen : undefined}
                    >
                        <h3 className={titleClass}>Files</h3>

                        {filesOpen ? (
                            <ChevronUp className="text-gray-500" />
                        ) : (
                            <ChevronDown className="text-gray-500" />
                        )}
                    </SDiv>

                    {filesOpen && (
                        <SDiv
                            tag={a11yOn ? "ul" : undefined}
                            className={listClass}
                        >
                            {files.map((file, index) => (
                                <FileListItem key={index} {...file} a11yOn />
                            ))}
                        </SDiv>
                    )}
                </div>
            </div>

            <div className="mt-6 flex flex-col gap-4">
                <button
                    onClick={toggleInfo}
                    className="mr-auto flex items-center gap-2 px-2 font-semibold text-blue-500"
                    aria-expanded={a11yOn ? info : undefined}
                >
                    <Info className="h-5 w-5" /> {info ? "Hide" : "Show"} A11y
                    info - File manager
                </button>

                {info && (
                    <p>
                        In this example, <Code>aria-expanded</Code> is used to
                        indicate whether the section is open or closed. The
                        sections can be toggled by clicking on the headers.
                        <br />
                        <br />
                        To make the headers focusable, they are wrapped in a{" "}
                        <Code>button</Code> element when accessibility features
                        are enabled.
                        <br />
                        <br />
                        The elements are wrapped in an <Code>ul</Code> element
                        to indicate that they are a list.
                        <br />
                        Icon buttons that toggle the options for each item are
                        labeled with <Code>aria-label</Code>, and use{" "}
                        <Code>aria-expanded</Code> to indicate whether the
                        options are open or closed.
                    </p>
                )}
            </div>
        </div>
    );
};

export default FileList;
