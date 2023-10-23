import { useEffect, useState } from "react";
import styles from "./Notifications.module.css";
import { Link } from "react-router-dom";
import {
  fetchNotifications,
  markNotificationsAsRead,
} from "../services/notificationServices";
import { getDuration } from "../utils/getDuration";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  const unReadNotifications = notifications.filter(
    (notif) => notif.isRead === false
  ).length;

  useEffect(() => {
    async function refreshNotifications() {
      const data = await fetchNotifications();
      setNotifications(data);
    }
    refreshNotifications();
  }, []);

  async function markAsRead() {
    if (!unReadNotifications) return;
    const data = await markNotificationsAsRead();
    setNotifications(data);
  }

  return (
    <div className={styles.notifications}>
      <h2 className={styles.title}>
        Notifications({unReadNotifications})
        <button onClick={markAsRead}>Mark all as read</button>
      </h2>
      <div className={styles.notificationList}>
        {notifications.map((notif, i) => (
          <div
            className={
              notif.isRead
                ? styles.notification
                : styles.notification + " " + styles.isRead
            }
            key={i}
          >
            <Link to={"/profile/" + notif.user.username}>
              <img
                src={"http://localhost:5000/users/" + notif.user.imageUrl}
                alt=""
              />
            </Link>
            <p>
              <Link to={"/profile/" + notif.user.username}>
                {notif.user.fullname}
              </Link>
              <span>{notif.message}</span>
              <span>{getDuration(notif.createdAt)}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
