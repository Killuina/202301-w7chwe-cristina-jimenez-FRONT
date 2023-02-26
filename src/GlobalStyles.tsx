import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --primary-color: #74dad4;
  --secondary-color: #714297;
  --primary-font-family: "Quicksand", sans-serif;
}

*, ::after, ::before {
  box-sizing: border-box;
}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

body {
  margin: 0;
  font-family: var(--primary-font-family);
  font-weight: 600;
  
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
