export async function fetchPosts() {
  const token = localStorage.getItem("token");
  const res = await fetch("http://localhost:5000/posts", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
}

export async function createPost(formData) {
  const token = localStorage.getItem("token");
  const res = await fetch("http://localhost:5000/posts", {
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
  const res = await fetch("http://localhost:5000/post/like", {
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
  const res = await fetch("http://localhost:5000/post/unlike", {
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
  const res = await fetch("http://localhost:5000/post/save", {
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
  const res = await fetch("http://localhost:5000/post/unsave", {
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
  const res = await fetch("http://localhost:5000/post/" + postId, {
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
  const res = await fetch("http://localhost:5000/post/" + postId, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
}
