import React from 'react';
import styled from 'styled-components';
import FormSection from '../../FormSection';
import FooterSection from '../../FooterSection';
const StyledFooter = styled.div`
  width: 100%;
  background-color: #030235;
  margin-top: 130px;
`;
const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <FormSection />
      <FooterSection />
    </StyledFooter>
  );
};

export default Footer;
