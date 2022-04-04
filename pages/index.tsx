import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { pipe } from "fp-ts/function";
import * as E from "fp-ts/Either";

import Copyright from "../src/Copyright";
import { getText } from "../src/getText";
import { DOCS } from "../src/data";
import { withMarkdownView } from "../src/withMarkdownView";

export const getStaticProps = async () => {
    return {
        props: {
            md: pipe(
                await getText(DOCS.MAIN.SRC),
                E.fold(
                    (_l) => "error",
                    (r) => r
                )
            ),
        },
    };
};

type Doc = { md: string };

const Home: NextPage<Doc> = ({ md }) => {
    const Doc = withMarkdownView(md);
    return (
        <Container maxWidth="lg">
            <Doc />
            <Box
                sx={{
                    my: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Copyright />
            </Box>
        </Container>
    );
};

export default Home;
