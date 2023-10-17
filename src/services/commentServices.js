export async function fetchComments(postId) {
  const res = await fetch(`http://localhost:5000/comments/${postId}`);
  const data = res.json();
  return data;
}
