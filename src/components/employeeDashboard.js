import React from "react";
import employeeData from "../mock/employeeData.json";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";

//Style definitions for Material UI Components.
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

//Employee Table Dashboard
const EmployeeDashboard = () => {
  const tableStyle = {
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
  };
  const tableHeaderStyle = {
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    fontWeight: "bold",
  };
  const classes = useStyles();
  return (
    <div className="dashboard">
      <Paper className={classes.paper}>
        <Table size="medium" style={tableStyle}>
          <TableHead>
            <TableRow>
              <TableCell style={tableHeaderStyle}>Id</TableCell>
              <TableCell style={tableHeaderStyle}>Name</TableCell>
              <TableCell style={tableHeaderStyle}>Age</TableCell>
              <TableCell style={tableHeaderStyle}>Gender</TableCell>
              <TableCell style={tableHeaderStyle}>Email</TableCell>
              <TableCell style={tableHeaderStyle}>Phone Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeData.user
              ? employeeData.user.map((data) => (
                  <tr key={data.id}>
                    <TableCell style={tableStyle}>{data.id}</TableCell>
                    <TableCell style={tableStyle}>{data.name}</TableCell>
                    <TableCell style={tableStyle}>{data.age}</TableCell>
                    <TableCell style={tableStyle}>{data.gender}</TableCell>
                    <TableCell style={tableStyle}>{data.email}</TableCell>
                    <TableCell style={tableStyle}>{data.phoneNo}</TableCell>
                  </tr>
                ))
              : null}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default EmployeeDashboard;
