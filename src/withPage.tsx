import React, { ComponentType } from "react";
import { Box } from "@mui/material";

import Footer from "./Footer";
import Header from "./Header";

export const withPage =
    <T extends object>(WrappedComponent: ComponentType<T>): React.FC<T> =>
    ({ ...props }) =>
        (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                    overflowX: "hidden",
                }}
            >
                <Header />
                <main>
                    <WrappedComponent {...(props as T)} />
                </main>
                <Footer />
            </Box>
        );
