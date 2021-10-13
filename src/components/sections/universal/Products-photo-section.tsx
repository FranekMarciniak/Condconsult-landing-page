import { Link } from "gatsby";
import Img from "gatsby-image";
import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "../../ButtonCard";
import SectionStyles from "../../../styles/section";

const Section = styled(SectionStyles)`
	border-radius: 15px;
	padding: 75px 80px;
	background-color: #ebecfb;
	flex-flow: row wrap;
	@media (max-width: 1434px) {
		padding: 30px 16px;
	}
	@media (max-width: 900px) {
		border-radius: 0px;
		padding: 0;
		padding-bottom: 30px;
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
	height: fit-content;
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
	min-width: 21.5%;
	padding-right: 39px;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: relative;
	* {
		flex: 1 1 auto;
		max-height: 50%;
		margin-bottom: 30px;
	}
	@media (max-width: 1900px) {
		* {
			max-height: 50%;
		}
	}
	@media (max-width: 1750px) {
		* {
			font-size: 27px;
		}
	}
	@media (max-width: 1650px) {
		* {
			max-height: 50%;
			font-size: 25px;
		}
	}
	@media (max-width: 1500px) {
		* {
			max-height: 50%;
			font-size: 22px;
		}
	}

	button:last-child {
		margin-bottom: 0px;
	}
	@media (max-width: 1434px) {
		order: 1;
		flex-direction: row;
		margin-bottom: 56px;
		padding-right: 0px;
		order: 1;
		flex-direction: row;
		margin-bottom: 56px;
		min-width: 100%;
		* {
			margin-bottom: 0;
			margin-right: 8px;
		}
		button:last-child {
			margin-right: 0px;
		}
	}
	@media (max-width: 900px) {
		* {
			font-size: 20px;
		}
	}
	@media (max-width: 600px) {
		* {
			font-size: 18px;
			padding-left: 12px;
		}
	}
	@media (max-width: 550px) {
		overflow: scroll;
		button {
			min-width: 108px;
			font-size: 17px;
		}
	}
`;

const StyledVideoContainer = styled.div`
	width: 78.5%;
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

const PhotosSection: React.FC<{ data: any }> = ({ data }) => {
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
					<Link to="/vgis">{options[sectionState].button}</Link>
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

export default PhotosSection;
