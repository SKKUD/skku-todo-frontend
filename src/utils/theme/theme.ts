import { createTheme } from "@mui/material";
import "./font.css";

export const conTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#8DC63F",
      contrastText: "#303030",
    },
    background: {
      default: "#EBEAE5",
      paper: "#FFF",
    },
  },
  typography: {
    fontFamily: [
      '"Pretendard-Regular"',
      '"Helvetica Neue"',
      "-apple-system",
      "BlinkMacSystemFont",
      "system-ui",
      "Roboto",
      '"Segoe UI"',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      "sans-serif",
    ].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Cafe24SsurroundAir",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Cafe24Ssurround",
        },
      },
    },
  },
});
