export async function fetchUser() {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await fetch(`http://localhost:5000/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data;
}

export async function fetchUserProfile(username) {
  const URL = "http://localhost:5000/user/" + username;
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data;
}
