import React from "react";
import styled from "styled-components";
import Button from "../../../styles/button";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import SectionStyles from "../../../styles/section";
const StyledSection = styled(SectionStyles)`
  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;
const StyledMobileHeading = styled.div`
  h2 {
    font-size: 35px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  margin-bottom: 20px;
  @media (min-width: 900px) {
    display: none;
  }
  @media (max-width: 550px) {
    h2 {
      font-size: 29px;
    }
  }
`;
const StyledTextWrapper = styled.div`
  width: 54%;
  h2 {
    margin-bottom: 30px;
    line-height: 117%;
  }
  p {
    margin-bottom: 40px;
    line-height: 156%;
    font-size: 25px;
  }
  @media (max-width: 1650px) {
    h2 {
      font-size: 50px;
    }
    p {
      font-size: 26px;
    }
  }
  @media (max-width: 1434px) {
    p {
      font-size: 23px;
    }
  }
  @media (max-width: 1300px) {
    width: 60%;
  }
  @media (max-width: 1150px) {
    h2 {
      font-size: 40px;
    }
    p {
      font-size: 18px;
    }
  }
  @media (max-width: 900px) {
    width: 100%;
    h2 {
      display: none;
    }
    p {
      text-align: center;
    }
  }
`;
const StyledPhotoWrapper = styled.div`
  width: 46%;
  display: flex;
  justify-content: center;
  div {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1300px) {
    width: 40%;
    align-items: center;
    img {
      max-height: 400px;
      padding-left: 10px;
    }
    div {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 900px) {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    img {
      max-height: 550px;
      padding-left: 10px;
    }
  }
`;
const StyledIntroButton = styled(Button)`
  width: max-content;
  height: 55px;
  padding: 15px 24px;
  font-size: 20px;
  position: relative;
  letter-spacing: 1px;
  @media (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
const ConsultantSection: React.FC<{ data: any }> = ({ data }) => {
  const img = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "meeting.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <StyledSection>
      <StyledTextWrapper>
        <h2>{data.heading}</h2>
        <p>{data.content}</p>
        <StyledIntroButton as={Link} to={data.link}>
          {data.button}
        </StyledIntroButton>
      </StyledTextWrapper>
      <StyledPhotoWrapper>
        <Img fluid={img.file.childImageSharp.fluid} alt="meeting drawing" />
      </StyledPhotoWrapper>
      <StyledMobileHeading>
        <h2>{data.heading}</h2>
      </StyledMobileHeading>
    </StyledSection>
  );
};

export default ConsultantSection;
