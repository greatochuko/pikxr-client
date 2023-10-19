export async function fetchPosts() {
  const res = await fetch("http://localhost:5000/posts");
  return await res.json();
}

export async function createPost(formData) {
  const res = await fetch("http://localhost:5000/posts", {
    method: "POST",
    body: formData,
  });
  return await res.json();
}

export async function likePost(postId, userId) {
  const res = await fetch("http://localhost:5000/post/like", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, postId }),
  });
  const data = await res.json();
  return data;
}

export async function unLikePost(postId, userId) {
  const res = await fetch("http://localhost:5000/post/unlike", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, postId }),
  });
  const data = await res.json();
  return data;
}

export async function savePost(postId, userId) {
  const res = await fetch("http://localhost:5000/post/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, postId }),
  });
  const data = await res.json();
  return data;
}

export async function unSavePost(postId, userId) {
  const res = await fetch("http://localhost:5000/post/unsave", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, postId }),
  });
  const data = await res.json();
  return data;
}
