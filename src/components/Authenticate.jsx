import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export default function Authenticate({ children }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  console.log(user);
  if (!user.name) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
