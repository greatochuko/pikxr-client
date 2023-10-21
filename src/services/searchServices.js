export async function searchUsers(query, signal) {
  const URL = "http://localhost:5000/users/search?q=" + query;
  const res = await fetch(URL, { signal });
  const data = await res.json();
  return data;
}
