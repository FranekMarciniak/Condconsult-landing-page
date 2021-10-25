import { Link } from "gatsby";
import React, { FC, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import goBack from "../assets/svg/go-back-arrow.svg";
import "../styles/animations.css";
import Button from "../styles/button";
const Ul = styled.div<{ open: boolean; activeMenu: string }>`
	list-style: none;
	display: block;
	position: fixed;
	${({ open }) =>
		open ? "transform: translateX(0);" : "transform:translateX(100%);"}
	top: 0;
	overflow: hidden;
	color: var(--font-primary);
	right: 0;
	width: 30vw;
	height: 100vh;
	background-color: white;
	transition: transform 0.2s ease-in-out;
	z-index: 3;
	@media (max-width: 650px) {
		width: 50vw;
	}
	@media (max-width: 470px) {
		width: 80vw;
	}
	@media (max-width: 305px) {
		width: 100vw;
	}
	@media (min-width: 1101px) {
		display: none;
	}
`;

const StyledListElement = styled.div`
	line-height: 22px;
	font-size: 18px;
	width: 100%;
	display: inline-block;
	position: relative;
	top: 0px;
	padding-top: 15px;
	padding-bottom: 15px;
	padding-left: 25px;
	text-align: left;
	border-bottom: 1px solid rgba(0, 62, 126, 0.1);
	z-index: 4;
	a {
		cursor: pointer;
	}
`;

const StyledListHeading = styled(StyledListElement)`
	font-family: poppins-heading, "Open Sans", "Helvetica Neue", sans-serif;
	background-color: var(--font-primary);
	padding-left: 0px;
	padding-top: 15px;
	color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;
const StyledRightSpanIcon = styled.span`
	position: absolute;
	top: 15px;
	right: 40px;
`;
const StyledLeftSpanIcon = styled.span`
	svg {
		fill: white;
	}
	position: absolute;
	width: 10px;
	height: 17px;
	left: 17px;
	top: 16;
	background-image: url(${goBack});
	background-position: center;
	background-size: cover;
`;
interface Props {
	goToMenu?: string;
	goRight?: boolean;
	goLeft?: boolean;
	last?: boolean;
	first?: boolean;
	to?: string;
	children?: any;
}
const RightNav: FC<{ open: boolean }> = ({ open }) => {
	const SidebarItem = (props: Props) => {
		return (
			<StyledListElement
				onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
				// 	(props.goToMenu ? { cursor: "pointer" } : {}) +
				// 	(props.last ? { borderBottom: "none" } : {})
				// }
			>
				{props.goLeft && (
					<StyledRightSpanIcon>
						<svg
							width="12"
							height="20"
							viewBox="0 0 12 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.6207 9.2846L10.6207 9.28461C10.9874 9.65128 10.9873 10.2457 10.6208 10.6124L10.6207 10.6124L2.35275 18.8804L2.35274 18.8804C1.98607 19.247 1.39168 19.247 1.02499 18.8804L1.02495 18.8803C0.658349 18.5137 0.658348 17.9192 1.02495 17.5526L1.02497 17.5526L8.62905 9.94849L1.02497 2.34441L1.02191 2.34135L1.02193 2.34132C0.670452 1.97746 0.670469 1.40057 1.02192 1.03668L10.6207 9.2846ZM10.6207 9.2846L2.35275 1.01662L2.35278 1.0166M10.6207 9.2846L2.35278 1.0166M2.35278 1.0166L2.34965 1.01357M2.35278 1.0166L2.34965 1.01357M2.34965 1.01357C1.97662 0.653311 1.38219 0.663652 1.02192 1.03668L2.34965 1.01357Z"
								fill="#030235"
								stroke="white"
								stroke-width="0.5"
							/>
						</svg>
					</StyledRightSpanIcon>
				)}
				<Link to={props.to || ""}>{props.children}</Link>
				{props.goRight && (
					<StyledRightSpanIcon>
						<svg
							width="12"
							height="20"
							viewBox="0 0 12 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.6207 9.2846L10.6207 9.28461C10.9874 9.65128 10.9873 10.2457 10.6208 10.6124L10.6207 10.6124L2.35275 18.8804L2.35274 18.8804C1.98607 19.247 1.39168 19.247 1.02499 18.8804L1.02495 18.8803C0.658349 18.5137 0.658348 17.9192 1.02495 17.5526L1.02497 17.5526L8.62905 9.94849L1.02497 2.34441L1.02191 2.34135L1.02193 2.34132C0.670452 1.97746 0.670469 1.40057 1.02192 1.03668L10.6207 9.2846ZM10.6207 9.2846L2.35275 1.01662L2.35278 1.0166M10.6207 9.2846L2.35278 1.0166M2.35278 1.0166L2.34965 1.01357M2.35278 1.0166L2.34965 1.01357M2.34965 1.01357C1.97662 0.653311 1.38219 0.663652 1.02192 1.03668L2.34965 1.01357Z"
								fill="#030235"
								stroke="white"
								stroke-width="0.5"
							/>
						</svg>
					</StyledRightSpanIcon>
				)}
			</StyledListElement>
		);
	};
	const [activeMenu, setActiveMenu] = useState("main");
	useEffect(() => {
		const body = document.querySelector<HTMLElement>("body");
		if (body) {
			open ? body.classList.add("open") : body.classList.remove("open");
		}
	}, [open]);
	return (
		<>
			<div className="styled-back"></div>
			<Ul open={open} activeMenu={activeMenu}>
				<CSSTransition
					in={activeMenu === "main"}
					unmountOnExit
					timeout={500}
					classNames="menu-primary"
				>
					<div className="menu" style={{ paddingTop: "10px" }}>
						<SidebarItem goToMenu="products" goRight={true}>
							Products
						</SidebarItem>
						<SidebarItem to="/consultation">
							Consultation
						</SidebarItem>
						<SidebarItem to="/about">About</SidebarItem>
						<SidebarItem last={true}>
							<Button
								style={{
									height: "37px",
									width: "121px",
								}}
							>
								Contact
							</Button>
						</SidebarItem>
					</div>
				</CSSTransition>
				<CSSTransition
					in={activeMenu === "products"}
					unmountOnExit
					timeout={500}
					classNames="menu-products"
				>
					<div className="menu">
						<StyledListHeading
							onClick={() => setActiveMenu("main")}
						>
							<StyledLeftSpanIcon />
							Products
						</StyledListHeading>

						<SidebarItem to="/vgis">vGIS</SidebarItem>
						<SidebarItem to="/bimcollab">BIMCollab</SidebarItem>
					</div>
				</CSSTransition>
			</Ul>
		</>
	);
};

export default RightNav;
