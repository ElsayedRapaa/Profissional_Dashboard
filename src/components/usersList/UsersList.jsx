import React, { useState } from "react";
import "./usersList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../dataTableSource";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function UsersList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const cellActions = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cell_With_Actions">
          <Link to="/users/test">
            <Button
              variant="outlined"
              color="primary"
              size="small"
              sx={{ padding: 0 }}
            >
              View
            </Button>
          </Link>
          <Button
            variant="outlined"
            color="error"
            size="small"
            sx={{ padding: 0 }}
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </div>
      );
    },
  };

  return (
    <div className="users_List">
      <div className="usersList_Title">
        <div className="title">Add New User</div>
        <Link to="/users/add">
          <Button
            size="large"
            variant="outlined"
            color="success"
            className="title_Button"
          >
            Add New
          </Button>
        </Link>
      </div>
      <DataGrid
        className="data_Grid"
        rows={data}
        columns={userColumns.concat(cellActions)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
}

export default UsersList;
