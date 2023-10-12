import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <nav>
        <ul>
          <Link to={"/login"}>Login</Link>
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/profile"}>{user.name}</Link>

          <Link to={"/"}>Home</Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
