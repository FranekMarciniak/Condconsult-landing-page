import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../components/sections/vgis/Intro-section";
import Logos from "../components/sections/universal/Cooperate-section";
import About from "../components/sections/vgis/About-section";
import Information from "../components/sections/vgis/Information-section";
import Products from "../components/sections/vgis/Products-photo-section";
import Video from "../components/sections/vgis/Video-section";
import Reviews from "../components/sections/universal/Reviews-section";
import Pricing from "../components/sections/vgis/Pricing-section";
import OtherProducts from "../components/sections/vgis/OtherProducts-section";
const vgisPage = ({ data }) => {
	const cooperate = data.allSanityCooperation.nodes[0];
	const showcase = data.allSanityVgisShowcase;
	const reviews = data.allSanityReviews;
	const intro = data.allSanityIntro.edges[0].node;
	const about = data.allSanityAbout.nodes[0];
	console.log(data.allSanityIntro.edges[0].node);
	return (
		<Layout>
			<SEO title="Condconsult" />
			<Intro data={intro} />
			<Logos data={cooperate} />
			<About data={about} />
			<Information color="#ffca29" />
			<Products data={showcase} />
			<Information color="#4666F6" />
			<Video />
			<Reviews data={reviews} />
			<Pricing />
			<OtherProducts />
		</Layout>
	);
};

export default vgisPage;

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
		allSanityVgisShowcase {
			nodes {
				heading
				content
				button
				order
				product
				secondContent
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
		allSanityAbout(filter: { page: { eq: "vgis" } }) {
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
