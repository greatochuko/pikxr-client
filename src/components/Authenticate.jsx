import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { logoutUser } from "../slice/userSlice";

export default function Authenticate({ children }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  if (!user) {
    dispatch(logoutUser());
    return <Navigate to="/login" replace={true} />;
  }
  return children;
}

Authenticate.propTypes = {
  children: PropTypes.element,
};
