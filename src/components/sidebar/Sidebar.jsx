import "./sidebar.css";
import {
  PermIdentity,
  Storefront,
  Receipt,
  Add,
  Dashboard,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <Dashboard className="sidebarIcon" />
              Home
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Database</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/orders" className="link">
            <li className="sidebarListItem">
              <Receipt className="sidebarIcon" />
              Orders
            </li>
            </Link>
            
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Forms</h3>
          <ul className="sidebarList">
          <Link to="/newUser" className="link">
            <li className="sidebarListItem">
              <Add className="sidebarIcon" />
              Add user
            </li>
          </Link>
          <Link to="/newproduct" className="link">
            <li className="sidebarListItem">
              <Add className="sidebarIcon" />
              Add product
            </li>
          </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
