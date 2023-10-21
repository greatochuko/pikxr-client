const token = JSON.parse(localStorage.getItem("token"));

export async function fetchUser() {
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
  const res = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data;
}

export async function fetchUserFollowers(username) {
  const URL = "http://localhost:5000/user/followers/" + username;
  const res = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data;
}

export async function fetchfollowUser(userId, userToFollowId) {
  const URL = "http://localhost:5000/user/follow";
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, userToFollowId }),
  });
  const data = await res.json();
  return data;
}

export async function fetchUnFollowUser(userId, userToUnFollowId) {
  const URL = "http://localhost:5000/user/unfollow";
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, userToUnFollowId }),
  });
  const data = await res.json();
  return data;
}
