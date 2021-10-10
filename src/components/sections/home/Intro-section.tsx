import { Link } from "gatsby";
import * as React from "react";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import arrow from "../../../assets/svg/right-arrow-white.svg";
import { ThemeContext } from "../../../context/todoContext/contextState";
import Button from "../../../styles/button";

const StyledSection = styled.section`
	width: 75%;
	display: flex;
	margin-left: auto;
	margin-right: auto;
	justify-content: center;
	flex-flow: wrap column;
	align-items: center;
	margin-top: 113px;
	h1 {
		max-width: 711px;
		text-align: center;
		line-height: 117%;
		box-sizing: border-box;
		margin-bottom: 35px;
		@media (max-width: 900px) {
			font-size: 38px;
			margin-bottom: 20px;
		}
	}
	p {
		letter-spacing: 0.4px;
		max-width: 600px;
		line-height: 152%;
		text-align: center;
		font-size: 23px;
		margin-bottom: 40px;
	}
	@media (max-width: 900px) {
		margin-top: 50px;
		width: 91.2%;
		margin-left: auto;
		margin-right: auto;
		p {
			font-size: 19px;
			margin-bottom: 45px;
		}
	}
`;
const StyledIntroButton = styled(Button)`
	width: 240px;
	text-align: left;
	height: 55px;
	padding: 15px 26px;
	font-size: 20px;
	position: relative;
	letter-spacing: 1px;
	display: flex;
	align-items: center;
	font-family: poppins-heading, "Open Sans", "Helvetica Neue", sans-serif;
	&:after {
		content: "";
		position: absolute;
		width: 22px;
		height: 13px;
		top: 23px;
		right: 25px;
		z-index: 15;
		background-image: url(${arrow});
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
`;
interface dataInterface {
	data: {
		heading: string;
		content: string;
		button: string;
	};
}
const Intro: React.FC<dataInterface> = ({ data }) => {
	const theme = useContext(ThemeContext);
	useEffect(() => {
		theme.changeLight();
	}, [theme]);
	return (
		<StyledSection>
			<h1>{data.heading}</h1>
			<p>{data.content}</p>
			<StyledIntroButton as={Link} to="/a">
				{data.button}
			</StyledIntroButton>
		</StyledSection>
	);
};

export default Intro;
