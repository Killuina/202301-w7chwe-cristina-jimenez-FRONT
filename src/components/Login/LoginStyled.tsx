import styled from "styled-components";

const LoginStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  gap: 0.3rem;
  padding: 2rem;
  height: 300px;
  width: 300px;
  margin: 2rem;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

  span {
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    color: var(--secondary-color);
  }

  button {
    border-radius: 1rem;
    background-color: var(--primary-color);
    padding: 0.5rem;
    margin-top: 1rem;
    box-shadow: rgba(64, 248, 187, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  button:disabled {
    box-shadow: none;
    color: #000;
    background-color: #aed5d6;
  }
`;

export default LoginStyled;
