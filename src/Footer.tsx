import { Box, Typography } from "@mui/material";
import Copyright from "./Copyright";

const Footer = () => (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
            Iced IoT
        </Typography>
        <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
        >
            A refreshing IoT platform
        </Typography>
        <Copyright />
    </Box>
);

export default Footer;
