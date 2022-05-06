import "./widgetSm.css";
import { useEffect, useState } from "react";
import { userList } from "../../GuestData";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers =  () => {
      try {
        setUsers(userList.slice(1).slice(-3).reverse());
      } catch {}
    };
    getUsers();
  }, []);
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
