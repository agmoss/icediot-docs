import { Divider } from "@mui/material";
import { withMarkdownView } from "./withMarkdownView";

const DocCreator = (doc: string) => {
    const Doc = withMarkdownView(doc);
    return (
        <>
            <Doc />
            <Divider />
        </>
    );
};

export default DocCreator;
