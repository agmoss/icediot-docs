import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: orange[600],
        },
        secondary: {
            main: orange[900],
        },
    },
});

export default theme;
