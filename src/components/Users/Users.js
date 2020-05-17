import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { fetchUsers, addUser } from "../../redux/Users/userActions";

import UsersTable from "./UsersTable";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch",
    },
    marginBottom: 30,
    background: "#D3D3D3",
    padding: 10,
  },
  container: {
    marginTop: 100,
  },
  table: {
    minWidth: 600,
  },
}));

function Users() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading);

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    //console.log(newUser);
    dispatch(addUser(newUser));
    setNewUser({
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      address: "",
    });
  };

  return (
    <div>
      <Container className={classes.container} maxWidth="lg">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            label="First Name"
            value={newUser.firstName}
            onChange={(e) =>
              setNewUser({ ...newUser, firstName: e.target.value })
            }
          />
          <TextField
            label="Last Name"
            value={newUser.lastName}
            onChange={(e) =>
              setNewUser({ ...newUser, lastName: e.target.value })
            }
          />
          <TextField
            label="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <br />
          <TextField
            label="Mobile Name"
            value={newUser.mobile}
            onChange={(e) => setNewUser({ ...newUser, mobile: e.target.value })}
          />
          <TextField
            label="address"
            value={newUser.address}
            onChange={(e) =>
              setNewUser({ ...newUser, address: e.target.value })
            }
          />
          <br />

          <Button onClick={submitHandler} variant="contained" color="primary">
            Add User
          </Button>
        </form>
        <CssBaseline />
        <UsersTable />
      </Container>
    </div>
  );
}

export default Users;
