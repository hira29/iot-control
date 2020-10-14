import React from "react"
import Grid from "@material-ui/core/Grid";
import Switch from "./Switch";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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

const LED = ({id, lastActivated, todayUsage}) => {
  const classes = useStyles();

  return(

      <Grid container justify="center" style={{ marginTop: "20px" }}>
        <Grid item xs={4} md={3}>
          <Switch />
        </Grid>
        <Grid item xs={4}>
          <Box textAlign="center">
            <Typography variant="h6" className={classes.title}> Last activated </Typography>
            <Typography variant="h4" className={classes.text}> 2 hours ago </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box textAlign="center">
            <Typography variant="h6" className={classes.title}> Today usage </Typography>
            <Typography variant="h4" className={classes.text}>2h 13m</Typography>
          </Box>
        </Grid>
      </Grid>
  )
}

export default LED;
