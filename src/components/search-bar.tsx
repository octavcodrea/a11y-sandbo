import { useCallback, useEffect, useState } from "react";
import { inputRootClass } from "../lib/utils";
import SDiv from "./s-div";
import {
    Bell,
    CircleHelp,
    FilePlus2,
    LogOut,
    Mail,
    Search,
    Settings,
    X,
} from "lucide-react";
import { Menu, rem, Text } from "@mantine/core";
import c from "../App.module.scss";

import { File, FileAudio, FileVideo, Folder, Image } from "lucide-react";

type SearchBarProps = {
    a11yOn?: boolean;
};

const SearchBar = (props: SearchBarProps) => {
    const { a11yOn } = props;

    const [inputValue, setInputValue] = useState("");
    const [searchResultsOpen, setSearchResultsOpen] = useState(false);
    const [lastAnnouncement, setLastAnnouncement] = useState("");

    const [openSearchTimer, setOpenSearchTimer] =
        useState<NodeJS.Timeout | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const checkIfSearching = useCallback(() => {
        if (inputValue) {
            setSearchResultsOpen(true);
            setLastAnnouncement(`Found ${inputValue.length} results`);
        } else {
            setSearchResultsOpen(false);
        }
    }, [inputValue]);

    useEffect(() => {
        if (openSearchTimer || (openSearchTimer && inputValue)) {
            clearTimeout(openSearchTimer);
        }

        if (inputValue) {
            setOpenSearchTimer(
                setTimeout(() => {
                    checkIfSearching();
                }, 500),
            );
        } else {
            setSearchResultsOpen(false);
        }
    }, [inputValue]);

    return (
        <div>
            <Menu
                shadow="md"
                width={250}
                position="bottom-end"
                opened={searchResultsOpen}
                trapFocus={false}
            >
                <Menu.Target>
                    <SDiv
                        className={inputRootClass}
                        tag={a11yOn ? "form" : undefined}
                        role={a11yOn ? "search" : undefined}
                    >
                        <input
                            placeholder="Search"
                            className="border-none outline-none"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                        <button
                            className={
                                inputValue ? "text-gray-400" : "invisible"
                            }
                            onClick={() => setInputValue("")}
                            aria-label="Search"
                        >
                            <Search className="text-gray-500" />
                        </button>
                        <button
                            className={
                                inputValue ? "text-gray-400" : "invisible"
                            }
                            onClick={() => setInputValue("")}
                            aria-label="Clear search"
                        >
                            <X className="text-gray-500" />
                        </button>
                    </SDiv>
                </Menu.Target>

                <Menu.Dropdown>
                    <Menu.Label>
                        <Text size="sm" style={{ marginBottom: rem(10) }}>
                            Search results
                        </Text>
                    </Menu.Label>
                    <Menu.Item>
                        <File className="text-gray-500" /> File 1
                    </Menu.Item>

                    <Menu.Item>
                        <Folder className="text-gray-500" />
                        Folder 1
                    </Menu.Item>

                    <Menu.Item>
                        <Image className="text-gray-500" />
                        Image 1
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>

            {a11yOn && (
                <div
                    className="aria-announcer"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {lastAnnouncement}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
