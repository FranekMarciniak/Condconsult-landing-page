import React from "react";
import styled from "styled-components";
import arrow from "../../../assets/svg/right-arrow-white.svg";
import Button from "../../../styles/button";

import { Link } from "gatsby";
const StyledSection = styled.section`
	width: 75%;
	margin-left: auto;
	margin-right: auto;
	background-color: var(--font-primary);
	color: white;
	border-radius: 15px;
	padding: 9% 4%;
	display: flex;
	margin-top: 90px;
	h2 {
		max-width: 80%;
		margin: auto;
		line-height: 114%;
	}
	p {
		font-size: 28px;
		line-height: 141%;
		margin-bottom: 35px;
	}
	a {
		font-size: 24px;
		font-family: poppins-heading, "Open Sans", "Helvetica Neue", sans-serif;
		margin-left: auto;
		margin-right: auto;
		align-self: center;
		color: #3a57ff;
		line-height: 25px;
		position: relative;
	}
	a:before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		width: calc(100% + 10px);
		height: 100%;
	}
	a:after {
		content: "";
		position: absolute;
		width: 30px;
		height: 16px;
		top: 8px;
		right: -40px;
		z-index: 15;
		margin-left: 10px;
		background-image: url(${arrow});
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	@media (max-width: 1650px) {
		h2 {
			font-size: 50px;
		}
		p {
			font-size: 26px;
			margin-bottom: 25px;
		}
	}
	@media (max-width: 1434px) {
		p {
			font-size: 23px;
		}
	}
	@media (max-width: 1150px) {
		button {
			width: 100%;
		}
		p {
			font-size: 18px;
		}
	}
	@media (max-width: 900px) {
		width: 91.2%;
		padding: calc(9% + 30px) 4%;
		border-radius: 0px;
		margin-left: auto;
		margin-right: auto;
		flex-direction: column;
		margin-top: 18px;
		align-items: center;
		h2 {
			max-width: 100%;
			text-align: center;
			font-size: 35px;
		}
		p {
			font-size: 21px;
			font-size: 18px;
			text-align: center;
			margin-top: 25px;
		}
		a {
			position: absolute;
			right: 50%;
		}
		button {
			width: 382px;
		}
	}
	@media (max-width: 550px) {
		h2 {
			font-size: 29px;
		}
		button {
			width: 100%;
			height: 90px;
		}
	}
	@media (max-width: 300px) {
		h2 {
			font-size: 29px;
		}
	}
`;
const StyledIntroButton = styled(Button)`
	width: 382px;
	text-align: center;
	height: 55px;
	padding: 0px 46px;
	font-size: 20px;
	position: relative;
	letter-spacing: 1px;
	display: flex;
	align-items: center;
	/* justify-content: center; */
	font-family: poppins-heading, "Open Sans", "Helvetica Neue", sans-serif;
	&:after {
		content: "";
		position: absolute;
		width: 22px;
		height: 13px;
		top: 21px;
		right: 20px;
		z-index: 15;
		background-image: url(${arrow});
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	@media (max-width: 900px) {
		margin-left: auto;
		margin-right: auto;
		&:after {
			top: 40%;
		}
	}
	@media (max-width: 350px) {
		margin-left: auto;
		margin-right: auto;
	}
`;
const HeadingWrapper = styled.div`
	width: 50%;
	@media (max-width: 900px) {
		width: 100%;
	}
`;
const ContentWrapper = styled.div`
	width: 50%;
	@media (max-width: 900px) {
		width: 100%;
	}
`;
function About({ data }) {
	return (
		<StyledSection>
			<HeadingWrapper>
				<h2>{data.heading}</h2>
			</HeadingWrapper>
			<ContentWrapper>
				<p>{data.content}</p>
				<StyledIntroButton to={data.link}>
					{"See BIMcollab price plans"}
				</StyledIntroButton>
			</ContentWrapper>
		</StyledSection>
	);
}

export default About;
