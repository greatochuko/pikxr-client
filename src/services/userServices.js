export async function getUser(id) {
  const res = await fetch(`http://localhost:5000/user/${id}`);
  const data = res.json();
  return data;
}
