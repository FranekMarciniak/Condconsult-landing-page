import Img from "gatsby-image";
import React, { useState } from "react";
import ReactPlayer from "react-player/dailymotion";
import styled from "styled-components";
import play from "../../../assets/svg/play.svg";
import arrow from "../../../assets/svg/right-arrow-blue.svg";
import SectionStyles from "../../../styles/section";
import Button from "../../ButtonCard";

const StyledSection = styled(SectionStyles)`
  align-items: initial;
  border-radius: 15px;
  padding: 75px 80px;
  background-color: #ebecfb;
  display: flex;
  flex-flow: row wrap;
  @media (max-width: 1434px) {
    padding: 30px 16px;
  }
  @media (max-width: 900px) {
    width: 91.2%;
  }
`;
const StyledTextContainer = styled.div`
  width: 100%;
  padding-left: 32px;
  height: fit-content;
  margin-bottom: 50px;
  h3 {
    max-width: 50%;
    line-height: 131%;
    margin-bottom: 25px;
    font-style: normal;
  }
  p {
    width: 68%;
    line-height: 152%;
    font-size: 23px;
    letter-spacing: 0.4px;
    margin-bottom: 25px;
  }
  a {
    font-size: 24px;
    font-family: poppins-heading, "Open Sans", "Helvetica Neue", sans-serif;
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
  @media (max-width: 900px) {
    text-align: center;
    h3 {
      font-size: 25px;
    }
    p {
      font-size: 18px;
    }
    a {
      font-size: 19px;
    }
  }
  @media (max-width: 1434px) {
    padding-left: 0px;
    text-align: center;
    h3 {
      text-align: center;
      min-width: 73%;
      line-height: 148%;
      margin-bottom: 15px;
      font-style: normal;
      margin-left: auto;
      margin-right: auto;
    }
    p {
      width: 91%;
      line-height: 156%;
      margin-bottom: 25px;
      text-align: center;
    }
    a {
      margin-left: calc(-32px);
    }
  }
  @media (max-width: 1434px) {
    order: 2;
  }
`;
const StyledButtonsContainer = styled.div`
  width: 18.5%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  * {
    flex: 1 1 auto;
    max-height: 173px;
  }
  button:last-child {
    margin-bottom: 0px;
  }

  @media (max-width: 1900px) {
    * {
      max-height: 153px;
    }
  }
  @media (max-width: 1650px) {
    * {
      max-height: 133px;
    }
  }
  @media (max-width: 1500px) {
    * {
      max-height: 113px;
    }
  }
  @media (max-width: 1434px) {
    order: 1;
    flex-direction: row;
    margin-bottom: 56px;
    * {
      margin-bottom: 0;
      margin-right: 8px;
      max-width: 230px;
    }
  }
  @media (max-width: 900px) {
    * {
      font-size: 18px;
    }
  }
  @media (max-width: 550px) {
    overflow: scroll;
    button {
      min-width: 110px;
    }
  }
`;
const StyledVideo = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  div {
    padding-left: 39px;
  }
  @media (max-width: 1434px) {
    div {
      padding-left: 0px;
    }
  }
`;
const StyledVideoButton = styled.button`
  width: 102px;
  height: 102px;
  top: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  left: 39px;
  right: 0;
  opacity: 0.3;
  background-color: rgba(0, 0, 0, 1);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-image: url(${play});
  background-position: center;
  background-repeat: no-repeat;
  z-index: 11;
  @media (max-width: 1434px) {
    left: 0;
  }
`;
const StyledTransparentOverlay = styled.div<{ active: boolean }>`
  width: calc(100% - 32px);
  height: 100%;
  top: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  right: 0;
  ${(props) => (props.active ? "z-index: 10;" : "z-index: 11;")}
`;
const StyledVideoContainer = styled.div`
  width: 81.5%;
  flex-grow: 1;
  height: 0;
  padding-bottom: 45.5%;
  position: relative;
  iframe {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  @media (max-width: 1434px) {
    order: 3;
    padding-bottom: 56%;
  }
`;
export const LogosContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 15px;
  justify-items: center;
  margin: 35px 0;
  h5 {
    margin: 10px 0;
    text-align: center;
  }

  @media (max-width: 800px) {
    h5 {
      font-size: 15px;
    }
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 500px) {
    h5 {
      font-size: 11px;
    }
  }
`;
const SingleLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    width: 62px;
    margin: 0 auto;
  }

  @media (max-width: 1200px) {
    div {
      width: 48px;
    }
  }
  @media (max-width: 800px) {
    div {
      width: 32px;
    }
  }
`;
const VideoSection: React.FC<{ data: any }> = ({ data }) => {
  const options = data.nodes.sort(
    (a: { order: number }, b: { order: number }) => a.order - b.order
  );
  options.forEach((ele: any, index: number) => (options[index].order = index));
  const [sectionState, setSectionState] = useState(0);
  const [playingState, setPlayingState] = useState(false);
  console.log(data);
  return (
    <StyledSection>
      <StyledTextContainer>
        <h3>{options[sectionState].heading}</h3>
        <p>{options[sectionState].content}</p>
        <p>{options[sectionState].subContent}</p>
        <h3>BCF Manager supported softwares</h3>
        <LogosContainer>
          {options[sectionState].images.map((ele: any, i: number) => (
            <SingleLogoContainer key={i}>
              <Img fluid={ele.asset.fluid} />
              <h5>{options[sectionState].imagesText[i]}</h5>
            </SingleLogoContainer>
          ))}
        </LogosContainer>
      </StyledTextContainer>
      <StyledButtonsContainer>
        {options.map((ele: any, i: number) => (
          <Button
            text={ele.product}
            section={ele.order}
            currentSection={sectionState}
            setSection={setSectionState}
            key={i}
          />
        ))}
      </StyledButtonsContainer>
      <StyledVideoContainer key={options[sectionState].video}>
        <StyledVideo
          url={options[sectionState].video}
          playing={playingState}
          controls={false}
          width="100%"
          height="100%"
          key={options[sectionState].video}
        />
        <StyledTransparentOverlay active={true} />
        {!playingState ? (
          <StyledVideoButton
            onClick={() => setPlayingState(true)}
            key={options[sectionState].video}
          />
        ) : (
          <StyledTransparentOverlay
            onClick={() => setPlayingState(false)}
            key={options[sectionState].video}
            active={false}
          />
        )}
      </StyledVideoContainer>
    </StyledSection>
  );
};

export default VideoSection;
