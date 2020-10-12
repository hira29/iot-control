import Control from "./pages/controller";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import React from "react";
import custom from "./utility/theme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
import {
  createMuiTheme,
  ThemeProvider,
  useTheme,
} from "@material-ui/core/styles";
import { host } from "./utility/utils";

const App = () => {
  let theme = useTheme();
  theme = createMuiTheme({
    ...theme,
    ...custom,
  });
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!host ? (
        <>
          {matches ? (
            <h2 style={{ textAlign: "center", marginTop: "5em" }}>
              {" "}
              Please define REACT_APP_API_HOSTNAME Environment Variable{" "}
            </h2>
          ) : (
            <h5 style={{ textAlign: "center", marginTop: "5em" }}>
              {" "}
              Please define REACT_APP_API_HOSTNAME Environment Variable{" "}
            </h5>
          )}
        </>
      ) : (
        <>
          <Navbar />
          <Container maxWidth={matches ? "sm" : "xs"}>
            <Control />
          </Container>
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
