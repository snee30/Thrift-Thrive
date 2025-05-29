import { Link } from "react-router-dom";
import Cart from "./Cart";

const LoginSignup = () => {
  return (
    <div className="flex flex-row gap-5 items-center justify-center h-full text-darkbrown">
      <div>
        <div className="dropdown dropdown-start">
          <div
            tabIndex={0}
            role="button"
            className="btn text-brown m-1 bg-sage border-0 p-2 rounded-lg"
          >
            Login/Signup
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-sage rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <Link to={"/login"}>As a User</Link>
            </li>
            <li>
              <Link to={"/sell"}>As a Seller</Link>
            </li>
            <li>
              <Link to={"/admin/login"}>As a Admin</Link>
            </li>
          </ul>
        </div>
      </div>

      <Cart />
    </div>
  );
};
export default LoginSignup;
