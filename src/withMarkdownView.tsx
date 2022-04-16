import { Container, Grid } from "@mui/material";
import React from "react";
import { ReactMdRenderer } from "react-md-renderer";

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
                            <ReactMdRenderer>{md}</ReactMdRenderer>
                        </Grid>
                    </Grid>
                </main>
            </Container>
        );
