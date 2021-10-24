import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../../context/todoContext/contextState';
import Button from '../../../styles/button';
import SectionStyles from '../../../styles/section';
const Section = styled(SectionStyles)`
  width: 100%;
  background-color: var(--pastel-pink);
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
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: var(--font-primary);
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
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;
const StyledIntroButton = styled(Button)`
  width: 232px;
  height: 55px;
  font-size: 20px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledTextWrapper = styled.div`
  width: 100%;
  p {
    font-size: 23px;
    line-height: 152%;
    letter-spacing: 0.4px;
    color: var(--font-primary);
    max-width: 700px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 55px;
  }
  @media (max-width: 900px) {
    a {
      display: none;
    }
  }
  @media (max-width: 900px) {
    width: 100%;
    p {
      text-align: center;
      font-size: 19px;
      margin-bottom: 0;
    }
  }
`;
const StyledImageWrapper = styled.div`
  width: 65%;
  margin-top: 105px;
  min-width: 600px;
  height: 480px;
  margin-left: auto;
  margin-right: auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
  div {
    height: 100%;
  }
  @media (max-width: 1400px) {
    height: 430px;
  }
  @media (max-width: 900px) {
    margin-top: 30px;
    width: 100%;
    min-width: 0;
  }
  @media (max-width: 600px) {
    height: max-content;

    img {
      object-fit: contain;
    }
  }
`;
const StyledIntroButtonMobile = styled(StyledIntroButton)`
  margin: 40px auto 0px auto;
  @media (min-width: 900px) {
    display: none;
  }
`;
const IntroSection: React.FC<{ data: any }> = ({ data }) => {
  const theme = useContext(ThemeContext);
  useEffect(() => {
    theme.changePink();
  }, [theme]);
  return (
    <Section>
      <StyledSectionWrapper>
        <h1>{data.heading}</h1>
        <StyledContentWrapper>
          <StyledTextWrapper>
            <p>{data.content}</p>
            <StyledIntroButton as={Link} to={data.link}>
              {data.button}
            </StyledIntroButton>
          </StyledTextWrapper>
          <StyledImageWrapper>
            <Img fluid={data.image.asset.fluid} alt='vgis in action'></Img>
          </StyledImageWrapper>
          <StyledIntroButtonMobile as={Link} to='/a'>
            Try it now!
          </StyledIntroButtonMobile>
        </StyledContentWrapper>
      </StyledSectionWrapper>
    </Section>
  );
};

export default IntroSection;
