import React from "react";
import styled from "styled-components";
const StyledSection = styled.section`
	width: 75%;
	display: flex;
	justify-content: space-evenly;
	flex-flow: wrap row;
	align-items: flex-start;
	margin: 130px auto 0 auto;
	div {
		color: #fff;
		margin-bottom: 40px;
		h4 {
			line-height: 173%;
			text-align: center;
			font-size: 35px;
			color: var(--font-primary);
		}
	}
	div p:nth-child(2) {
		font-family: poppins-heading, "Open Sans", "Helvetica Neue", sans-serif;
		font-size: 42px;
		font-style: normal;
		font-weight: 700;
		line-height: 144%;
		letter-spacing: 0px;
		text-align: center;
		color: ${(props) => props.color};
	}
	div p:nth-child(3) {
		font-family: Montserrat, "Open Sans", "Helvetica Neue", sans-serif;
		font-size: 22px;
		font-style: normal;
		font-weight: 400;
		line-height: 119%;
		letter-spacing: 0px;
		text-align: center;
		color: var(--font-primary);
		max-width: 80%;
		margin-left: auto;
		margin-right: auto;
	}
	@media (max-width: 900px) {
		width: 91.2%;
		margin: 40px auto 0 auto;
		div {
			max-width: 47%;
			h4 {
				line-height: 100%;
				font-size: 20px;
				color: var(--font-primary);
				margin-bottom: 15px;
			}
		}
		div p:nth-child(2) {
			font-size: 42px;
			line-height: 93%;
			letter-spacing: 0px;
			font-size: 23px;
			margin-bottom: 15px;
		}
		div p:nth-child(3) {
			font-size: 16px;
			letter-spacing: 0px;
			line-height: 100%;
			text-align: center;
			max-width: 60%;
		}
	}
	@media (max-width: 450px) {
		div {
			h4 {
				height: 40px;
			}
		}
	}
`;

function InformationSection({ color }) {
	return (
		<StyledSection color={color}>
			<div>
				<h4>ROI</h4>
				<p>10:1 - 15:1</p>
				<p>for active users</p>
			</div>
			<div>
				<h4>ASSET LOCATES</h4>
				<p>30 - 50%</p>
				<p>for active users</p>
			</div>
			<div>
				<h4>TIME SAVINGS</h4>
				<p>12-20 hours</p>
				<p>per month for active users</p>
			</div>
			<div>
				<h4>CLASH REVIEWS</h4>
				<p>30 - 50%</p>
				<p>less time required for clash reviews</p>
			</div>
		</StyledSection>
	);
}

export default InformationSection;
