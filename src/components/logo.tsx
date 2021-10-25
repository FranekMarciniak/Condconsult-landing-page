import React from "react";
import styled from "styled-components";
import { graphql, Link, useStaticQuery } from "gatsby";
import { FC } from "react";
import Img from "gatsby-image";
const StyledLogo = styled(Link)`
	max-width: 240px;
	height: 100%;
	display: flex;
	align-items: center;
	margin-right: 70px;
	padding-bottom: 5px;
	img {
		width: 240px;
		height: 50px;
	}
	div {
		width: 240px;
	}
	@media (max-width: 1660px) {
		min-width: 190px;
		margin-right: 20px;
		img {
			width: 190px;
			height: 38px;
		}
		div {
			width: 190px;
		}
	}
`;

const Logo: FC<{ theme: string }> = ({ theme }) => {
	const data = useStaticQuery(graphql`
		query {
			allFile(filter: { relativePath: { glob: "Logo*.png" } }) {
				edges {
					node {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	`);
	return (
		<StyledLogo to="/">
			<Img
				fluid={
					theme !== "#030235"
						? data.allFile.edges[0].node.childImageSharp.fluid
						: data.allFile.edges[1].node.childImageSharp.fluid
				}
				alt="logo"
			></Img>
		</StyledLogo>
	);
};

export default Logo;
