import { ArrowLeft } from "lucide-react";

const PageAbout = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-4">
            <h1 className="text-6xl font-bold text-gray-800">About</h1>
            <div
                className={
                    "max-w-lg text-center text-xl font-semibold text-gray-600"
                }
            >
                App built by{" "}
                <a
                    className="text-blue-600 hover:underline"
                    href="https://github.com/octavcodrea"
                    rel="noreferrer"
                    target="_blank"
                >
                    Octav Codrea
                </a>
                .
                <br />
                <br />
                <a
                    className="flex items-center justify-center gap-1 text-blue-600 hover:underline"
                    href="/"
                >
                    <ArrowLeft /> Home
                </a>
            </div>
        </div>
    );
};

export default PageAbout;
