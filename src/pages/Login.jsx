import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";

export default function Login() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [error, serError] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    serError("");
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      console.log("data", data);
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.login}>
      <div className={styles.header}>
        <h1 className="title">Sign In to Pikxr</h1>
        <p>
          Dont Have an account? <Link to={"/signup"}>Signup</Link>
        </p>
      </div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />
        {error && <p className={styles.error}>{error}</p>}
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
