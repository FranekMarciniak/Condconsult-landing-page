import React from "react";
import styled from "styled-components";
import Graphic from "../images/graphic.svg";
import Button from "../styles/button";
const StyledFormSection = styled.section`
	width: 100%;
	display: flex;
	margin-bottom: 60px;
`;
const StyledGraphicContainer = styled.div`
	width: 40%;
	height: 660px;
	background-image: url(${Graphic});
	background-repeat: no-repeat;
	background-position: right;
	background-size: cover;
	@media (max-width: 1400px) {
		width: 20%;
	}
	@media (max-width: 900px) {
		display: none;
	}
`;
const StyledFormContainer = styled.div`
	width: 47%;
	height: 100%;
	color: white;
	text-align: center;
	display: flex;
	justify-content: center;
	legend {
		line-height: 100%;
		font-family: poppins-heading, "Open Sans", "Helvetica Neue", sans-serif;
		font-size: 60px;
		padding: 0;
	}
	p {
		margin-top: 30px;
		margin-bottom: 20px;
		font-size: 20px;
		line-height: 125%;
	}
	fieldset {
		width: 44.64%;
		margin-top: 90px;
	}
	@media (max-width: 1400px) {
		width: 80%;
	}
	@media (max-width: 900px) {
		width: 100%;
		input:nth-child(1) {
			width: 100%;
		}
		input:nth-child(2) {
			display: none;
		}
		fieldset {
			width: 70%;
		}
	}
	@media (max-width: 600px) {
		fieldset {
			width: 91.2%;
		}
	}
`;
export const StyledInput = styled.input`
	background-color: transparent;
	font-family: Montserrat, "Open Sans", "Helvetica Neue", sans-serif;
	border: none;
	border-bottom: 1px rgba(255, 255, 255, 0.8) solid;
	height: 60px;
	font-size: 15px;
	color: white;
	padding: 0;
	text-align: start;
	&:focus {
		outline: none;
	}
`;
const StyledTextarea = styled.textarea`
	background-color: transparent;
	font-family: Montserrat, "Open Sans", "Helvetica Neue", sans-serif;
	border: none;
	border-bottom: 1px rgba(255, 255, 255, 0.8) solid;
	height: 100px;
	font-size: 15px;
	color: white;
	padding: 0;
	width: 100%;
	text-align: start;
	margin-top: 50px;
	resize: none;
	&:focus {
		outline: none;
	}
`;
const SmallInput = styled(StyledInput)`
	width: 49%;
`;
const BigInput = styled(StyledInput)`
	width: 100%;
	margin-top: 25px;
`;
const StyledFormColumn = styled.div`
	width: 100%;
	height: fit-content;
	button {
		width: 100%;
		height: 55px;
		margin-top: 40px;
		font-weight: 600;
		font-size: 20px;
		line-height: 125%;
	}
`;
const StyledFormColumnMobile = styled(StyledFormColumn)`
	display: none;
	@media (max-width: 900px) {
		display: block;
	}
`;
const FormSection: React.FC = () => {
	return (
		<StyledFormSection>
			<StyledGraphicContainer></StyledGraphicContainer>
			<StyledFormContainer>
				<fieldset>
					<legend align="center">Contact Us</legend>
					<p>We want to hear from you</p>
					<StyledFormColumn>
						<SmallInput
							placeholder="Name"
							style={{ marginRight: "1%" }}
						/>
						<SmallInput
							placeholder="Phone Number"
							style={{ marginLeft: "1%" }}
						/>
					</StyledFormColumn>
					<StyledFormColumnMobile>
						<BigInput
							placeholder="Phone Number"
							style={{ marginRight: "10px" }}
						/>
					</StyledFormColumnMobile>
					<StyledFormColumn>
						<BigInput
							placeholder="Email"
							style={{ marginRight: "10px" }}
						/>
					</StyledFormColumn>
					<StyledFormColumn>
						<StyledTextarea placeholder="Your message" />
					</StyledFormColumn>
					<StyledFormColumn>
						<Button>Submit</Button>
					</StyledFormColumn>
				</fieldset>
			</StyledFormContainer>
		</StyledFormSection>
	);
};

export default FormSection;
