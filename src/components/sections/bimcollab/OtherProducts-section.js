import React from "react";
import styled from "styled-components";
import vGis from "../../../images/vgis-wide.png";
import arrow from "../../../assets/svg/right-arrow-blue.svg";

import { Link } from "gatsby";
const StyledSection = styled.section`
	width: 75%;
	margin-top: 130px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	h2 {
		margin-bottom: 70px;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		line-height: 123%;
	}
	h3 {
		margin: 60px auto;
		max-width: 42%;
		text-align: center;
		line-height: 123%;
	}
	p {
		font-size: 23px;
		line-height: 152%;
		letter-spacing: 0.4px;
		text-align: center;
		max-width: 750px;
		margin: 0 auto;
	}

	a {
		font-size: 24px;
		font-family: poppins-heading, "Open Sans", "Helvetica Neue", sans-serif;
		color: #3a57ff;
		margin: 25px auto;
		line-height: 25px;
		position: relative;
		text-align: center;
	}

	a:after {
		content: "";
		position: absolute;
		width: 30px;
		height: 16px;
		top: 6px;
		right: -40px;
		z-index: 15;
		margin-left: 10px;
		background-image: url(${arrow});
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	@media (max-width: 900px) {
		width: 91.2%;
		margin-top: 40px;
		h2 {
			font-size: 30px;
			margin-bottom: 20px;
		}
		h3 {
			font-size: 25px;
			margin: 20px auto;
		}
		p {
			font-size: 19px;
		}
		a {
			font-size: 20px;
		}
	}
`;
const StyledImageWrapper = styled.div`
	width: 100%;
	margin-top: 75px;
	@media (max-width: 900px) {
		margin-top: 25px;
	}
`;
function OtherProducts() {
	return (
		<StyledSection>
			<h2>See other products</h2>
			<p>
				The right tools are important. Condconsult negotiates software
				solutions that support quality and collaboration across
				disciplines and phases in construction
			</p>
			<StyledImageWrapper>
				<img src={vGis}></img>
			</StyledImageWrapper>
			<h3>vGis</h3>
			<p style={{ color: "#9b99ae" }}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Senectus magna non in morbi vel urna elit suspendisse massa.
				Nunc elementum eleifend amet nulla condimentum feugiat gravida
				nulla sed. Sed vestibulum dolor, at habitant odio eget.
			</p>
			<Link>Learn more about vGis</Link>
		</StyledSection>
	);
}

export default OtherProducts;
