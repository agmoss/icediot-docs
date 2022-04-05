import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { pipe } from "fp-ts/function";
import * as E from "fp-ts/Either";
import Head from "next/head";

import { getText } from "../src/getText";
import { DOCS } from "../src/data";
import { withMarkdownView } from "../src/withMarkdownView";
import { withPage } from "../src/withPage";

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
        <>
            <Head>
                <title>Iced IoT</title>
            </Head>
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
                ></Box>
            </Container>
        </>
    );
};

export default withPage(Home);
