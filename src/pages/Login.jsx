import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";
import { useSelector } from "react-redux";

export default function Login() {
  // const [user, setUser] = useState(localStorage.getItem("user") || null);
  const [email, setEmail] = useState("");
  const [error, serError] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.user);
  console.log(user);

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
      localStorage.setItem("user", JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.login}>
      <h5>{user.name || "no"}</h5>
      <div className={styles.img}></div>
      <div className={styles.loginContainer}>
        <div className={styles.header}>
          <h1 className="title">Sign In to Pikxr</h1>
          <p className={styles.signup}>
            Don&apos;t Have an account? <Link to={"/signup"}>Signup</Link>
          </p>
        </div>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
          {error && <p className={styles.error}>{error}</p>}
          <input type="submit" value="Login" />
          <p className={styles.break}>or</p>
          <div className={styles.oauth}>
            <a href="#">Sign In with google</a>
          </div>
        </form>
      </div>
    </div>
  );
}
