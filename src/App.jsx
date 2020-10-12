import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/simplecontrol";
import Layout from "./components/Layout";
import { createMuiTheme, ThemeProvider, useTheme } from "@material-ui/core/styles";
import { host } from "./utility/utils";
import CssBaseline from "@material-ui/core/CssBaseline";
import custom from "./utility/theme";

const App = () => {
let theme = useTheme();
theme = createMuiTheme({
  ...theme,
  ...custom
})

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!host ? (
        <h1 style={{ textAlign: "center", marginTop: "5em" }}>
          {" "}
          Please define REACT_APP_API_HOSTNAME Environment Variable{" "}
        </h1>
      ) : (
        <Layout>
          <Navbar />
          <Content />
        </Layout>
      )}
    </ThemeProvider>
  );
};

export default App;
