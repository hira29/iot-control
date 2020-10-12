import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function ButtonAppBar() {
  const useStyles = makeStyles(theme => ({
    heading : {
      fontWeight: 400,
      display: "inline-block",
      margin: "0 3rem"
    },
    nav : {
      textAlign: "center",
      marginTop:"120px",
      [theme.breakpoints.down("xs")]: {
        marginTop: "30px"
      }
    }
  }))

  const [value, setValue] = useState(0);
  const classes = useStyles();

  const changeValue = (event, newValue) => setValue(newValue);

  return (
        <Box className={classes.nav}>
          <Tabs value={value} onChange={changeValue} centered>
            <Tab label="IoT Control" />
            <Tab label="Logs" />
          </Tabs>
        </Box>
  );
}
