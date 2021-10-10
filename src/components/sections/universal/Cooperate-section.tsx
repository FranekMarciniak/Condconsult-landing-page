import Img from "gatsby-image";
import * as React from "react";
import styled from "styled-components";
const StyledContainer = styled.section`
	width: 75%;
	display: flex;
	margin-left: auto;
	margin-right: auto;
	align-items: center;
	flex-direction: column;
	margin-top: 100px;
	h2 {
		text-align: center;
		max-width: 677px;
		line-height: 123%;
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
		margin-top: 60px;
		h2 {
			width: 86%;
			font-size: 35px;
		}
	}
	@media (max-width: 550px) {
		h2 {
			max-width: 65%;
			font-size: 29px;
		}
	}
`;

const StyledLogosContainer = styled.div`
	width: 63%;
	margin-top: 40px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	@media (max-width: 900px) {
		margin-top: 30px;
		width: 100%;
	}
`;
const SingleLogoContainer = styled.div`
	max-width: 400px;
	max-height: 200px;
	min-width: 150px;
	min-height: fit-content;
	margin: 15px 15px;
	* {
		margin-top: auto;
		margin-top: auto;
	}
	@media (max-width: 600px) {
		min-width: 100px;
		margin: 35px 5px;
	}
	@media (max-width: 350px) {
		min-width: 80px;
		margin: 35px 5px;
	}
`;
const CooperateSection: React.FC<{ data: any }> = ({ data }) => {
	return (
		<StyledContainer>
			<h2>We cooperate with important companies</h2>
			<StyledLogosContainer>
				{data.images.map((ele: any, i: number) => (
					<SingleLogoContainer key={i}>
						<Img fluid={ele.asset.fluid} />
					</SingleLogoContainer>
				))}
			</StyledLogosContainer>
		</StyledContainer>
	);
};

export default CooperateSection;
