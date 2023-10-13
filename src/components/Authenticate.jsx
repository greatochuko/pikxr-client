import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Authenticate({ children }) {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  if (!user.name) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
