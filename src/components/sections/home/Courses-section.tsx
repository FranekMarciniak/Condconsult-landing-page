import React from "react";
import styled from "styled-components";
import CourseCard from "../../CourseCard";
import Button from "../../../styles/button";
import { Link } from "gatsby";
import arrow from "../../../assets/svg/right-arrow-white.svg";
import SectionStyles from "../../../styles/section";
const Section = styled(SectionStyles)`
	width: 75%;
	margin-top: 130px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-flow: wrap row;
	align-items: flex-start;
	align-content: flex-start;
	justify-content: space-between;
	div {
		flex-direction: column;
	}

	div:nth-child(odd) {
		h3 {
			color: #ffffff;
		}
	}

	@media (max-width: 900px) {
		width: 91.2%;
		margin-top: 30px;
		margin-left: auto;
		margin-right: auto;
		flex-direction: column;
		margin-top: 60px;
		div {
			width: 100% !important;
			border-radius: 5px;
			margin-top: 15px;
		}
	}
`;
const StyledTextWrapper = styled.div`
	width: 100%;
	margin-bottom: 30px;

	h2 {
		margin-bottom: 30px;
		line-height: 117%;
		max-width: 641px;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
	}
	p {
		margin-bottom: 40px;
		line-height: 156%;
		font-size: 25px;
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
	}
	@media (max-width: 1150px) {
		h2 {
			font-size: 40px;
		}
		p {
			font-size: 18px;
		}
	}
`;

const StyledCoursesButton = styled(Button)`
	width: 270px;
	text-align: center;
	justify-content: center;
	height: 55px;
	padding: 15px 24px;
	font-size: 20px;
	position: relative;
	letter-spacing: 1px;
	display: flex;
	line-height: 25px;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	font-family: poppins-heading, "Open Sans", "Helvetica Neue", sans-serif;
	&:after {
		content: "";
		position: absolute;
		width: 22px;
		height: 13px;
		top: 22px;
		right: 40px;
		z-index: 15;
		background-image: url(${arrow});
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	@media (max-width: 900px) {
		margin-left: auto;
		margin-right: auto;
	}
`;
interface nodeInterface {
	heading: string;
	content: string;
	button: string;
}
const CoursesSection: React.FC<{
	data: any;
	text: { nodes: nodeInterface[] };
}> = ({ data, text }) => {
	const courses = data.nodes.sort(
		(a: { order: number }, b: { order: number }) => a.order - b.order
	);
	courses.forEach(
		(ele: any, index: number) => (courses[index].order = index)
	);
	return (
		<Section>
			<StyledTextWrapper>
				<h2>{text.nodes[0].heading}</h2>
				<p>{text.nodes[0].content}</p>
				<StyledCoursesButton as={Link} to={data.link}>
					{text.nodes[0].button}
				</StyledCoursesButton>
			</StyledTextWrapper>
			<CourseCard
				size="48%"
				color="#4666F6"
				content={true}
				data={courses[0]}
			/>
			<CourseCard
				size="49.5%"
				color="#FFCA29"
				content={true}
				data={courses[1]}
			/>
		</Section>
	);
};

export default CoursesSection;
