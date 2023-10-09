import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <nav>
        <ul>
          <Link to={"/login"}>Login</Link>
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/"}>Home</Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
