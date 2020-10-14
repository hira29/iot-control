import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Content from "./components/Content";
import Control from "./pages/controller";
import CssBaseline from "@material-ui/core/CssBaseline";
import Logs from "./pages/logs";
import React, {useState} from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import custom from "./utility/theme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
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

  const useStyles = makeStyles((theme) => ({
    heading: {
      margin: "0 3rem",
      [theme.breakpoints.down("xs")]: {
        margin: "0 2rem",
      },
    },
    nav: {
      textAlign: "center",
      marginTop: "120px",
      [theme.breakpoints.down("xs")]: {
        marginTop: "30px",
      },
    },
  }));

  const [value, setValue] = useState(0);
  const classes = useStyles();

  const changeValue = (event, newValue) => setValue(newValue);

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
        <Container maxWidth={matches ? "sm" : "xs"}>
          <Box className={classes.nav}>
            <Tabs value={value} onChange={changeValue} centered>
              <Tab label="IoT Control" className={classes.heading} />
              <Tab label="Logs" className={classes.heading} />
            </Tabs>
          </Box>
          <Content value={value} index={0}>
          <Control />
        </Content>
        <Content value={value} index={1}>
          <Logs />
        </Content>
        </Container>
      )}
    </ThemeProvider>
  );
};

export default App;
