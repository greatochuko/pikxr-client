import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import styles from "./Auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slice/userSlice";
import { login } from "../services/authServices";

export default function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    const data = await login(email, password);
    console.log(data);
    if (data.error) {
      setError(data.error);
      return;
    }
    dispatch(loginUser(data));
    navigate("/");
  }

  if (user) {
    return <Navigate to={"/"} replace={true} />;
  }

  return (
    <div className={styles.auth}>
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
