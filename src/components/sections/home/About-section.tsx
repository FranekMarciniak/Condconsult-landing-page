import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import arrow from "../../../assets/svg/right-arrow-blue.svg";
import SectionStyles from "../../../styles/section";
const Section = styled(SectionStyles)`
  background-color: var(--font-primary);
  color: white;
  border-radius: 15px;
  padding: 9% 4%;
  h2 {
    margin-left: auto;
    margin-right: auto;
  }
  p {
    font-size: 28px;
    line-height: 141%;
    margin-bottom: 35px;
  }
  a {
    font-size: 24px;
    font-family: poppins-heading, "Open Sans", "Helvetica Neue", sans-serif;
    margin-left: auto;
    margin-right: auto;
    align-self: center;
    color: #3a57ff;
    line-height: 25px;
    position: relative;
  }
  a:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: calc(100% + 10px);
    height: 100%;
  }
  a:after {
    content: "";
    position: absolute;
    width: 30px;
    height: 16px;
    top: 8px;
    right: -40px;
    z-index: 15;
    margin-left: 10px;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  @media (max-width: 1650px) {
    h2 {
      font-size: 50px;
    }
    p {
      font-size: 26px;
      margin-bottom: 25px;
    }
  }
  @media (max-width: 1434px) {
    h2 {
      max-width: 45%;
    }
    p {
      font-size: 23px;
    }
  }
  @media (max-width: 1150px) {
    h2 {
      max-width: 60%;
    }
    p {
      font-size: 18px;
    }
  }
  @media (max-width: 900px) {
    width: 91.2%;
    padding: calc(9% + 30px) 4%;
    border-radius: 0px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    margin-top: 18px;
    align-items: center;
    h2 {
      max-width: 100%;
      text-align: center;
      font-size: 35px;
    }
    p {
      font-size: 21px;
      font-size: 18px;
      text-align: center;
      margin-top: 25px;
    }
    a {
      position: absolute;
      right: 50%;
    }
  }
  @media (max-width: 550px) {
    h2 {
      font-size: 29px;
    }
  }
`;
const HeadingWrapper = styled.div`
  width: 50%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
const ContentWrapper = styled.div`
  width: 50%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
const About: React.FC<{ data: any }> = ({ data }) => {
  return (
    <Section>
      <HeadingWrapper>
        <h2>{data.heading}</h2>
      </HeadingWrapper>
      <ContentWrapper>
        <p>{data.content}</p>
        <Link to={data.link}>{data.button}</Link>
      </ContentWrapper>
    </Section>
  );
};

export default About;
