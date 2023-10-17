export async function fetchPosts() {
  const res = await fetch("http://localhost:5000/posts");
  return await res.json();
}

export async function createPost(formData) {
  console.log(formData);
  const res = await fetch("http://localhost:5000/posts", {
    method: "POST",
    body: formData,
  });
  return await res.json();
}
