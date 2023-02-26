import styled from "styled-components";

const LoginStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  gap: 0.2rem;
  padding: 2rem;
  height: 200px;
  width: 300px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

  button {
    background-color: var(--primary-color);
    padding: 0.2rem;
    margin-top: 1rem;
  }
`;

export default LoginStyled;
