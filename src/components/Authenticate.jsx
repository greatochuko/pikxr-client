import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function Authenticate({ children }) {
  const { user } = useSelector((state) => state.user);
  if (!user.username) {
    return <Navigate to="/login" replace={true} />;
  } else {
    return children;
  }
}

Authenticate.propTypes = {
  children: PropTypes.element,
};
