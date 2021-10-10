import React from "react";
import styled from "styled-components";
export const StyledButton = styled.button<{ active: boolean }>`
	width: 100%;
	min-height: 50px;
	border: none;
	border-radius: 15px;
	background-color: rgba(255, 255, 255, 1);
	${({ active }) => (active ? `opacity: 1;` : "opacity: 0.5;")};
	font-weight: 600;
	font-size: 30px;
	@media (max-width: 1434px) {
		min-height: 77px;
	}
`;
interface Card {
	text: string;
	section: number;
	currentSection: number;
	setSection: (section: number) => void;
}
const ButtonCard: React.FC<Card> = ({
	text,
	section,
	setSection,
	currentSection,
}) => {
	return (
		<StyledButton
			active={currentSection == section ? true : false}
			onClick={() => setSection(section)}
		>
			{text}
		</StyledButton>
	);
};

export default ButtonCard;
