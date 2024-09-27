import { htmlTags } from "../lib/constants";

type CodeProps = {
    children: string;
};

const Code = ({ children }: CodeProps) => {
    let codeString = children;

    if (typeof children !== "string") {
        codeString = JSON.stringify(children, null, 2);
    }

    const codeArray = codeString.split("=").join(" = ").split(" ");

    return (
        <code>
            {codeArray.map((word, index) => {
                if (htmlTags.includes(word)) {
                    return (
                        <span key={index} className="text-blue-300">
                            {word}
                        </span>
                    );
                } else if (word[0] === '"' && word[word.length - 1] === '"') {
                    return (
                        <span key={index} className="text-orange-300">
                            {word}
                        </span>
                    );
                }
                return <span key={index}>{word}</span>;
            })}
        </code>
    );
};

export default Code;
