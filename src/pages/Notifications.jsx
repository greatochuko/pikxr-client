import { useEffect, useState } from "react";
import styles from "./Notifications.module.css";
import {
  fetchNotifications,
  markNotificationsAsRead,
} from "../services/notificationServices";
import Notification from "../components/Notification";
import NotificationWireFrame from "../components/NotificationWireFrame";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const unReadNotifications = notifications.filter(
    (notif) => notif.isRead === false
  ).length;

  useEffect(() => {
    async function refreshNotifications() {
      setIsLoading(true);
      const data = await fetchNotifications();
      setNotifications(data);
      setIsLoading(false);
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
        {isLoading ? (
          <>
            <NotificationWireFrame />
            <NotificationWireFrame />
            <NotificationWireFrame />
          </>
        ) : (
          notifications.map((notif) => (
            <Notification key={notif._id} notif={notif} />
          ))
        )}
      </div>
    </div>
  );
}
