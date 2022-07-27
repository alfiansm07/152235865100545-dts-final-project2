import { createTheme, responsiveFontSizes } from "@mui/material/styles";
const base = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#C31815",
    },
    secondary: {
      main: "#ffffff",
    },
    divider: "rgba(255,255,255,0.12)",
  },
  typography: {
    fontFamily: ["Mukta", "sans-serif"].join(","),
    h1: {
      fontFamily: "Inter",
    },
    h2: {
      fontFamily: "IBM Plex Serif",
    },
    h4: {
      fontFamily: ["IBM Plex Serif", "serif"].join(","),
    },
    button: {
      fontFamily: ["Mukta", "sans-serif"].join(","),
      fontSize: "1rem",
    },
  },
  props: {
    MuiAppBar: {
      color: "transparent",
    },
  },
});

const theme = responsiveFontSizes(base);
export default theme;
