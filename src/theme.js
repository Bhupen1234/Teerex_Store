import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Lato"
  },
  palette: {
    primary: {
      light: "#949494",
      main: "#404040",
      dark: "#1a1919",
      contrastText: "#fff",
    },
  },
});

export default theme;
