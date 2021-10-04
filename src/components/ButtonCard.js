import React from "react";
import styled from "styled-components";
export const StyledButton = styled.button`
	width: 100%;
	min-height: 50px;
	border: none;
	border-radius: 15px;
	background-color: rgba(255, 255, 255, 1);
	opacity: ${({ active }) => (active ? "1" : "0.5")};
	font-weight: 600;
	font-size: 30px;
	@media (max-width: 1434px) {
		min-height: 77px;
	}
`;
function ButtonCard({ text, section, setSection, currentSection }) {
	return (
		<StyledButton
			// eslint-disable-next-line
			active={currentSection == section ? true : false}
			onClick={() => setSection(section)}
		>
			{text}
		</StyledButton>
	);
}

export default ButtonCard;
