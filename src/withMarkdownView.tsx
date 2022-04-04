import { Container, CssBaseline, Grid } from "@mui/material";

import { Markdown } from "./Markdown";
import React from "react";

export const withMarkdownView =
    (md: string): React.FC =>
    () =>
        (
            <Container maxWidth="lg">
                <main>
                    <Grid
                        container
                        spacing={5}
                        justifyContent="center"
                        direction="column"
                        sx={{ mt: 3, mb: 3 }}
                    >
                        <Grid item xs={12}>
                            {Markdown(md)}
                        </Grid>
                    </Grid>
                </main>
            </Container>
        );
