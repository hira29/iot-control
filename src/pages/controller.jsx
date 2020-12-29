import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import LED from "../components/LED";
import React, {useEffect, useState} from "react"
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { path, query } from "../utility/utils";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  title : {
    [theme.breakpoints.down("sm")]: {
      fontSize: "11pt",
    }
  },
  text : {
    fontWeight: 300,
    [theme.breakpoints.down("sm")]: {
      fontSize: "13pt",
    }
  }
})) 

let val = 0;
const Simplecontrol = () => {
  const [defuzzification, setDefuzzification] = useState("N/A");
  const classes = useStyles();
  query.sensor.size = 1

  const changeState = async() => {
    let left_led = await axios(path.led1.status)
    let right_led = await axios(path.led2.status)

    const left_led_state = left_led.data.data,
          right_led_state = right_led.data.data

    left_led_state && right_led_state
      ? setDefuzzification("Middle")
      : left_led_state
      ? setDefuzzification("Left")
      : right_led_state
      ? setDefuzzification("Right")
      : setDefuzzification("N/A")

  }

  return (
    <Box marginTop="0.4em">
      <Box textAlign="center">
        <Typography variant="h6" className={classes.title}>
          Defuzzification
        </Typography>
        <Typography variant="h4" className={classes.text}>{defuzzification}</Typography>
      </Box>
      <Chip
        label="Left LED"
        variant="outlined"
        color="primary"
        style={{ marginTop: "2em" }}
      />
        <LED led={path.led1} log={query.led1} fuzzy={changeState}/>
      <Chip
        label="Right LED"
        variant="outlined"
        color="primary"
        style={{ marginTop: "2em" }}
      />
      <LED led={path.led2} log={query.led2} fuzzy={changeState}/>
    </Box>
  );
};

export default Simplecontrol;
