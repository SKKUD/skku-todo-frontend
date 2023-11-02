import { createTheme } from "@mui/material";
import "./font.css";
import { themeColor } from "../../recoil/recoil";
import { useRecoilState } from "recoil";

var background: string = "";

// if (themeColor) {
//   if (themeColor === "0") { // light mode
//     background = "#EBEAE5";
//   }

//   else if (themeColor === "1") { // dark mode
//     background = "#2F2F2F";
//   }

//   else if (themeColor === "2") { // pink
//     background = "#FFDAE1";
//   }

//   else if (themeColor === "3") { // yellow
//     background = "#FFEC86";
//   }

//   else if (themeColor === "4") { // green
//     background = "#DBF3C3";
//   }

//   else if (themeColor === "5") { // blue
//     background = "#C5DCFF";
//   }

//   else if (themeColor === "6") { // purple
//     background = "#E3D1FF";
//   }
// }

// console.log(background);

export const conTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#8DC63F",
      contrastText: "#303030",
    },
    background: {
      default: background,
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
