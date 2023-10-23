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
