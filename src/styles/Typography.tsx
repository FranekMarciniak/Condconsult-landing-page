import { createGlobalStyle } from "styled-components";

import poppinsHeading from "../assets/fonts/Poppins-SemiBold.ttf";
import poppinsRegular from "../assets/fonts/Poppins-Regular.ttf";
import poppinsMedium from "../assets/fonts/Poppins-Medium.ttf";
import poppinsLight from "../assets/fonts/Poppins-Light.ttf";
import montserrat from "../assets/fonts/Montserrat-Regular.ttf";
const Typography = createGlobalStyle`

  @font-face {
    font-family: poppins-heading;
    src: url(${poppinsHeading});
  }  
  @font-face {
    font-family: poppins-light;
    src: url(${poppinsLight});
  }  
  @font-face {
    font-family: poppins-regular;
    src: url(${poppinsRegular});
  }  
  @font-face {
    font-family: poppins-medium;
    src: url(${poppinsMedium});
  }
  
  @font-face {
    font-family: Montserrat;
    src: url(${montserrat});
  }

  html {
    font-family: Montserrat, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--font-primary);
  }
  p, li {
    letter-spacing: 0.5px;
    margin: 0
  }

  li{
    font-family: poppins-regular, 'Open Sans', 'Helvetica Neue', sans-serif;

  }
  
  h1,h2,h3,h4,h5,h6 {
    font-family: poppins-heading, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
  }
  
  h1 {
		max-width: 711px;
		text-align: center;
		line-height: 117%;
		box-sizing: border-box;
		margin-bottom: 35px;
    font-size: 80px;
	}

  h2 {
		text-align: center;
		max-width: 677px;
		line-height: 123%;
	}
  
  a{
    
  }
	@media (max-width: 1650px) {
		h2 {
			font-size: 50px;
		}
	}

	@media (max-width: 1150px) {
		h2 {
			font-size: 40px;
		}
	}
	@media (max-width: 900px) {
    h1{
      font-size: 38px;
			margin-bottom: 20px;
    }
		h2 {
			width: 86%;
			font-size: 35px;
		}
    body{
          width: 100%;

    }
	}
	@media (max-width: 550px) {
		h2 {
			max-width: 65%;
			font-size: 29px;
		}
	}


 
  h2{
      font-size: 60px;
  }

  h3{
      font-size: 42px;
  }

  h4{
      font-size: 34px;
  }

  a {
    color: var(--black);
    text-decoration-color: none;
    text-decoration-skip-ink: none;
    text-decoration: none;

  }

  h6{
        font-family: poppins-light, 'Open Sans', 'Helvetica Neue', sans-serif;

  }

  button{
    font-family: poppins-medium, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    font-weight: 500
  }
  .center {
    text-align: center;
  }

`;

export default Typography;
