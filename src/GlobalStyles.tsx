import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --primary-color: #8DC6C3;
  --secondary-color: #714297;
  --primary-font-family: "Quicksand", sans-serif;
}

*, ::after, ::before {
  box-sizing: border-box;
}

body {
  padding: 1.5rem;
  font-family: var(--primary-font-family);
  font-weight: 600;
  width: 100%;
  min-height: 100vh;
  
}

a {
  text-decoration: none;
  color: inherit;
}

h1,h2{
  padding: 0;
  margin: 0;
  font-size: 2rem;
}

ol, ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

button{
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: inherit;
  font-family: inherit;
  font-size: inherit;
}

a,
a:active,
a:visited {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyles;
