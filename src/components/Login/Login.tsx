import { useState } from "react";
import useUser from "../../hooks/useUser";
import LoginStyled from "./LoginStyled";

const Login = (): JSX.Element => {
  const { loginUser } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const emptyAreaFields = username === "" || password === "";

  const handleUsername = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(value);
  };

  const handlePassword = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(value);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    document.querySelectorAll("input").forEach((input) => (input.value = ""));

    loginUser({ username, password });

    setUsername("");
    setPassword("");
  };

  return (
    <LoginStyled onSubmit={onSubmitHandler} className="form">
      <span>welcome!</span>
      <label htmlFor="username" className="form__label">
        Username:
      </label>
      <input
        type="text"
        className="form__input"
        id="username"
        onChange={handleUsername}
        value={username}
      />
      <label htmlFor="password" className="form__label">
        Password:
      </label>
      <input
        type="password"
        className="form__input"
        id="password"
        onChange={handlePassword}
        value={password}
      />
      <button type="submit" className="form__button" disabled={emptyAreaFields}>
        Log in
      </button>
    </LoginStyled>
  );
};

export default Login;
