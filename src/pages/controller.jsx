import React, { useState } from "react";
import Switch from "../components/Switch";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import axios from "axios";
import { host, path } from "../utility/utils";
import purple from "@material-ui/core/colors/purple";
import LED from "../components/LED";

function checkState() {
  axios(path.status)
    .then((data) => this.setState({ stats: data.data.data }))
    .catch((err) => console.error(err));
}

function switchState(state) {
  axios(`${host}/${state}`)
    .then((data) => this.setState({ stats: data.data.data }))
    .catch((err) => console.error(err));
}

const Simplecontrol = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [stats, setState] = useState(false);

  return (
    <Box marginTop="0.4em">
      <Chip label="LED 1" variant="outlined" color="primary" style={{marginTop:"2em"}}/>
    <LED />
      <Chip label="LED 2" variant="outlined" color="primary" style={{marginTop:"2em"}}/>
    <LED />
    </Box>
  );
};

export default Simplecontrol;
