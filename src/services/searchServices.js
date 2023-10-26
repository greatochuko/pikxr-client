// const BASE_URL = "http://localhost:5000";
const BASE_URL = "http://localhost:5000";

export async function searchUsers(query, signal) {
  const URL = BASE_URL + "/users/search?q=" + query;
  const res = await fetch(URL, { signal });
  const data = await res.json();
  return data;
}
