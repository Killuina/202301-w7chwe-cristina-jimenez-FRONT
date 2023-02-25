interface UseUserStructure {
  registerUser: (registerUserData: FormData) => Promise<void>;
}

const apiUrl = process.env.REACT_APP_URL_API!;
const usersEndpoint = "/users";
const registerEndpoint = "/register";

const useUser = (): UseUserStructure => {
  const registerUser = async (registerUserData: FormData) => {
    try {
      await fetch(`${apiUrl}${usersEndpoint}${registerEndpoint}`, {
        method: "POST",
        body: registerUserData,
      });
    } catch (error) {}
  };
  return { registerUser };
};
export default useUser;
