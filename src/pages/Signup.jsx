import { useEffect, useState } from "react";
import styles from "./Auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slice/userSlice";
import { login, signup } from "../services/authServices";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  async function handleSignup(e) {
    e.preventDefault();
    setError("");
    const data = await signup(username, fullname, email, password);
    dispatch(loginUser(data.name));
    navigate("/");
  }

  return (
    <div className={styles.auth}>
      <div className={styles.img}></div>
      <div className={styles.loginContainer}>
        <div className={styles.header}>
          <h1 className="title">Register for Pikxr</h1>
          <p className={styles.signup}>
            Have an account? <Link to={"/login"}>Login</Link>
          </p>
        </div>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="off"
          />
          <input
            type="text"
            name="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Fullname"
            autoComplete="off"
          />
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
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
          <input type="submit" value="Sign Up" />
          <p className={styles.break}>or</p>
          <div className={styles.oauth}>
            <a href="#">Sign In with google</a>
          </div>
        </form>
      </div>
    </div>
  );
}
