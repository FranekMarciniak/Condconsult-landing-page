import * as React from "react";
import styled from "styled-components";
import Checkmark from "../../../assets/svg/Checkmark-circle.svg";
import { StyledInput as Input } from "../../FormSection";
import TempButton from "../../../styles/button";
const StyledSection = styled.section`
  width: 75%;
  margin: 150px auto 0 auto;
  h2 {
    text-align: center;
  }
  @media (max-width: 900px) {
    width: 91.2%;
    margin: 40px auto 0 auto;

    h2 {
      font-size: 30px;
    }
  }
`;
const StyledCardsWrapper = styled.div`
  padding: 75px 5% 0 5%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-flow: wrap column;
    padding: 75px 0 0 0;
  }
`;
const StyledCard = styled.div`
  width: 48%;
  min-height: 771px;
  box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.25);
  @media (max-width: 900px) {
    width: 100%;
    min-height: max-content;
    &:first-child {
      margin-bottom: 25px;
    }
  }
`;
const StyledTextCard = styled(StyledCard)`
  background-color: #090031;
  padding: 52px 60px;

  color: #fff;
  h3 {
    font-size: 42px;
    font-style: normal;
    letter-spacing: 0px;
    text-align: center;
    margin-bottom: 35px;
    text-align: cener;
  }
  h4 {
    font-size: 35px;
    font-style: normal;
    margin-bottom: 35px;
    text-align: left;
  }
  @media (max-width: 900px) {
    padding: 20px 21px;

    h3 {
      font-size: 26px;
      text-align: left;
    }
    h4 {
      font-size: 18px;
      font-family: Montserrat, "Open Sans", "Helvetica Neue", sans-serif;
      font-weight: 400;
    }
  }
`;
const StyledFormCard = styled(StyledCard)`
  padding: 37px 7.7%;
  legend {
    font-size: 42px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  h5 {
    font-family: Montserrat;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 45px;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 10px;
  }
  @media (max-width: 900px) {
    legend {
      font-size: 30px;
      margin-bottom: 15px;
    }
    h5 {
      font-size: 17px;
    }
  }
`;
const StyledLi = styled.li`
  font-size: 30px;
  text-align: left;
  line-height: 150%;
  margin-bottom: 15px;
  position: relative;
  &::before {
    content: url(${Checkmark});
    position: absolute;
    top: 4px;
  }
  p {
    margin-left: 40px;
  }
  @media (max-width: 900px) {
    p {
      font-size: 20px;
    }
  }
`;
const StyledInput = styled(Input)`
  width: 100%;
  border-bottom: 1px rgba(3, 2, 53, 0.8) solid;
  font-size: 15px;
  color: var(--font-primary);
  margin-bottom: 5px;
`;
const Button = styled(TempButton)`
  width: 100%;
  margin-top: 35px;
`;
const StyledMobilePrice = styled.span`
  @media (max-width: 900px) {
    font-size: 45px;
    font-weight: 600;
    font-family: poppins-heading, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;
const PricingSection: React.FC = () => {
  return (
    <StyledSection>
      <h2>AR Software and Hardware Pricing</h2>
      <StyledCardsWrapper>
        <StyledTextCard>
          <h3>vGis high-accuracy AR</h3>
          <h4>
            <StyledMobilePrice>$95</StyledMobilePrice>/device per month
          </h4>
          <ul>
            <StyledLi>
              <p>Free 2-week trial</p>
            </StyledLi>
            <StyledLi>
              <p>Flat-fee subscription</p>
            </StyledLi>
            <StyledLi>
              <p>Volume discounts</p>
            </StyledLi>
            <StyledLi>
              <p>Enterprise licesing available</p>
            </StyledLi>
            <StyledLi>
              <p>BYOD of buy hardware</p>{" "}
            </StyledLi>
          </ul>
        </StyledTextCard>
        <StyledFormCard>
          <fieldset>
            <legend align="left">Hardware Pricing</legend>
            <h5>Contact us by using the form bellow.</h5>
            <StyledInput placeholder="First & Last Name" />
            <StyledInput placeholder="Email" />
            <StyledInput placeholder="Phone number" />
            <StyledInput placeholder="Company" />
            <StyledInput placeholder="Job role" />
            <StyledInput placeholder="Country" />
            <Button>Send</Button>
          </fieldset>
        </StyledFormCard>
      </StyledCardsWrapper>
    </StyledSection>
  );
};

export default PricingSection;
