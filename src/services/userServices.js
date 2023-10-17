export async function fetchUser(token) {
  const res = await fetch(`http://localhost:5000/user/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data;
}
