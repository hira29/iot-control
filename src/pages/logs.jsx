import React, {useState} from "react";
import axios from "axios";
import {path, query} from "../utility/utils";
import {DataGrid} from "@material-ui/data-grid";
import {makeStyles} from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const columns = [
  { field: '_id', headerName: 'ID', width: 70 },
  { field: 'lamp', headerName: 'LED', width: 120 },
  { field: 'condition', headerName: 'Condition', width: 160 },
  {
    field: 'time',
    headerName: 'Time',
    width: 130,
  }
];

const sense_columns = [
  { field: '_id', headerName: 'ID', width: 70 },
  { field: 'sense', headerName: 'Sensor', width: 120 },
  { field: 'data', headerName: 'Data', width: 160 },
  {
    field: 'time',
    headerName: 'Time',
    width: 130,
  }
]

const useStyles = makeStyles(theme => ({
  text : {
    [theme.breakpoints.down("sm")]: {
      fontSize: "10pt"
    }
  }
}))

const Logs = () => {
  const classes = useStyles();
  let [rowstable1, setRowstable1] = useState([]);
  let [rowstable2, setRowstable2] = useState([]);
  let [rowstable3, setRowstable3] = useState([]);

  const queryTable = (tablerow, tableid, urlpath) => {
    axios({
      method: "post",
      url: urlpath,
      headers: {
        "content-type": "application/json"
      },
      data: tablerow
    })
      .then(data => {
        for (let i = 0; i < data.data.data.content.length; i++) {
          data.data.data.content[i].id = data.data.data.content[i]._id
          data.data.data.content[i].time = new Date(data.data.data.content[i].time).toTimeString()
        }
        console.log(data.data.data)
        if (tableid === 1)
          setRowstable1(data.data.data.content)
        else if (tableid === 2)
          setRowstable2(data.data.data.content)
        else if (tableid === 3)
          setRowstable3(data.data.data.content)
      })
      .catch(err => console.error(err))
  }

  query.led1.size = 100
  query.led2.size = 100
  query.sensor.size = 100

  queryTable(query.led1, 1, path.log.led)
  queryTable(query.led2, 2, path.log.led)
  queryTable(query.sensor, 3, path.log.sensor)

  return (
    <>
      <Chip
        label="LED 1"
        variant="outlined"
        color="primary"
        style={{ marginTop: "2em", marginBottom: "2em" }}
      />
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rowstable1} columns={columns} pageSize={5} />
      </div>
      <Chip
        label="LED 2"
        variant="outlined"
        color="primary"
        style={{ marginTop: "2em", marginBottom: "2em" }}
      />
      <div className={classes.text} style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rowstable2} columns={columns} pageSize={5} />
      </div>
      <Chip
        label="Sensor"
        variant="outlined"
        color="primary"
        style={{ marginTop: "2em", marginBottom: "2em" }}
      />
      <div className={classes.text} style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rowstable3} columns={sense_columns} pageSize={5} />
      </div>
    </>
  )
}

export default Logs;
