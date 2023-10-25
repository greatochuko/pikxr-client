export async function fetchComments(postId) {
  const token = localStorage.getItem("token");
  const res = await fetch("http://localhost:5000/comments/" + postId, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
}

export async function postComment(comment, targetUserId, postId) {
  const token = localStorage.getItem("token");
  const res = await fetch("http://localhost:5000/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ comment, targetUserId, postId }),
  });
  const data = await res.json();
  return data;
}

export async function fetchDeleteComment(commentId) {
  const token = localStorage.getItem("token");
  const res = await fetch("http://localhost:5000/comment/" + commentId, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
}
