// const BASE_URL = "http://localhost:5000";
const BASE_URL = "http://localhost:5000";

export async function fetchPosts() {
  const token = localStorage.getItem("token");
  const res = await fetch(BASE_URL + "/posts/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
}

export async function createPost(formData) {
  const token = localStorage.getItem("token");
  const res = await fetch(BASE_URL + "/posts", {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
}

export async function likePost(postId, targetUserId) {
  const token = localStorage.getItem("token");
  const res = await fetch(BASE_URL + "/post/like", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ targetUserId, postId }),
  });
  const data = await res.json();
  return data;
}

export async function unLikePost(postId, targetUserId) {
  const token = localStorage.getItem("token");
  const res = await fetch(BASE_URL + "/post/unlike", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ targetUserId, postId }),
  });
  const data = await res.json();
  return data;
}

export async function savePost(postId) {
  const token = localStorage.getItem("token");
  const res = await fetch(BASE_URL + "/post/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ postId }),
  });
  const data = await res.json();
  return data;
}

export async function unSavePost(postId) {
  const token = localStorage.getItem("token");
  const res = await fetch(BASE_URL + "/post/unsave", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ postId }),
  });
  const data = await res.json();
  return data;
}

export async function updatePost(postId, formData) {
  const token = localStorage.getItem("token");
  const res = await fetch(BASE_URL + "/post/" + postId, {
    method: "PATCH",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
}

export async function fetchDeletePost(postId) {
  const token = localStorage.getItem("token");
  const res = await fetch(BASE_URL + "/post/" + postId, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
}
export async function fetchDeleteStory(storyId) {
  const token = localStorage.getItem("token");
  const res = await fetch(BASE_URL + "/story/" + storyId, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
}
