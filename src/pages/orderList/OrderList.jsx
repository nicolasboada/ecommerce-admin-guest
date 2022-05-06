import "./orderList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {format} from "timeago.js"
import { orderList } from "../../GuestData";

export default function OrderList() {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    const LocalStorageDataOrders = localStorage.getItem("LocalStorageDataOrders")
    if (LocalStorageDataOrders) {
      setOrders(JSON.parse(LocalStorageDataOrders))
    } else{
      setOrders(orderList)
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem("LocalStorageDataOrders", JSON.stringify(orders))
  },[orders])

  const handleDelete = (id) => {
    setOrders(orders.filter(order => order._id !== id))
  };
  
  const columns = [
    { field: "_id", headerName: "orderID", width: 200 },
    { field: "amount", headerName: "Amount", width: 150 },
    { field: "createdAt", headerName: "Date", width: 200 ,renderCell: (params) => {
      return (<>{format(params.row.createdAt)}</>)}},
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/orders/" + params.row._id}>
              <button className="orderListEdit">Order details</button>
            </Link>
            <DeleteOutline
              className="orderListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="orderList">
      <DataGrid
        rows={orders}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={10}
      />
    </div>
  );
}
