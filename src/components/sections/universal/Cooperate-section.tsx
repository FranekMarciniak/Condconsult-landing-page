import Img from "gatsby-image";
import * as React from "react";
import styled from "styled-components";
import SectionStyles from "../../../styles/section";
const Section = styled(SectionStyles)`
  flex-direction: column;
`;
const StyledLogosContainer = styled.div`
  width: 63%;
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    margin-top: 30px;
    width: 100%;
  }
`;
const SingleLogoContainer = styled.div`
  max-width: 400px;
  max-height: 200px;
  min-width: 150px;
  min-height: fit-content;
  margin: 15px 15px;
  * {
    margin-top: auto;
  }
  @media (max-width: 600px) {
    min-width: 100px;
    margin: 35px 5px;
  }
  @media (max-width: 350px) {
    min-width: 80px;
    margin: 35px 5px;
  }
`;
const CooperateSection: React.FC<{ data: any }> = ({ data }) => {
  return (
    <Section>
      <h2>We cooperate with important companies</h2>
      <StyledLogosContainer>
        {data.images.map((ele: any, i: number) => (
          <SingleLogoContainer key={i}>
            <Img fluid={ele.asset.fluid} />
          </SingleLogoContainer>
        ))}
      </StyledLogosContainer>
    </Section>
  );
};

export default CooperateSection;
