import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Logs = () => {

  return(
    <TableContainer components="div">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center"> Id </TableCell>
            <TableCell align="center"> Lamp </TableCell>
            <TableCell align="center"> Condition </TableCell>
            <TableCell align="center"> Time </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">1</TableCell>
            <TableCell align="center">LED 1</TableCell>
            <TableCell align="center">ON</TableCell>
            <TableCell align="center">2020-10-12 20:22:29</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">2</TableCell>
            <TableCell align="center">LED 1</TableCell>
            <TableCell align="center">OFF</TableCell>
            <TableCell align="center">2020-10-12 16:27:15</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">3</TableCell>
            <TableCell align="center">LED 1</TableCell>
            <TableCell align="center">ON</TableCell>
            <TableCell align="center">2020-10-12 14:11:15</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Logs;
