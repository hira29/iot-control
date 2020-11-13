import React, {useState, useEffect} from "react";
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

const useStyles = makeStyles(theme => ({
  lamp : {
    [theme.breakpoints.down("sm")]: {
      fontSize: "10pt"
    }
  }
}))

const Logs = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rowstable1, setRowstable1] = useState([]);
  const [rowstable2, setRowstable2] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const queryTable = (tablerow, led) => {
    axios({
      method: "post",
      url: path.log.led,
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
        if (led === 1)
          setRowstable1(data.data.data.content)
        else
          setRowstable2(data.data.data.content)
      })
      .catch(err => console.error(err))
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  query.led1.size = 100
  query.led2.size = 100

  queryTable(query.led1, 1)
  queryTable(query.led2, 2)

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
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rowstable2} columns={columns} pageSize={5} />
      </div>
    </>
  )
}

export default Logs;
