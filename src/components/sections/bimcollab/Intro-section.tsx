import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../../context/todoContext/contextState';
import bimcollab from '../../../images/BIMCollab-intro.png';
import Button from '../../../styles/button';
import SectionStyles from '../../../styles/section';

const Section = styled(SectionStyles)`
  width: 100%;
  background-color: var(--gray);
  padding: 100px 0px;
  margin-top: 0;
  @media (max-width: 900px) {
    padding: 0px 0px 60px 0px;
  }
`;
const StyledSectionWrapper = styled.div`
  width: 75%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  h1 {
    line-height: 131%;
    text-align: left;
    color: var(--font-primary);
    max-width: 1000px;
  }

  @media (min-width: 2200px) {
    h1 {
      max-width: 80%;
    }
  }

  @media (max-width: 900px) {
    width: 91.2%;
    h1 {
      text-align: center;
      font-size: 38px;
    }
  }
`;
const StyledContentWrapper = styled.div`
  width: 100%;
  margin-top: 45px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const StyledImageWrapper = styled.div`
  width: 62%;
  img {
    border-radius: 15px;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;
const StyledTextWrapper = styled.div`
  width: 35%;
  p {
    font-size: 23px;
    line-height: 35px;
    text-align: left;
    margin-bottom: 65px;
  }
  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 30px;
    p {
      text-align: center;
      margin-bottom: 30px;
      font-size: 19px;
    }
  }
`;
const StyledIntroButton = styled(Button)`
  width: 232px;
  text-align: left;
  height: 55px;
  padding: 0px 46px;
  font-size: 20px;
  position: relative;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  font-family: poppins-heading, 'Open Sans', 'Helvetica Neue', sans-serif;

  @media (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
const Intro: React.FC = () => {
  const theme = useContext(ThemeContext);
  useEffect(() => {
    theme.changeBlue();
  }, [theme]);
  return (
    <Section>
      <StyledSectionWrapper>
        <h1>There`s a better way to manage your BIM issues</h1>
        <StyledContentWrapper>
          <StyledTextWrapper>
            <p>Save time and create better BIM models with professional issue management and integrated model validaion.</p>
            <StyledIntroButton>Try it now!</StyledIntroButton>
          </StyledTextWrapper>
          <StyledImageWrapper>
            <img src={bimcollab}></img>
          </StyledImageWrapper>
        </StyledContentWrapper>
      </StyledSectionWrapper>
    </Section>
  );
};

export default Intro;
