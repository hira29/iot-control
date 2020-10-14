import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { path } from "../utility/utils";

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

export default function Switch() {
  const [state, setState] = useState(false);

  axios(path.status)
    .then((data) => setState(data.data.data))
    .catch((err) => console.error(err));

  const changeState = () => {
    const url = !state ? path.on : path.off
    axios(url)
      .then((data) => setState(data.data.data))
      .catch((err) => console.error(err))
  };

  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color={state ? "primary" : "secondary"}
      onClick={changeState}
      className={classes.btn}
    >
      {state ? "ON" : "OFF"}
    </Button>
  );
}
