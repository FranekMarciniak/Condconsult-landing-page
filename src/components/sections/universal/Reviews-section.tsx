import React from 'react';
import styled from 'styled-components';
import SectionStyles from '../../../styles/section';
import StyledCard from '../../ReviewCard';
const Section = styled(SectionStyles)`
  display: block;
  h2 {
    margin-bottom: 70px;
    margin-left: auto;
    margin-right: auto;
    max-width: 42%;
    text-align: center;
    line-height: 123%;
  }
  @media (max-width: 1400px) {
    h2 {
      max-width: 70%;
    }
  }
  @media (max-width: 1150px) {
    h2 {
      font-size: 40px;
    }
  }
  @media (max-width: 900px) {
    width: 91.2%;
    margin-top: 40px;
  }
  @media (max-width: 500px) {
    h2 {
      max-width: 90%;
      font-size: 30px;
    }
  }
`;

const StyledReviewsWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: flex-start;
  align-content: flex-start;
  & > article {
    flex-direction: column;
    color: white;
  }
  & > article:nth-child(even) {
    margin-left: 2.5%;
  }

  & > article:nth-child(1) {
    width: 50%;
  }
  & > article:nth-child(2) {
    width: 47.5%;
  }
  & > article:nth-child(3) {
    width: 61.5%;
    margin-top: 35px;
  }
  & > article:nth-child(4) {
    width: 36%;
    margin-top: 35px;
    color: #090031;
  }
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    margin-top: 60px;
    & > article {
      width: 100% !important;
      border-radius: 5px;
      margin-top: 15px;
      margin-left: 0;
    }
    & > article:nth-child(even) {
      margin-left: 0;
    }
    & > article:nth-child(2) {
    }
    & > article:nth-child(3) {
      flex-direction: column;
    }
    & > article:nth-child(4) {
    }
  }
`;
const ReviewsSection: React.FC<{ data: any }> = ({ data }) => {
  const reviews = data.nodes.sort((a: { order: number }, b: { order: number }) => a.order - b.order);
  reviews.forEach((ele: any, index: any) => (reviews[index].order = index));
  return (
    <Section>
      <h2>What our customers say</h2>
      <StyledReviewsWrapper>
        <StyledCard color='#DE767B' data={reviews[0]} />
        <StyledCard color='#4666F6' data={reviews[1]} />
        <StyledCard color='#090031' data={reviews[2]} />
        <StyledCard color='#FFCA29' data={reviews[3]} />
      </StyledReviewsWrapper>
    </Section>
  );
};

export default ReviewsSection;
