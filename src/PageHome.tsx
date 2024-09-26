import "@mantine/core/styles.css";
import classes from "./App.module.scss";
import Header from "./components/header";
import SDiv from "./components/s-div";
import ConferenceControls from "./components/sections/section-conference-controls";
import Emails from "./components/sections/section-emails";
import FileList from "./components/sections/section-file-list";
import Settings from "./components/sections/section-settings";
import { useStateStore } from "./lib/hooks";
import { cls } from "./lib/utils";

const PageHome = () => {
    const allyOn = useStateStore((state) => state.a11yOn);

    return (
        <>
            <Header />
            <SDiv tag={allyOn ? "main" : "div"}>
                <div
                    className={cls(
                        classes.body,
                        "mx-auto flex max-w-6xl flex-col gap-16 p-4 py-12",
                    )}
                >
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-extrabold text-gray-800">
                            A11y Sandbox
                        </h1>
                        <p>
                            This application showcases examples of a basic user
                            interface with both good and poor accessibility
                            implementations.
                            <br />
                            The aim is to highlight how an UI that seems fine to
                            a sighted user can be a inaccessible for a user with
                            a disability.
                            <br />
                            {/* You can toggle the accessibility features using the
                            button below. */}
                        </p>

                        <p>
                            Visually, this application appears the same whether
                            accessibility features are enabled or not.
                            <br /> However, the accessibility enhancements are
                            present and most noticeable when using a screen
                            reader.
                        </p>
                    </div>

                    <FileList />

                    <div className="flex w-full border-t border-gray-200" />

                    <ConferenceControls />
                    <div className="flex w-full border-t border-gray-200" />

                    <Settings />

                    <div className="flex w-full border-t border-gray-200" />

                    <Emails />

                    <div className="flex w-full border-t border-gray-200" />
                </div>

                <div
                    className={"aria-announcer"}
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    Accessibility features are {allyOn ? "enabled" : "disabled"}
                </div>
            </SDiv>
        </>
    );
};

export default PageHome;
