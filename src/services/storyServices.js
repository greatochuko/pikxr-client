export async function fetchStories() {
  const res = await fetch("http://localhost:5000/stories");
  const data = await res.json();
  return data;
}
