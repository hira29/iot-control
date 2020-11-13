import React from "react";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import LED from "../components/LED";
import { path, query } from "../utility/utils";

const Simplecontrol = () => {

  return (
    <Box marginTop="0.4em">
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
