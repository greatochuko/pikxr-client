const BASE_URL = "https://tan-wild-raven.cyclic.app/";

export async function fetchUser() {
  const token = localStorage.getItem("token");
  const res = await fetch(BASE_URL + "/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data;
}

export async function fetchUserProfile(username) {
  const token = localStorage.getItem("token");

  const URL = BASE_URL + "/user/" + username;
  const res = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data;
}

export async function fetchUserFollowers(username) {
  const token = localStorage.getItem("token");
  const URL = BASE_URL + "/user/followers/" + username;
  const res = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data;
}

export async function fetchfollowUser(userId, userToFollowId) {
  const token = localStorage.getItem("token");
  const URL = BASE_URL + "/user/follow";
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
  const token = localStorage.getItem("token");
  const URL = BASE_URL + "/user/unfollow";
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

export async function fetchUploadCoverPhoto(formData) {
  const token = localStorage.getItem("token");
  const res = await fetch(BASE_URL + "/user/updatecoverphoto", {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
}

export async function fetchUploadProfilePhoto(formData) {
  const token = localStorage.getItem("token");
  const res = await fetch(BASE_URL + "/user/updateprofilephoto", {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
}

export async function fetchEditUserAbout(about, userId) {
  const token = localStorage.getItem("token");
  const res = await fetch(BASE_URL + "/user/" + userId, {
    method: "PATCH",
    body: JSON.stringify({ about, userId }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}
