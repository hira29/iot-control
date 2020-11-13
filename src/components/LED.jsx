import React, {useEffect, useState} from "react"
import Grid from "@material-ui/core/Grid";
import Switch from "./Switch";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import { path, query } from "../utility/utils";

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

const getDuration = (start, end) => {
  let duration = end - start;

  duration = duration < 1000 
    ? duration + 'ms'
    : duration/1000 < 60 
    ? Math.trunc(duration/1000) + 's'
    : (duration/1000)/60 < 60
    ? Math.trunc((duration/1000)/60) + 'm'
    : (duration/1000)/60/60 < 60
    ? Math.trunc((duration/1000)/60/60) + 'h' + Math.trunc((duration/1000)/60%60) + 'm'
    : Math.trunc((duration/1000)/60/60) + 'h'

    return duration
}

const LED = ({led, log}) => {
  const classes = useStyles();
  const [lastusage, setLastusage] = useState(null)
  const [duration, setDuration] = useState(null)
  const [buttonstate, setButtonstate] = useState(false)
  log.size = 3

  const changeState = () => setButtonstate(!buttonstate)

  useEffect(() => {
    console.log("state changed!")
    axios({
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      url: path.log.led,
      data: log
    })
      .then(data => {
        const obj = data.data.data
        const on = obj.content[1].condition ? 1 : 2
        const start = new Date(obj.content[on].time)
        const end = new Date()
        let lastuse = getDuration(start,end)
//        let total = 0

//      for(let i = 0; i < obj.content.length; i++) {
//        console.log("iteration")
//        if(obj.content[0].condition && i%2 == 0)
//         total = obj.content[i+1]
//          ? total + (new Date(obj.content[i+1].time) - new Date(obj.content[i].time))
//          : total
//        if(!obj.content[0].condition && i%2 == 0)
//          if(i > 0)
//           total = obj.content[i+1]
//            ? total + (new Date(obj.content[i+1].time) - new Date(obj.content[i].time))
//            : total
//        
//      }
//      let usage = getDuration(0, total)
//      console.log("usage:",usage)
//      console.log("last use:",lastuse)
//      setDuration(usage)
        setLastusage(lastuse)
      })
      .catch(err => console.error(err))
  },[buttonstate])

  return(
      <Grid container justify="center" style={{ marginTop: "20px" }}>
        <Grid item xs={4} md={3}>
          <Switch led={led} trigger={changeState}/>
        </Grid>
        <Grid item xs={4}>
          <Box textAlign="center">
            <Typography variant="h6" className={classes.title}> Last activated </Typography>
            <Typography variant="h4" className={classes.text}>{lastusage ? lastusage : "N/A"}</Typography>
          </Box>
        </Grid>
        {/*<Grid item xs={4}>
          <Box textAlign="center">
            <Typography variant="h6" className={classes.title}> Today usage </Typography>
            <Typography variant="h4" className={classes.text}>{duration ? duration : "N/A"}</Typography>
          </Box>
        </Grid>*/}
      </Grid>
  )
}

export default LED;
