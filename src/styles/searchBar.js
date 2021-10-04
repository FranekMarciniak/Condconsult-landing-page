import styled from "styled-components";
import { StyledLabel } from "../components/Nav";
const searchBar = styled.input`
	border-radius: 25px;
	width: 200px;
	height: 40px;
	background-color: #f5f5f5;
	box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
	border: none;
	padding: 0 8px;
	position: relative;
	font-size: 15px;
	outline: none;
	&::placeholder {
		font-size: 14px;
		padding: 5px;
	}
`;
export default searchBar;
