import { useEffect, useState } from "react";
import { validateUsername } from "../services/authServices";

export default function useValidateUsername(username) {
  const [usernameError, setUsernameError] = useState({
    validated: false,
    error: "",
  });
  useEffect(() => {
    setUsernameError({ validated: false, error: "" });
    const controller = new AbortController();
    const signal = controller.signal;
    async function validateEmailInput() {
      try {
        const { userExists } = await validateUsername(username, signal);
        setUsernameError({
          validated: !userExists,
          message: userExists ? "Username in use" : "",
        });
      } catch (err) {
        if (controller.signal.aborted) {
          return;
        }
      }
    }
    if (!username) {
      setUsernameError((curr) => {
        return { ...curr, message: "" };
      });
      return;
    }
    validateEmailInput();
    return () => {
      controller.abort();
    };
  }, [username, setUsernameError]);
  return { usernameError };
}
