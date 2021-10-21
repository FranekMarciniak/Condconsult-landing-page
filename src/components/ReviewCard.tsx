import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { FC } from "react";
const StyledCard = styled.article`
  min-height: 516px;
  padding: 46px;
  display: flex;
  @media (max-width: 1750px) {
    min-height: 526px;
  }
  @media (max-width: 1650px) {
    min-height: 586px;
  }
  @media (max-width: 1350px) {
    min-height: 636px;
  }
  @media (max-width: 1200px) {
    padding: 20px 18px 30px 18px;
  }
  @media (max-width: 900px) {
    min-height: 0;
  }
`;
const StyledPersonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  @media (max-width: 900px) {
    margin-bottom: 24px;
  }
`;
const StyledProfileInfoWrapper = styled.div`
  min-width: 122px;
  max-width: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin-bottom: 10px;
  }
  img {
    max-width: 100%;
    min-width: 100%;
  }
  @media (max-width: 1250px) {
    padding-left: 5px;
  }
`;
const StyledProfilePicWrapper = styled.div`
  width: 156px;
  height: 156px;
  border-radius: 50%;
  @media (max-width: 1650px) {
    width: 120px;
    height: 120px;
  }
  @media (max-width: 1350px) {
    width: 100px;
    height: 100px;
  }
`;
const StyledTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: space-between;
  flex-grow: 1;
  p {
    font-style: italic;
    font-weight: normal;
    font-size: 20px;
    line-height: 160%;
    letter-spacing: 0.4px;
    max-width: 90%;
  }
  @media (max-width: 1750px) {
    p {
      font-size: 19px;
    }
  }
  @media (max-width: 900px) {
    justify-content: center;
    p {
      margin-bottom: 15px;
      text-align: center;
      max-width: 100%;
    }
    h5 {
      text-align: center;
    }
  }
`;
const StyledHgroup = styled.div`
  margin-bottom: auto;
  h5 {
    font-weight: 500;
    font-size: 20px;
    line-height: 115%;
    margin-bottom: 5px;
    margin-top: 10px;
  }
  h6 {
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 105%;
  }
`;

interface data {
  content: string;
  name: string;
  order: number;
  position: string;
  workplace: string;
  image: any;
  logo: any;
}
interface Props {
  color: string;
  data: data;
}
const ReviewCard: FC<Props> = ({ color, data }) => {
  console.log(data);
  return (
    <StyledCard style={{ backgroundColor: color }}>
      <StyledPersonWrapper>
        <StyledProfilePicWrapper>
          <Img fluid={data.image.asset.fluid} />
        </StyledProfilePicWrapper>
        <StyledProfileInfoWrapper>
          <p>{data.position}</p>
          <Img fluid={data.logo.asset.fluid} />
        </StyledProfileInfoWrapper>
      </StyledPersonWrapper>
      <StyledTextWrapper>
        <p>{data.content}</p>
        <StyledHgroup as="hgroup">
          <h5>{data.name}</h5>
          <h6>{data.workplace}</h6>
        </StyledHgroup>
      </StyledTextWrapper>
    </StyledCard>
  );
};

export default ReviewCard;
