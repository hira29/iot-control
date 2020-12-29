import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  btn: {
    fontSize: "16pt",
    padding: "26px 31px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 25px",
      fontSize: "14pt",
    },
  },
}));

export default function Switch({led, trigger}) {
  const [state, setState] = useState(false);

  setInterval(() => {
    axios(led.status)
      .then((data) => {
        if (state != data.data.data) {
          setState(data.data.data)
          trigger();
        }
      })
      .catch((err) => console.error(err));
  }, 1000)

  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color={state ? "primary" : "secondary"}
      onClick={() => {
        //changeState();
        //trigger();
      }}
      className={classes.btn}
    >
      {state ? "ON" : "OFF"}
    </Button>
  );
}
