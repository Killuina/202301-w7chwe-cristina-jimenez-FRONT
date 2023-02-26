import { User } from "../../store/features/userSlice/types";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { LoginResponse, UserCredentials } from "../types";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
  registerUser: (registerUserData: FormData) => Promise<void>;
}

const apiUrl = process.env.REACT_APP_URL_API!;
export const usersEndpoint = "/users";
export const registerEndpoint = "/register";
export const loginEndpoint = "/login";

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      const response = await fetch(
        `${apiUrl}${usersEndpoint}${loginEndpoint}`,
        {
          method: "POST",
          body: JSON.stringify(userCredentials),
          headers: { "Content-Type": "application/json" },
        }
      );
      const { token } = (await response.json()) as LoginResponse;

      const { username } = userCredentials;

      const loggedUser: User = {
        username,
        token,
      };

      dispatch(loginUserActionCreator(loggedUser));

      localStorage.setItem("token", token);
    } catch (error) {}
  };
  const registerUser = async (registerUserData: FormData) => {
    try {
      await fetch(`${apiUrl}${usersEndpoint}${registerEndpoint}`, {
        method: "POST",
        body: registerUserData,
      });
    } catch (error) {}
  };
  return { registerUser, loginUser };
};
export default useUser;
