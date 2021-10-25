import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  :root {
    --blue: #4666F6;
    --yellow: #FFEFBF;
    --gray: #EBECFB;
    --black: #090031;
    --watermelon-pink: #DE767B;
    --pastel-pink: #FFE1E1;
    --orange: #FFCA29;
    --normal-pink: #FFB8B8;
    --link: #3a57ff;
    --font-primary: #030235;
    --font-secondary: #4F4D71;
    --font-tertiary: #9B99AE;

      }
  html {
    width: 100%;
    scroll-behavior: smooth;
  }
  * {
  box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;

  }
    img {
    max-width: 100%;
  }

  button:focus{
    outline: none;
  }
  
	@media (max-width: 900px) {
    body{
          width: 100%;
    }
	}


`;

export default GlobalStyles;
