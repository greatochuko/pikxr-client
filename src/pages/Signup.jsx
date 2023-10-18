import { useState } from "react";
import styles from "./Auth.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slice/userSlice";
import { signup } from "../services/authServices";
import FieldValidator from "../components/FieldValidator";
import useValidateEmail from "../hooks/useValidateEmail";
import useValidateUsername from "../hooks/useValidateUsername";
import useValidatePassword from "../hooks/useValidatePassword";
import { fetchUser } from "../services/userServices";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");

  // CUSTOM HOOKS
  const { emailError } = useValidateEmail(email);
  const { usernameError } = useValidateUsername(username);
  const { passwordError } = useValidatePassword(password);

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cannotSubmit =
    !usernameError.validated ||
    !emailError.validated ||
    !username ||
    !password ||
    !fullname ||
    !email;

  async function handleSignup(e) {
    e.preventDefault();
    if (cannotSubmit) return;

    const resData = await signup(username, fullname, email, password);
    localStorage.setItem("token", resData.token);

    const data = await fetchUser(resData.token);
    dispatch(loginUser(data));
    navigate("/");
  }

  if (user?.username) {
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
        <form onSubmit={handleSignup}>
          <div className={styles.inputField}>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              autoComplete="off"
            />
            <FieldValidator field={email} error={emailError} />
          </div>
          <div className={styles.inputField}>
            <input
              type="text"
              name="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Fullname"
              autoComplete="off"
            />
          </div>
          <div className={styles.inputField}>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              autoComplete="off"
            />
            <FieldValidator field={username} error={usernameError} />
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
            <FieldValidator field={password} error={passwordError} />
          </div>
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
