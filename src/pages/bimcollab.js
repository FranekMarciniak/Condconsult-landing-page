import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../components/sections/bimcollab/Intro-section";
import Logos from "../components/sections/universal/Cooperate-section";
import About from "../components/sections/bimcollab/About-section";
import Products from "../components/sections/bimcollab/Products-video-section";
import Pricing from "../components/sections/bimcollab/Pricing-section";
import Reviews from "../components/sections/universal/Reviews-section";
import OtherProducts from "../components/sections/bimcollab/OtherProducts-section";

const bimCollabPage = ({ data }) => {
	const cooperate = data.allSanityCooperation.nodes[0];
	const about = data.allSanityAbout.nodes[0];
	const reviews = data.allSanityReviews;
	const showcase = data.allSanityBimShowcase;

	return (
		<Layout>
			<SEO title="Condconsult" />
			<Intro />
			<Logos data={cooperate} />
			<About data={about} />
			<Products data={showcase} />
			<Pricing
				data={{
					button: "Link",
					content:
						"BIMcollab offers a wide range of prices to cover all your need. Click on the link bellow and see wich if them iis right for you.",
					heading: "Choose a plan that`s right for you",
					link: "/d",
				}}
			/>
			<Reviews data={reviews} />
			<OtherProducts />
		</Layout>
	);
};

export default bimCollabPage;

export const query = graphql`
	query {
		allSanityIntro(filter: { page: { eq: "vgis" } }) {
			edges {
				node {
					heading
					content
					button
					link
					image {
						asset {
							fluid(maxWidth: 1400) {
								...GatsbySanityImageFluid
							}
						}
					}
				}
			}
		}
		allSanityBimShowcase {
			nodes {
				order
				link
				product
				secondContent
				video
				heading
				content
				button
				imagesText
				images {
					asset {
						fluid(maxWidth: 100) {
							...GatsbySanityImageFluid
						}
					}
				}
			}
		}

		allSanityCooperation(filter: { page: { eq: "vgis" } }) {
			nodes {
				page
				heading
				images {
					asset {
						fluid(maxWidth: 100) {
							...GatsbySanityImageFluid
						}
					}
				}
			}
		}
		allSanityAbout(filter: { page: { eq: "bimcollab" } }) {
			nodes {
				button
				content
				heading
				subHeading
				link
				image {
					asset {
						fluid(maxWidth: 1400) {
							...GatsbySanityImageFluid
						}
					}
				}
			}
		}

		allSanityReviews {
			nodes {
				image {
					asset {
						fluid(maxWidth: 150) {
							...GatsbySanityImageFluid
						}
					}
				}
				content
				name
				logo {
					asset {
						fluid(maxWidth: 160) {
							...GatsbySanityImageFluid
						}
					}
				}
				order
				position
				workplace
			}
		}
	}
`;
