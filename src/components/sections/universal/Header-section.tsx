import React, { useContext } from 'react';
import styled from 'styled-components';
import Logo from '../../logo';
import Nav from '../../Nav';
import { ThemeContext } from '../../../context/todoContext/contextState';
export const StyledHeader = styled.header`
  width: 100%;
  height: 98px;
  background-color: ${props => props.color};
`;
const StyledWrapper = styled.div`
  width: 75%;
  height: 98px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 900px) {
    width: 91.2%;
  }
`;
const Header: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <StyledHeader color={theme.color}>
      <StyledWrapper>
        <Logo theme={theme.color} />
        <Nav theme={theme.color} />
      </StyledWrapper>
    </StyledHeader>
  );
};

export default Header;
