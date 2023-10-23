export async function fetchNotifications() {
  const token = localStorage.getItem("token");
  const res = await fetch("http://localhost:5000/notifications", {
    headers: {
      Authorization: `Bearer, ${token}`,
    },
  });
  const data = await res.json();
  return data;
}

export async function markNotificationsAsRead() {
  const token = localStorage.getItem("token");
  const res = await fetch("http://localhost:5000/notifications", {
    method: "POST",
    headers: {
      Authorization: `Bearer, ${token}`,
    },
  });
  const data = await res.json();
  return data;
}
