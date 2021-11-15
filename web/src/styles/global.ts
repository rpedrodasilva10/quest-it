import { createGlobalStyle } from "styled-components";
import backgroundImg from "../assets/images/bg-01.jpg";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    background: url(${backgroundImg}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    -webkit-font-smoothing: antialiased;

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,

    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
      box-shadow: 0 0 0 30px white inset !important;
    }

  }

  body, input, button {
    font: 16px 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }


`;
