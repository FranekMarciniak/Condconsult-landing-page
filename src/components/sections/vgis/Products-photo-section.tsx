import { Link } from "gatsby";
import Img from "gatsby-image";
import React, { useState } from "react";
import styled from "styled-components";
import arrow from "../../../assets/svg/right-arrow-blue.svg";
import SectionStyles from "../../../styles/section";
import Button from "../../ButtonCard";

const Section = styled(SectionStyles)`
	width: 75%;
	margin-top: 130px;
	margin-left: auto;
	margin-right: auto;
	border-radius: 15px;
	padding: 75px 80px;
	background-color: var(--gray);
	display: flex;
	flex-flow: row wrap;
	@media (max-width: 1434px) {
		padding: 30px 16px;
	}
	@media (max-width: 900px) {
		margin-top: 40px;
		border-radius: 0px;
		padding: 0;
		padding-bottom: 30px;
		width: 91.2%;
	}
`;
const StyledSectionWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	@media (max-width: 900px) {
		width: 91.2%;
		padding-top: 30px;
		margin-left: auto;
		margin-right: auto;
	}
`;
const StyledTextContainer = styled.div`
	width: 100%;
	padding-left: 32px;
	height: max-content;
	margin-bottom: 50px;
	h3 {
		max-width: 50%;
		line-height: 131%;
		margin-bottom: 25px;
		font-style: normal;
	}
	p {
		width: 68%;
		line-height: 152%;
		font-size: 26px;
		letter-spacing: 0.4px;
		margin-bottom: 25px;
	}
	a {
		font-size: 24px;
		font-family: poppins-heading, "Open Sans", "Helvetica Neue", sans-serif;
		color: var(--link);
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
	@media (max-width: 1434px) {
		padding-left: 0px;
		text-align: center;
		h3 {
			text-align: center;
			min-width: 79%;
			line-height: 148%;
			margin-bottom: 15px;
			font-style: normal;
			margin-left: auto;
			margin-right: auto;
		}
		p {
			width: 100%;
			line-height: 156%;
			margin-bottom: 25px;
			text-align: center;
			font-size: 23px;
		}
		a {
			margin-left: calc(-32px);
		}
	}
	@media (max-width: 1434px) {
		order: 2;
	}
	@media (max-width: 900px) {
		text-align: center;
		h3 {
			font-size: 25px;
		}
		p {
			font-size: 18px;
		}
		a {
			font-size: 19px;
		}
	}
`;
const StyledButtonsContainer = styled.div`
	max-width: 18.5%;
	min-width: 23.5%;
	padding-right: 39px;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	position: relative;
	button:last-child {
		margin-bottom: 0px;
	}
	* {
		flex: 1 1 auto;
		max-height: 22%;
		font-size: 25px;
	}

	@media (max-width: 1770px) {
		* {
			font-size: 21px;
		}
	}

	@media (max-width: 1434px) {
		order: 1;
		flex-direction: row;
		padding-right: 0px;
		margin-bottom: 56px;
		min-width: 100%;
		* {
			margin-bottom: 0;
			margin-right: 8px;
			min-height: 100%;
		}
		button:last-child {
			margin-right: 0px;
		}
	}

	@media (max-width: 900px) {
		flex-direction: column;
		* {
			margin-bottom: 10px;
			min-height: 50px;
			max-height: 150px;
		}
	}
`;

const StyledVideoContainer = styled.div`
	width: 76.5%;
	flex-grow: 1;
	height: 0;
	padding-bottom: 42%;
	position: relative;
	img {
		border-radius: 5px;
		height: 100%;
	}
	@media (max-width: 1434px) {
		order: 3;
		padding-bottom: 56%;
	}
`;
const StyledImageWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	* {
		max-height: 100%;
	}
`;

const VideoSection = ({ data }: any) => {
	const options = data.nodes.sort(
		(a: { order: number }, b: { order: number }) => a.order - b.order
	);
	options.forEach(
		(ele: any, index: number) => (options[index].order = index)
	);
	const [sectionState, setSectionState] = useState(0);
	return (
		<Section>
			<StyledSectionWrapper>
				<StyledTextContainer>
					<h3>{options[sectionState].heading}</h3>
					<p>{options[sectionState].content}</p>
					<p>{options[sectionState].secondContent}</p>
					<Link to={options[sectionState].link}>
						{options[sectionState].button}
					</Link>
				</StyledTextContainer>
				<StyledButtonsContainer>
					{options.map(
						(
							ele: { product: string; order: number },
							i: number
						) => (
							<Button
								text={ele.product}
								section={ele.order}
								currentSection={sectionState}
								setSection={setSectionState}
								key={i}
							/>
						)
					)}
				</StyledButtonsContainer>
				<StyledVideoContainer key={options[sectionState].video}>
					<StyledImageWrapper>
						<Img
							fluid={data.nodes[sectionState].image.asset.fluid}
						/>
					</StyledImageWrapper>
				</StyledVideoContainer>
			</StyledSectionWrapper>
		</Section>
	);
};

export default VideoSection;
