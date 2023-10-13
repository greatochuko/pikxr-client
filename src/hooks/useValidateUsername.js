import { useEffect } from "react";
import { validateUsername } from "../services/authServices";

export default function useValidateUsername(setUsernameError, username) {
  useEffect(() => {
    setUsernameError({ validated: false, error: "" });
    const controller = new AbortController();
    const signal = controller.signal;
    async function validateEmailInput() {
      try {
        const { userExists } = await validateUsername(username, signal);
        setUsernameError({
          validated: !userExists,
          error: userExists ? "Username in use" : "",
        });
      } catch (err) {
        if (controller.signal.aborted) {
          console.log("The user aborted the request");
        }
      }
    }
    if (!username) {
      setUsernameError((curr) => {
        return { ...curr, error: "" };
      });
      return;
    }
    validateEmailInput();
    return () => {
      controller.abort();
    };
  }, [username, setUsernameError]);
}
