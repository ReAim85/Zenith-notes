import { useAtom, useSetAtom } from "jotai";
import { Button } from "../ui/button";
import { LoginDetails, User } from "./Atoms";
import axios from "axios";

export const LoginPage = () => {
  const [loginDetails, setLoginDetails] = useAtom(LoginDetails);
  const setUser = useSetAtom(User);

  const loginHandler = async () => {
    try {
      const loginCheck = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        loginDetails,
        { withCredentials: true }
      );
      setUser(loginCheck.data.name);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <input
        name="username"
        value={loginDetails.username}
        type="text"
        placeholder="Username"
        className="border bg-gray-300"
        onChange={(e) =>
          setLoginDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
        required
      />
      <input
        name="password"
        value={loginDetails.password}
        type="password"
        placeholder="Password"
        className="border bg-gray-300"
        onChange={(e) =>
          setLoginDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
        required
      />

      <Button
        text="Submit"
        variant="primary"
        size="lg"
        onClick={loginHandler}
      />
    </div>
  );
};
