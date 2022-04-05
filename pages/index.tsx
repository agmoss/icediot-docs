import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { pipe } from "fp-ts/function";
import * as E from "fp-ts/Either";
import { array } from "fp-ts/Array";
import { either } from "fp-ts/Either";
import Head from "next/head";

import { getText } from "../src/getText";
import { DOCS } from "../src/data";
import { withPage } from "../src/withPage";
import DocCreator from "../src/DocCreator";

export const getStaticProps = async () => {
    const docLinks = Object.entries(DOCS).map((i) => i[1].SRC);
    const possiblyObtainedContent = await pipe(
        docLinks.map(getText),
        async (i) => await Promise.all(i)
    );

    return {
        props: {
            docs: pipe(
                array.sequence(either)(possiblyObtainedContent),
                E.fold(
                    (_l) => ["error"],
                    (r) => r
                )
            ),
        },
    };
};

type Doc = { docs: string[] };

const Home: NextPage<Doc> = ({ docs }) => {
    return (
        <>
            <Head>
                <title>Iced IoT</title>
            </Head>
            <Container maxWidth="lg">
                {docs.map(DocCreator)}
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
