import { useEffect, useState } from "react";
import { userList } from "../../GuestData";
import "./newUser.css";

export default function NewUser() {

  const [inputs, setInputs] = useState({});

  const [users, setUsers] = useState([])

  useEffect(() => {
    const LocalStorageDataUsers = localStorage.getItem("LocalStorageDataUsers")
    if (LocalStorageDataUsers) {
      setUsers(JSON.parse(LocalStorageDataUsers))
    } else{
      setUsers(userList);
    }
  }, []);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    console.log(inputs)
  }

  const handleClick = (e) => {
    // e.preventDefault();
    const userDefault = { img:"", isAdmin: false};
    const user = {...userDefault, ...inputs, _id:+new Date(),createdAt: new Date()};
    console.log(user)
    users.push(user)
    localStorage.setItem("LocalStorageDataUsers", JSON.stringify(users))
  
  }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={handleClick}>
        <div className="newUserItem">
          <label>Username</label>
          <input name="username" type="text" placeholder="username" required onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input name="email" type="email" placeholder="yourname@yourcompany.com" required onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            name="password" type="password" placeholder="password" 
            required onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Admin</label>
          <select className="newUserSelect" name="isAdmin" id="isAdmin" required onChange={handleChange} defaultValue={false}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
