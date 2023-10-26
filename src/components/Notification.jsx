import { Link } from "react-router-dom";
import styles from "./Notification.module.css";
import { getDuration } from "../utils/getDuration";
import propTypes from "prop-types";

const BASE_URL = "https://pikxr-api.onrender.com";

export default function Notification({ notif }) {
  return (
    <div
      className={
        notif.isRead
          ? styles.notification
          : styles.notification + " " + styles.isRead
      }
    >
      <Link to={"/profile/" + notif.user.username}>
        <img src={BASE_URL + "/users/" + notif.user.imageUrl} alt="" />
      </Link>
      <p>
        <Link to={"/profile/" + notif.user.username}>
          {notif.user.fullname}
        </Link>
        <span>{notif.message}</span>
        <span>{getDuration(notif.createdAt)}</span>
      </p>
    </div>
  );
}

Notification.propTypes = {
  notif: propTypes.object,
};
