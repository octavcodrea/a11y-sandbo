const PageError = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-4">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p
                className={
                    "max-w-lg text-center text-2xl font-semibold text-gray-600"
                }
            >
                Page not found
            </p>

            <a
                className={
                    "text-lg font-semibold text-blue-600 hover:underline"
                }
                href="/"
            >
                Go back home
            </a>
        </div>
    );
};

export default PageError;
