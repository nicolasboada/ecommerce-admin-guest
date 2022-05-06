import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { userList } from "../../GuestData";

export default function UserList() {

  const [users, setUsers] = useState([])

  
  useEffect(() => {
    const LocalStorageDataUsers = localStorage.getItem("LocalStorageDataUsers")
    if (LocalStorageDataUsers) {
      setUsers(JSON.parse(LocalStorageDataUsers))
    } else{
      setUsers(userList);
    }

  }, []);

  useEffect(()=>{
    localStorage.setItem("LocalStorageDataUsers", JSON.stringify(users))
  },[users])
  

  const handleDelete = (id) => {
    setUsers(users.filter(user => user._id !== id))
  };
  
  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "username",
      headerName: "User",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "isAdmin",
      headerName: "Admin",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={10}
      />
    </div>
  );
}
