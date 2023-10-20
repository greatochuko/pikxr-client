export async function postComment(comment, user, postId) {
  const res = await fetch("http://localhost:5000/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ comment, user, postId }),
  });
  const data = await res.json();
  return data;
}
