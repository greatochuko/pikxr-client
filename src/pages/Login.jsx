import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import styles from "./Auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slice/userSlice";
import { login } from "../services/authServices";
import { fetchUser } from "../services/userServices";

export default function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cannotSubmit = !email || !password;

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    const resData = await login(email, password);
    if (resData.error) {
      setError(resData.error);
      return;
    }
    const data = await fetchUser(resData.token);
    dispatch(loginUser(data));
    navigate("/");
  }

  if (user.username) {
    return <Navigate to={"/"} replace={true} />;
  }

  return (
    <div className={styles.auth}>
      <div className={styles.img}></div>
      <div className={styles.authContainer}>
        <div className={styles.header}>
          <h1 className="title">Register for Pikxr</h1>
          <p className={styles.signup}>
            Have an account? <Link to={"/login"}>Login</Link>
          </p>
        </div>
        <form onSubmit={handleLogin}>
          <div className={styles.inputField}>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              autoComplete="off"
            />
          </div>

          <div className={styles.inputField}>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className={styles.error}>{error}</div>
          <input
            type="submit"
            className={cannotSubmit ? styles.disabled : null}
            value="Sign Up"
          />
          <p className={styles.break}>or</p>
          <div className={styles.oauth}>
            <a href="#">Sign In with google</a>
          </div>
        </form>
      </div>
    </div>
  );
}
