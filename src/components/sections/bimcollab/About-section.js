import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
const StyledSection = styled.section`
	width: 75%;
	display: flex;
	margin-left: auto;
	margin-right: auto;
	margin-top: 113px;

	@media (max-width: 900px) {
		margin-top: 50px;
		width: 91.2%;
		flex-flow: wrap column-reverse;
		margin-left: auto;
		margin-right: auto;
	}
`;
const StyledPhotoWrapper = styled.div`
	width: 50%;
	padding-right: 7%;
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center;
		max-width: 1000px;
		max-height: 500px;
	}
	div {
		height: 100%;
	}
	@media (max-width: 1200px) {
		img {
			max-height: 400px;
			object-fit: contain;
		}
	}

	@media (max-width: 900px) {
		width: 100%;
		padding-right: 0;
		margin-top: 30px;
	}
`;
const StyledTextWrapper = styled.div`
	width: 50%;
	margin: auto 0;
	p {
		letter-spacing: 0.4px;
		line-height: 174%;
		margin-top: 29px;
		font-size: 23px;
	}
	h2 {
		margin-bottom: 25px;
	}
	h3 {
		max-width: 424px;
	}
	@media (min-width: 2100px) {
		h3 {
			max-width: 804px;
		}
	}
	@media (max-width: 1650px) {
		h2 {
			font-size: 50px;
		}
		h3 {
			font-size: 25px;
		}
	}

	@media (max-width: 1150px) {
		h2 {
			font-size: 40px;
		}
	}
	@media (max-width: 900px) {
		* {
			text-align: center;
		}
		h3 {
			margin: 0 auto;
		}

		p {
			font-size: 19px;
		}
	}
	@media (max-width: 900px) {
		width: 100%;
		* {
			text-align: center;
		}
		p {
			font-size: 20px;
		}
	}
	@media (max-width: 600px) {
		p {
			font-size: 19px;
		}
	}
`;
function AboutSection({ data }) {
	return (
		<StyledSection>
			<StyledPhotoWrapper>
				<Img
					fluid={data.image.asset.fluid}
					alt="vgis visualization"
				></Img>
			</StyledPhotoWrapper>
			<StyledTextWrapper>
				<h2>{data.heading}</h2>
				<h3>{data.subHeading}</h3>
				<p>{data.content}</p>
			</StyledTextWrapper>
		</StyledSection>
	);
}

export default AboutSection;
