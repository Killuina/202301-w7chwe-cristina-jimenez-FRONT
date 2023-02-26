import { useState } from "react";
import LoginStyled from "./LoginStyled";

const Login = (): JSX.Element => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const emptyAreaFields = username === "" || password === "";

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    setUsername("");
    setPassword("");
  };

  return (
    <LoginStyled onSubmit={onSubmitHandler} className="form">
      <label htmlFor="username" className="form__label">
        Username:
      </label>
      <input type="text" className="form__input" id="username" />
      <label htmlFor="password" className="form__label">
        Password:
      </label>
      <input type="password" className="form__input" id="password" />
      <button className="form__button" disabled={emptyAreaFields}>
        Log in
      </button>
    </LoginStyled>
  );
};

export default Login;
