import { PermIdentity } from "@material-ui/icons";
import "./Login.css";

const Login = ({ setLoginGuest }) => {
  const handleClick = (e, setLoginGuest) => {
    e.preventDefault();
    setLoginGuest(true);
  };

  return (
    <div className="containerForm">
      <div>
        <span className="logoForm">STORE.</span>
        <span className="labelForm">Admin</span>
      </div>
      <form className={"loginForm"} onSubmit={(e) => e.preventDefault()}>
        <h1 className="titleForm">SIGN IN</h1>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button className="buttonForm">LOGIN</button>
        <span className="dividerForm" />
        <button
          className="buttonGuestForm"
          onClick={(e) => handleClick(e, setLoginGuest)}
        >
          <PermIdentity className="buttonIconGuestForm" />
          Login as guest (demo site)
        </button>
      </form>
    </div>
  );
};

export default Login;
