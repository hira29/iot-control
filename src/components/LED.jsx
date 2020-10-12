import React from "react"
import Grid from "@material-ui/core/Grid";
import Switch from "./Switch";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const LED = ({id, lastActivated, todayUsage}) => {

  return(

      <Grid container justify="center" style={{ marginTop: "20px" }}>
        <Grid item xs={3}>
          <Switch />
        </Grid>
        <Grid item xs={4}>
          <Box textAlign="center">
            <Typography variant="h6"> Last activated </Typography>
            <Typography variant="h4" style={{ fontWeight: 300 }}> 2 hours ago </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box textAlign="center">
            <Typography variant="h6"> Today usage </Typography>
            <Typography variant="h4" style={{ fontWeight: 300 }}>2h 13m</Typography>
          </Box>
        </Grid>
      </Grid>
  )
}

export default LED;
