import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import About from "../components/sections/home/About-section";
import Consult from "../components/sections/home/Consultant-section";
import Courses from "../components/sections/home/Courses-section";
import Intro from "../components/sections/home/Intro-section";
import Showcase from "../components/sections/home/Products-photo-section";
import Cooperate from "../components/sections/universal/Cooperate-section";
import Reviews from "../components/sections/universal/Reviews-section";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
	const intro = data.allSanityIntro.edges[0].node;
	const showcase = data.allSanityHomeShowcase;
	const cooperate = data.allSanityCooperation.nodes[0];
	const about = data.allSanityAbout.nodes[0];
	const consult = data.allSanityConsulting.nodes[0];
	const coursesTextContent = data.allSanityCoursesHeading;
	const coursesCards = data.allSanityCoursesCards;
	const reviews = data.allSanityReviews;
	return (
		<Layout>
			<SEO title="Condconsult" />
			<Intro data={intro} />
			<Showcase data={showcase} />
			<Cooperate data={cooperate} />
			<About data={about} />
			<Consult data={consult} />
			<Courses text={coursesTextContent} data={coursesCards} />
			<Reviews data={reviews} />
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
	query {
		allSanityIntro(filter: { page: { eq: "home" } }) {
			edges {
				node {
					heading
					content
					button
				}
			}
		}

		allSanityHomeShowcase {
			nodes {
				product
				link
				heading
				content
				button
				order
				image {
					asset {
						fluid(maxWidth: 1400) {
							...GatsbySanityImageFluid
						}
					}
				}
			}
		}
		allSanityCooperation(filter: { page: { eq: "home" } }) {
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
		allSanityAbout(filter: { page: { eq: "home" } }) {
			nodes {
				button
				content
				heading
				link
			}
		}
		allSanityConsulting {
			nodes {
				button
				content
				heading
				link
			}
		}
		allSanityCoursesHeading {
			nodes {
				heading
				content
				button
				link
			}
		}
		allSanityCoursesCards {
			nodes {
				image {
					asset {
						fluid(maxWidth: 1400) {
							...GatsbySanityImageFluid
						}
					}
				}
				link
				order
				heading
				button
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
