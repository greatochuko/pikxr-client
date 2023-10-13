export async function login(email, password) {
  try {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  } catch (err) {
    return err;
  }
}

export async function signup(username, fullname, email, password) {
  try {
    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, fullname, email, password }),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function validateEmail(email, signal) {
  const res = await fetch("http://localhost:5000/validateEmail", {
    signal,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  const data = await res.json();
  return data;
}

export async function validateUsername(username, signal) {
  const res = await fetch("http://localhost:5000/validateUsername", {
    signal,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  });
  const data = await res.json();
  return data;
}
