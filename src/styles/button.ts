import styled from "styled-components";

const Button = styled.button`
  font-family: poppins-heading, "Open Sans", "Helvetica Neue", sans-serif;

  height: 40px;
  border-radius: 25px;
  background-color: var(--blue);
  color: white;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:focus {
    outline: none;
  }
  @media (max-width: 1660px) {
    font-size: 17px;
  }
`;
export default Button;
