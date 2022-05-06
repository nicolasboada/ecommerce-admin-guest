import React from "react";
import "./topbar.css";
import { ExitToApp } from "@material-ui/icons";

export default function Topbar({setLoginGuest}) {
  const handleClick = (setLoginGuest) => {
    localStorage.clear();
    setLoginGuest(false)
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">STORE. </span>
          <span className="label">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer" onClick={()=>handleClick(setLoginGuest)}>
            <span>logout</span>
            <ExitToApp />
          </div>
          <img src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}