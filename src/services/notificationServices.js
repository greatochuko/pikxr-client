// const BASE_URL = "https://pikxr-api.onrender.com";
const BASE_URL = "https://pikxr-api.onrender.com";

export async function fetchNotifications() {
  const token = localStorage.getItem("token");
  const res = await fetch(BASE_URL + "/notifications", {
    headers: {
      Authorization: `Bearer, ${token}`,
    },
  });
  const data = await res.json();
  return data;
}

export async function markNotificationsAsRead() {
  const token = localStorage.getItem("token");
  const res = await fetch(BASE_URL + "/notifications", {
    method: "POST",
    headers: {
      Authorization: `Bearer, ${token}`,
    },
  });
  const data = await res.json();
  return data;
}
