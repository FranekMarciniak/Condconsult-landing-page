import styled from "styled-components";

const Button = styled.button`
	width: 128px;
	height: 40px;
	border-radius: 25px;
	background-color: var(--blue);
	color: white;
	border: none;
	padding: 0;
	cursor: pointer;
	&:focus {
		outline: none;
	}
	@media (max-width: 1660px) {
		font-size: 17px;
	}
`;
export default Button;
