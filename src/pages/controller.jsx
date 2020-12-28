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
  const [sensorvalue, setSensorValue] = useState(0);
  const classes = useStyles();
  query.sensor.size = 1

  useEffect(() => {
    console.log("yo")
  })

  setInterval(() => {
    axios({
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      url: path.log.sensor,
      data: query.sensor
    })
      .then(data => {
        setSensorValue(data.data.data.content[0].data)
      })
      .catch(err => console.error(err))
  }, 1000)

  return (
    <Box marginTop="0.4em">
      <Box textAlign="center">
        <Typography variant="h6" className={classes.title}>
          Sensor Value
        </Typography>
        <Typography variant="h4" className={classes.text}>{sensorvalue}</Typography>
      </Box>
      <Chip
        label="LED 1"
        variant="outlined"
        color="primary"
        style={{ marginTop: "2em" }}
      />
        <LED led={path.led1} log={query.led1}/>
      <Chip
        label="LED 2"
        variant="outlined"
        color="primary"
        style={{ marginTop: "2em" }}
      />
      <LED led={path.led2} log={query.led2}/>
    </Box>
  );
};

export default Simplecontrol;
