import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import arrow2D54BC from "../assets/svg/right-arrow-#2D54BC.svg";
import Img from "gatsby-image";
import arrowFFCA29 from "../assets/svg/right-arrow-#FFCA29.svg";
import arrow3A57FF from "../assets/svg/right-arrow-#3A57FF.svg";
import whiteArrow from "../assets/svg/right-arrow-white.svg";
import colorChanger from "../utils/colorChanger";
import Button from "../styles/button";
const StyledBox = styled.div`
	height: 486px;
	padding: 45px 40px;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	a {
		font-size: 24px;
		font-family: poppins-heading, "Open Sans", "Helvetica Neue", sans-serif;
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
		top: 5px;
		right: -40px;
		z-index: 15;
		margin-left: 10px;
		${(props: { arrow?: any }) =>
			props.arrow ? `background-image: url(${props.arrow});` : ``}
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	h3 {
		margin-bottom: 15px;
	}
	h2 {
		line-height: 117%;
	}
	p {
		line-height: 152%;
		font-size: 23px;
		margin-top: 25px;
	}
	@media (max-width: 1880px) {
		p {
			margin-top: 15px;
		}
	}
	@media (max-width: 1650px) {
		h2 {
			font-size: 50px;
		}
	}
	@media (max-width: 1434px) {
		h2 {
		}
		p {
			font-size: 20px;
		}
	}

	@media (max-width: 1150px) {
		h2 {
			font-size: 40px;
		}
		h3 {
			font-size: 37px;
		}
		p {
			font-size: 18px;
		}
	}
	@media (max-width: 900px) {
		text-align: center;
		h3 {
			font-size: 30px;
			margin-bottom: 9px;
		}
		h2 {
			font-size: 35px;
		}
		a {
			margin-bottom: 29px;
			font-size: 22px;
		}
	}
	@media (max-width: 550px) {
		padding-left: 20px;
		padding-right: 20px;

		h2 {
			font-size: 29px;
		}
	}
`;

const StyledImageWrapper = styled.div`
	width: 100%;
	height: 284px;
	object-fit: cover;
	div {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
const StyledIntroButton = styled(Button)`
	width: 232px;
	text-align: left;
	margin-top: auto;
	height: 55px;
	padding: 15px 35px;
	font-size: 20px;
	position: relative;
	letter-spacing: 1px;
	display: flex;
	line-height: 25px;
	align-items: center;
	font-family: poppins-heading, "Open Sans", "Helvetica Neue", sans-serif;
	&:after {
		content: "";
		position: absolute;
		width: 22px;
		height: 13px;
		top: 21px;
		right: 30px;
		z-index: 15;
		background-image: url(${whiteArrow});
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	@media (max-width: 900px) {
		margin-left: auto;
		margin-right: auto;
		margin-top: 30px;
	}
`;

const arrowPicker = (color: string) => {
	switch (color) {
		case "#FFCA29":
			return arrowFFCA29;
		case "#2D54BC":
			return arrow2D54BC;
		case "#3A57FF":
			return arrow3A57FF;
		default:
			return whiteArrow;
	}
};
interface Card {
	color: string;
	content: boolean;
	size: string;
	data: any;
}
const CourseCard: React.FC<Card> = ({ color, content, size, data }) => {
	if (!content) {
		return (
			<StyledBox style={{ width: size, backgroundColor: color }}>
				<h2>{data.heading}</h2>
				<p>{data.content}</p>
				<StyledIntroButton>{data.button}</StyledIntroButton>
			</StyledBox>
		);
	}
	return (
		<StyledBox
			style={{ width: size, backgroundColor: color }}
			arrow={arrowPicker(colorChanger(color))}
		>
			<h3>{data.heading}</h3>
			<Link
				to="/d"
				style={{
					color: colorChanger(color),
				}}
			>
				{data.button}
			</Link>
			<StyledImageWrapper>
				<Img fluid={data.image.asset.fluid} />
			</StyledImageWrapper>
		</StyledBox>
	);
};

export default CourseCard;
