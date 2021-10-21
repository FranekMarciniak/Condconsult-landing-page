import { Link } from "gatsby";
import * as React from "react";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../context/todoContext/contextState";
import Button from "../../../styles/button";
import SectionStyles from "../../../styles/section";

const Section = styled(SectionStyles)`
  flex-flow: wrap column;
  justify-content: center;
`;
const P = styled.p`
  letter-spacing: 0.4px;
  max-width: 600px;
  line-height: 152%;
  text-align: center;
  font-size: 23px;
  margin-bottom: 40px;
  @media (max-width: 900px) {
    font-size: 19px;
    margin-bottom: 45px;
  }
`;
const StyledIntroButton = styled(Button)`
  padding: 25px 26px;
  font-size: 20px;
  letter-spacing: 1px;
`;
interface dataInterface {
  data: {
    heading: string;
    content: string;
    button: string;
  };
}
const Intro: React.FC<dataInterface> = ({ data }) => {
  const theme = useContext(ThemeContext);
  useEffect(() => {
    theme.changeLight();
  }, [theme]);
  return (
    <Section>
      <h1>{data.heading}</h1>
      <P>{data.content}</P>
      <StyledIntroButton as={Link} to="/a">
        {data.button}
      </StyledIntroButton>
    </Section>
  );
};

export default Intro;
