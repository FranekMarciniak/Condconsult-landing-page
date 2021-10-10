import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import Button from "../../../styles/button";
import arrow from "../../../assets/svg/right-arrow-white.svg";
import { ThemeContext } from "../../../context/todoContext/contextState";
import { Link } from "gatsby";
import Img from "gatsby-image";
const StyledSection = styled.section`
	width: 100%;
	background-color: #ffe1e1;
	padding: 100px 0px;
	@media (max-width: 900px) {
		padding: 0px 0px 60px 0px;
	}
`;
const StyledSectionWrapper = styled.div`
	width: 75%;
	height: 100%;
	margin-left: auto;
	margin-right: auto;
	h1 {
		line-height: 131%;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		color: #030235;
	}

	@media (min-width: 2200px) {
		h1 {
			max-width: 80%;
		}
	}

	@media (max-width: 900px) {
		width: 91.2%;
		h1 {
			text-align: center;
			font-size: 38px;
		}
	}
`;
const StyledContentWrapper = styled.div`
	width: 100%;
	margin-top: 50px;
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 900px) {
		flex-direction: column;
		margin-top: 20px;
	}
`;
const StyledIntroButton = styled(Button)`
	width: 232px;
	height: 55px;
	padding: 15px 46px;
	font-size: 20px;
	position: relative;
	margin-left: auto;
	margin-right: auto;
	letter-spacing: 1px;
	display: flex;
	align-items: center;
	font-family: poppins-heading, "Open Sans", "Helvetica Neue", sans-serif;
	&:after {
		content: "";
		position: absolute;
		width: 22px;
		height: 13px;
		top: 21px;
		right: 36px;
		z-index: 15;
		background-image: url(${arrow});
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
`;
const StyledTextWrapper = styled.div`
	width: 100%;
	p {
		font-size: 23px;
		line-height: 152%;
		letter-spacing: 0.4px;
		color: #030235;
		max-width: 700px;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 55px;
	}
	@media (max-width: 900px) {
		a {
			display: none;
		}
	}
	@media (max-width: 900px) {
		width: 100%;
		p {
			text-align: center;
			font-size: 19px;
			margin-bottom: 0;
		}
	}
`;
const StyledImageWrapper = styled.div`
	width: 65%;
	margin-top: 105px;
	min-width: 600px;
	height: 480px;
	margin-left: auto;
	margin-right: auto;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 5px;
	}
	div {
		height: 100%;
	}
	@media (max-width: 1400px) {
		height: 430px;
	}
	@media (max-width: 900px) {
		margin-top: 30px;
		width: 100%;
		min-width: 0;
	}
	@media (max-width: 600px) {
		height: max-content;

		img {
			object-fit: contain;
		}
	}
`;
const StyledIntroButtonMobile = styled(StyledIntroButton)`
	margin: 40px auto 0px auto;
	@media (min-width: 900px) {
		display: none;
	}
`;
const IntroSection: React.FC<{ data: any }> = ({ data }) => {
	const theme = useContext(ThemeContext);
	useEffect(() => {
		theme.changePink();
	}, [theme]);
	return (
		<StyledSection>
			<StyledSectionWrapper>
				<h1>{data.heading}</h1>
				<StyledContentWrapper>
					<StyledTextWrapper>
						<p>{data.content}</p>
						<StyledIntroButton as={Link} to={data.link}>
							{data.button}
						</StyledIntroButton>
					</StyledTextWrapper>
					<StyledImageWrapper>
						<Img
							fluid={data.image.asset.fluid}
							alt="vgis in action"
						></Img>
					</StyledImageWrapper>
					<StyledIntroButtonMobile as={Link} to="/a">
						Try it now!
					</StyledIntroButtonMobile>
				</StyledContentWrapper>
			</StyledSectionWrapper>
		</StyledSection>
	);
};

export default IntroSection;
