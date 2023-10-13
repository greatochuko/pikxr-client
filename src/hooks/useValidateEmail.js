import { useEffect } from "react";
import { validateEmail } from "../services/authServices";

export default function useValidateEmail(setEmailError, email) {
  useEffect(() => {
    setEmailError({ validated: false, error: "" });
    const controller = new AbortController();
    const signal = controller.signal;
    async function validateEmailInput() {
      try {
        const { userExists } = await validateEmail(email, signal);
        setEmailError({
          validated: !userExists,
          error: userExists ? "Email in use" : "",
        });
      } catch (err) {
        if (controller.signal.aborted) {
          console.log("The user aborted the request");
        }
      }
    }
    if (!email) {
      setEmailError((curr) => {
        return { ...curr, error: "" };
      });
      return;
    }
    if (!email.includes("@") || !email.includes(".com")) {
      setEmailError((curr) => {
        return { ...curr, error: "Enter a valid username" };
      });
      return;
    }
    validateEmailInput();
    return () => {
      controller.abort();
    };
  }, [email, setEmailError]);
}
