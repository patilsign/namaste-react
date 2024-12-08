import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const data = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="flex bg-pink-100 justify-between sticky">
      <img className="m-1 p-1 w-36" alt="logo" src={LOGO_URL}></img>
      <ul className="m-4 p-4 flex ">
        <li className="m-1 p-1">Online Status : {onlineStatus}</li>
        <li className="m-1 p-1">
          <Link to="/">Home</Link>
        </li>
        <li className="m-1 p-1">
          <Link to="/about">About</Link>
        </li>
        <li className="m-1 p-1">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="m-1 p-1">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="m-1 p-1">
          <Link to="/">Cart</Link>
        </li>
        <li className="m-1 p-1">
          <button
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </li>
        <li className="m-1 p-1 font-bold">{data.loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
