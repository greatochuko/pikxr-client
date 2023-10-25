// const BASE_URL = "https://pikxr-api.onrender.com";
const BASE_URL = "https://pikxr-api.onrender.com";

export async function searchUsers(query, signal) {
  const URL = BASE_URL + "/users/search?q=" + query;
  const res = await fetch(URL, { signal });
  const data = await res.json();
  return data;
}
