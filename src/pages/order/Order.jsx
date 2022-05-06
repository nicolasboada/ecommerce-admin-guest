import {
  AttachMoney,
  CalendarToday,
  LocationCity,
  MailOutline,
  PermIdentity,
  Public,
  Receipt,
  Report,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./order.css";
import {format} from "timeago.js"
import { DataGrid } from "@material-ui/data-grid";
import { orderList } from "../../GuestData";

export default function Order() {
  const location = useLocation()
  const orderId = location.pathname.split("/")[2];
  const [order, setOrder] = useState({
    _id: "1",
    userId: '6231fae02a8d5bc79641dbbb',
    products: [
      {
        productId: "1",
        quantity: 1,
        _id: "62320048d3bf597aed0f6f02",
      },
    ],
    amount: 34,
    address: {
      city: "test",
      country: "Argentina",
      line1: "test",
      line2: null,
      postal_code: "1234",
      state: null,
    },
    status: "pending",
    createdAt: "2022-03-16T15:20:40.025Z",
    updatedAt: "2022-03-16T15:20:40.025Z",
  })

  const columns = [
    { field: "productId", headerName: "productId", width: 250 },
    { field: "quantity", headerName: "quantity", width: 250 }
  ];

  
  useEffect(() => {
    const LocalStorageDataOrders = localStorage.getItem("LocalStorageDataOrders")
    if (LocalStorageDataOrders) {
      setOrder(JSON.parse(LocalStorageDataOrders).find(orders => orders._id === orderId))
    } else{
      setOrder(orderList.find(order => order._id === orderId))
    }
  }, [orderId])
  
  
  return (
    <div className="order">
      <div className="orderTitleContainer">
        <h1 className="orderTitle">Order details</h1>
      </div>
      <div className="orderContainer">
        <div className="orderShow">
          <div className="orderShowTop">
            <div className="orderShowTopTitle">
              <Receipt   className="orderShowIcon" />
              <span className="orderShowOrderid">Order Id:</span>
              <span className="orderShowOrderid">{order._id}</span>
            </div>
          </div>
          <div className="orderShowBottom">

            <div className="orderShowBottomColumn">
              <span className="orderShowTitle">Order Details</span>
              <div className="orderShowInfo">
                <PermIdentity className="orderShowIcon" />
                <span className="orderShowInfoTitle">User Id:</span>
                <span className="orderShowInfoTitle">{order.userId}</span>
              </div>
              <div className="orderShowInfo">
                <CalendarToday className="orderShowIcon" />
                <span className="orderShowInfoTitle">Date: </span>
                <span className="orderShowInfoTitle">{format(order.createdAt)}</span>
              </div>
              <div className="orderShowInfo">
                <AttachMoney   className="orderShowIcon" />
                <span className="orderShowInfoTitle">Amount:</span>
                <span className="orderShowInfoTitle">${order.amount}</span>
              </div>
              <div className="orderShowInfo">
                <Report className="orderShowIcon" />
                <span className="orderShowInfoTitle">Status:</span>
                <span className="orderShowInfoTitle">{order.status}</span>
              </div>
            </div>

            <div className="orderShowBottomColumn">
                <span className="orderShowTitle">Address</span>
                <div className="orderShowInfo">
                  <LocationCity className="orderShowIcon" />
                  <span className="orderShowInfoTitle">City:</span>
                  <span className="orderShowInfoTitle">{order.address.city}</span>
                </div>
                <div className="orderShowInfo">
                  <Public className="orderShowIcon" />
                  <span className="orderShowInfoTitle">Country:</span>
                  <span className="orderShowInfoTitle">{order.address.country}</span>
                </div>
                <div className="orderShowInfo">
                  <MailOutline className="orderShowIcon" />
                  <span className="orderShowInfoTitle">Postal Code:  </span>
                  <span className="orderShowInfoTitle">{order.address.postal_code}</span>
                </div>
            </div>
          </div>

            <div className="orderTitleContainer">
              <h1 className="orderShowTitle">Product details</h1>
            </div>
            <div className="productList">
              </div>
                <div className="datagridContainer">
                  <DataGrid
                    rows={order.products}
                    disableSelectionOnClick
                    columns={columns}
                    getRowId={(row) => row._id}
                    pageSize={10}
                    />
                </div>
            </div>


        </div>
      </div>


  );
}
