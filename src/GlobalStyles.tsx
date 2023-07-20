import { createGlobalStyle } from "styled-components";
//import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    margin: 0 auto;
    background-color: #008080;
  }

  @import url('https://fonts.googleapis.com/css2?family=Neucha&display=swap');
`;
