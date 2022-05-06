import {
  CalendarToday,
  MailOutline,
  PermIdentity,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./user.css";
import {format} from "timeago.js"
import { userList } from "../../GuestData";

export default function User() {
  const location = useLocation()
  const userId = location.pathname.split("/")[2];
  const [user, setUser] = useState( {
    _id: "1",
    username: "Jon Snow 1",
    email: "jon@gmail.com",
    isAdmin: true,
    createdAt: "2022-03-16T14:57:36.959Z",
    img: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    // status: "active",
    // transaction: "$120.00",
  })

  useEffect(() => {
    const LocalStorageDataUsers = localStorage.getItem("LocalStorageDataUsers")
    if (LocalStorageDataUsers) {
      setUser(JSON.parse(LocalStorageDataUsers).find(user => user._id === userId))
    } else{
      setUser(userList.find(user => user._id === userId));
    }
  }, [userId]);

  const [updatedUser, setUpdatedUser] = useState({})

  useEffect(() => {
    setUpdatedUser(user)
  }, [user])

  const handleUpdate = (e,id, user) => {
    e.preventDefault();

    const LocalStorageDataUsers = localStorage.getItem("LocalStorageDataUsers")
    if (LocalStorageDataUsers) {
      const users = JSON.parse(LocalStorageDataUsers)
      users[users.findIndex((item) => item._id === userId)] = user
      localStorage.setItem("LocalStorageDataUsers", JSON.stringify(users))
      setUser(user);
    } else{
      setUser(user);
    }
  }

  return (
    <>
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={user.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.username}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.username}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{format(user.createdAt)}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={user.username}
                  className="userUpdateInput"
                  value={updatedUser.username} onChange={(e)=>setUpdatedUser({...updatedUser, username: e.target.value})}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={user.email}
                  className="userUpdateInput"
                  value={updatedUser.email} onChange={(e)=>setUpdatedUser({...updatedUser, email: e.target.value})}
                />
              </div>
              <div className="userUpdateItem">
                <label>Profile image url</label>
                <input
                  type="text"
                  placeholder={user.img}
                  className="userUpdateInput"
                  value={updatedUser.img} onChange={(e)=>setUpdatedUser({...updatedUser, img: e.target.value})}
                />
              </div>
              <div className="userUpdateItem">
                <label>Admin</label>
                <select name="isAdmin" id="isAdmin" value={updatedUser.isAdmin} onChange={(e)=>setUpdatedUser({...updatedUser, isAdmin: e.target.value})}>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={user.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"}
                  alt=""
                />
              </div>
              <button className="userUpdateButton" onClick={(e)=>handleUpdate(e,user._id, updatedUser)}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
  );
}
