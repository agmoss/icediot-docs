import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => (
    <AppBar position="relative">
        <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
                Iced IoT
            </Typography>
        </Toolbar>
    </AppBar>
);

export default Header;
