import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import { red, green } from "@material-ui/core/colors";
import { editUser, deleteUser } from "../../redux/Users/userActions";

function UserTableRow({ user }) {
  const [isEdit, setIsEdit] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    userid: user.restKey,
    firstName: user.firstName,
    lastName: user.lastName,
    address: user.address,
  });

  const dispatch = useDispatch();

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {isEdit ? (
          <TextField
            label="First Name"
            value={updatedUser.firstName}
            onChange={(e) =>
              setUpdatedUser({ ...updatedUser, firstName: e.target.value })
            }
          />
        ) : (
          <p>{updatedUser.firstName}</p>
        )}
      </TableCell>

      <TableCell component="th" scope="row">
        {isEdit ? (
          <TextField
            label="Last Name"
            value={updatedUser.lastName}
            onChange={(e) =>
              setUpdatedUser({ ...updatedUser, lastName: e.target.value })
            }
          />
        ) : (
          <p>{user.lastName}</p>
        )}
      </TableCell>
      <TableCell component="th" scope="row">
        {isEdit ? (
          <TextField
            label="Address"
            value={updatedUser.address}
            onChange={(e) =>
              setUpdatedUser({ ...updatedUser, address: e.target.value })
            }
          />
        ) : (
          <p>{user.address}</p>
        )}
      </TableCell>
      <TableCell>{user.mobile}</TableCell>
      <TableCell>
        {!isEdit ? (
          <EditIcon
            onClick={() => setIsEdit(true)}
            color="primary"
            style={{ color: green[500] }}
          />
        ) : (
          <SaveIcon
            onClick={() => {
              setIsEdit(false);
              dispatch(editUser(updatedUser));
            }}
            style={{ marginLeft: 10, color: green[500] }}
          />
        )}

        <DeleteIcon
          onClick={() => dispatch(deleteUser(user))}
          style={{ marginLeft: 10, color: red[500] }}
        />
      </TableCell>
    </TableRow>
  );
}

export default UserTableRow;
