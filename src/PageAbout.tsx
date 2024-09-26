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
                    className="text-blue-500 hover:underline"
                    href="github.com/octavcodrea"
                >
                    Octav Codrea
                </a>
                .
                <br />
                <br />
                <a className="text-blue-500 hover:underline" href="/">
                    Go back home
                </a>
            </div>
        </div>
    );
};

export default PageAbout;
