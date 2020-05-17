import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import UserTableRow from "./UserTableRow";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 600,
  },
}));

function UsersTable() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const isLoading = useSelector((state) => state.loading);

  return (
    <div>
      {!isLoading ? (
        <div>
          {users ? (
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Mobile</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {users.map((user, index) => (
                    <UserTableRow key={index} user={user} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <p> No users found </p>
          )}
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

export default UsersTable;
