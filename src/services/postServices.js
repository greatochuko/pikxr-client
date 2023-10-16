export async function getPosts() {
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
