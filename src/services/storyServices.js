export async function fetchStories() {
  const res = await fetch("http://localhost:5000/stories");
  const data = await res.json();
  return data;
}

export async function createStory(formData) {
  const res = await fetch("http://localhost:5000/story/new", {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  return data;
}
