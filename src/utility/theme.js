import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/blueGrey";
import cyan from "@material-ui/core/colors/cyan";
import pink from "@material-ui/core/colors/pink";

const theme = createMuiTheme({
  palette: {
    background: {
      paper: grey[900],
      default: grey[900],
    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
      secondary: "rgba(255, 255, 255, 0.54)",
      disabled: "rgba(255, 255, 255, 0.38)",
      hint: "rgba(255, 255, 255, 0.38)",
    },
    primary: {
      main: cyan[400],
      light: cyan[300],
      dark: cyan[600],
      contrastText: "#fff"
    },
    secondary: {
      main: pink[400],
      light: pink[300],
      dark: pink[600],
      contrastText: "#fff"
    }
  },
});

export default theme;
