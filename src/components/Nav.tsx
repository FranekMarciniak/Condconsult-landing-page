import React from "react";
import { FC } from "react";
import styled from "styled-components";
import Button from "../styles/button";
import Hamburger from "./Burger";
import arrowDark from "../assets/svg/small-arrow-dark.svg";
import arrowWhite from "../assets/svg/small-arrow-white.svg";
import { Link } from "gatsby";
const StyledNav = styled.nav`
	width: 83.5%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	box-sizing: border-box;
	top: 0;
`;

const StyledUl = styled.ul`
	display: flex;
	list-style: none;
	margin: 0;
	@media (max-width: 1101px) {
		display: none;
	}
	li {
		margin: 0 22px;
		font-size: 20px;
		font-weight: normal;
		letter-spacing: 0.01px;
		display: flex;
		align-items: center;
		position: relative;
		text-align: right;
		display: flex;
		justify-content: center;
		background-color: transparent;
		a {
			color: ${(props) =>
				props.color !== "#030235" ? "var(--font-primary)" : "#fff"};
		}
		@media (max-width: 1660px) {
			font-size: 17px;
		}
	}
`;
const StyledCSWrapper = styled.div`
	display: flex;
	position: relative;
	top: 0;
	@media (max-width: 1101px) {
		display: none;
	}
	button {
		margin: 0 15px;
	}
`;

const StyledDropdownContent = styled.div`
	display: none;
	position: absolute;
	top: 35px;
	left: -5px;
	width: 110%;
	flex-direction: column;
	box-sizing: content-box;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	background-color: white;
	padding: 10px;
	&:hover {
		display: flex;
	}
	* {
		font-size: 17px;
		background-color: white;
		color: #000 !important;
		padding: 5px 7px;
	}
	*:hover {
		background-color: #ebebeb;
	}
`;
const StyledLiButton = styled.button`
	background-color: transparent !important;
	display: inline;
	border: none;
	background-color: white;
	font-size: 20px;
	font-weight: normal;
	letter-spacing: 0.01px;
	display: inline;
	position: relative;
	text-align: left;
	outline: none;
	padding: 0 10px;
	color: ${(props) =>
		props.color !== "#030235" ? "var(--font-primary)" : "#fff"};
	font-family: poppins-regular, "Open Sans", "Helvetica Neue", sans-serif;
	&:focus {
		padding: 0 10px;
	}
	&:before {
		content: "";
		width: 100%;
		height: 20px;
		position: absolute;
		left: 0;
		top: 15px;
	}
	&:after {
		content: "";
		${(props) =>
			props.color !== "#030235"
				? `background-image: url(${arrowDark});`
				: `background-image:  url(${arrowWhite});`}
		background-repeat: no-repeat;
		width: 10px;
		height: 30px;
		position: absolute;
		right: -10px;
		top: 13px;
	}
	&:after:hover ${StyledDropdownContent} {
		display: flex;
	}
	&:before:hover ${StyledDropdownContent} {
		display: flex;
	}
	&:hover ${StyledDropdownContent} {
		display: flex;
	}
	@media (max-width: 1660px) {
		font-size: 17px;
		&:after {
			top: 10px;
		}
	}
`;
const Nav: FC<{ theme: string }> = ({ theme }) => {
	return (
		<>
			<StyledNav>
				<StyledUl color={theme}>
					<li>
						<StyledLiButton color={theme}>
							Products
							<StyledDropdownContent>
								{/* <Link to="/plannerly">Plannerly</Link> */}
								<Link to="/vgis">vGIS</Link>
								<Link to="/bimcollab">BIMCollab</Link>
							</StyledDropdownContent>
						</StyledLiButton>
					</li>
					<li>
						<StyledLiButton color={theme}>
							Courses
							<StyledDropdownContent>
								<Link to="/course-1">Course 1</Link>
								<Link to="course-2">Course 2</Link>
								<Link to="course-3">Course 3</Link>
							</StyledDropdownContent>
						</StyledLiButton>
					</li>
					<li>
						<Link to="/consultation">Consultation</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</StyledUl>
				<StyledCSWrapper>
					<Button style={{ marginBottom: "5px" }}>Contact</Button>
				</StyledCSWrapper>
				<Hamburger color={theme} />
			</StyledNav>
		</>
	);
};

export default Nav;
