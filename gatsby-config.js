const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

module.exports = {
	siteMetadata: {
		title: `Condconsult`,
		description: `Condconsult company page`,
		author: `Franek Marciniak`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-sanity`,
			options: {
				projectId: "otk1mba7",
				dataset: "production",
				token: process.env.SECRET_SANITY,
				watchMode: true,
			},
		},
		{
			resolve: "gatsby-plugin-sanity-image",
			options: {
				projectId: "otk1mba7",
				dataset: "production",
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/svg`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Condconsult landing-page`,
				short_name: `Condconsult`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/assets/svg/favicon.svg`,
			},
		},
		{
			resolve: `gatsby-plugin-styled-components`,
		},
		{
			resolve: `gatsby-plugin-typescript`,
			options: {
				isTSX: true, // defaults to false
				jsxPragma: `jsx`, // defaults to "React"
				allExtensions: true, // defaults to false
			},
		},
	],
};
