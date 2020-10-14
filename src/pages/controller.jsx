import React from "react";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import LED from "../components/LED";

const Simplecontrol = () => {

  return (
    <Box marginTop="0.4em">
      <Chip
        label="LED 1"
        variant="outlined"
        color="primary"
        style={{ marginTop: "2em" }}
      />
      <LED />
    </Box>
  );
};

export default Simplecontrol;
