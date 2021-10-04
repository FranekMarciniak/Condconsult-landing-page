import React from "react";
import styled from "styled-components";
import LogoPic from "../images/LogoWhite.png";
import { Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import {
	FaTwitterSquare,
	FaLinkedin,
	FaFacebookSquare,
	FaInstagramSquare,
} from "react-icons/fa";

const FooterWrapper = styled.footer`
	width: 75%;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	@media (max-width: 1300px) {
		flex-wrap: wrap;
	}
`;
const FooterText = styled.div`
	width: 100%;
	height: 85px;
	border-top: 1px solid rgba(130, 152, 171, 0.35);
	margin-top: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 15px;
	color: #ffffff;
	text-align: center;
	p {
		line-height: 150%;
	}
	@media (max-width: 1300px) {
		margin-top: 40px;
	}
`;
const StyledLogo = styled(Link)`
	width: 240px;
	height: fit-content;
	display: flex;
	align-items: flex-start;
	margin-right: 70px;
	padding-bottom: 5px;
	img {
		width: 240px;
		height: 50px;
	}
	div {
		width: 100%;
		height: 100%;
	}
	@media (max-width: 1660px) {
		min-width: 190px;
		margin-right: 20px;
		img {
			width: 190px;
			height: 38px;
		}
	}
	@media (max-width: 1300px) {
		min-width: 240px;
		margin-right: 0;
		img {
			width: 100%;
			height: 50px;
		}
	}
`;
const StyledFooterNav = styled.nav`
	width: 50%;
	height: 140px;
	display: flex;
	flex-direction: row;
	@media (max-width: 1300px) {
		display: none;
	}
`;
const StyledNavCell = styled.div`
	max-width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding-right: 35px;
	p,
	a:first-child {
		color: #de767b;
		font-family: poppins-heading, "Open Sans", "Helvetica Neue", sans-serif;
		font-weight: 500;
		font-size: 20px;
		line-height: 125%;
		margin-bottom: 10px;
	}
	a {
		padding-bottom: 10px;
		font-family: poppins-regular, "Open Sans", "Helvetica Neue", sans-serif;
		font-size: 18px;
		line-height: 125%;
		color: white;
	}
	@media (max-width: 1600px) {
		p,
		a:first-child {
			font-size: 16px;
		}
		a {
			font-size: 14px;
		}
	}
`;

const StyledSocialContainer = styled.div`
	width: 160px;
	height: 25px;
	display: flex;
	justify-content: space-evenly;
	svg {
		height: 25px;
		width: 25px;
	}
`;
const StyledMobileRow = styled.div`
	min-width: 100%;
	min-height: 50px;
	display: none;
	a {
		margin-left: auto;
		margin-right: auto;
		width: 240px;
	}
	div {
		margin-left: auto;
		margin-right: auto;
	}
	@media (max-width: 1300px) {
		display: block;
		margin-bottom: 30px;
	}
`;
const StyledNormalWrapper = styled.div`
	display: block;
	@media (max-width: 1300px) {
		display: none;
	}
`;

function FooterSection() {
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "LogoWhite.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<FooterWrapper>
			<StyledNormalWrapper>
				<StyledLogo to="/">
					<Img
						fluid={data.file.childImageSharp.fluid}
						alt="logo"
					></Img>
				</StyledLogo>
			</StyledNormalWrapper>
			<StyledMobileRow>
				<StyledLogo to="/">
					<Img
						fluid={data.file.childImageSharp.fluid}
						alt="logo"
					></Img>
				</StyledLogo>
			</StyledMobileRow>
			<StyledFooterNav>
				<StyledNavCell>
					<p>Products</p>
					<Link to="/d">Planerly</Link>
					<Link to="/d">vGis</Link>
					{/* <Link to="/d">BIMcollab</Link> */}
				</StyledNavCell>
				<StyledNavCell>
					<Link to="/consultation">Consultation</Link>
				</StyledNavCell>
				<StyledNavCell>
					<p>Courses</p>
					<Link to="/d">Course 1</Link>
					<Link to="/d">Course 2</Link>
					<Link to="/d">Course 3</Link>
				</StyledNavCell>
				<StyledNavCell>
					<Link to="/about">About</Link>
				</StyledNavCell>
				<StyledNavCell>
					<Link to="/contact">Contact</Link>
				</StyledNavCell>
			</StyledFooterNav>
			<StyledNormalWrapper>
				<StyledSocialContainer>
					<FaLinkedin fill="#ffffff" />
					<FaFacebookSquare fill="#ffffff" />
					<FaInstagramSquare fill="#ffffff" />
					<FaTwitterSquare fill="#ffffff" />
				</StyledSocialContainer>
			</StyledNormalWrapper>
			<StyledMobileRow>
				<StyledSocialContainer>
					<FaLinkedin fill="#ffffff" />
					<FaFacebookSquare fill="#ffffff" />
					<FaInstagramSquare fill="#ffffff" />
					<FaTwitterSquare fill="#ffffff" />
				</StyledSocialContainer>
			</StyledMobileRow>
			<FooterText>
				<p>© Copyright 2021 CONDCONSULT AS. All rights reserved.</p>
			</FooterText>
		</FooterWrapper>
	);
}

export default FooterSection;
