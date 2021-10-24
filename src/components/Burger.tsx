import React, { useState } from 'react';
import styled from 'styled-components';
import exit from '../assets/svg/exit.svg';
import RightNav from './RightNav';

const StyledBurger = styled.div<{ open: boolean }>`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 34px;
  right: 0;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: ${({ open }) => (open ? 'default' : 'pointer')};
  z-index: ${({ open }) => (open ? '-1' : '3')};
  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: ${props => (props.color !== '#030235' ? 'var(--font-primary)' : '#fff')};
    display: ${({ open }) => (open ? 'none' : 'block')};
  }
  @media (min-width: 1101px) {
    display: none;
  }
`;

const StyledExitButton = styled.button`
  position: fixed;
  height: 37px;
  width: 37px;
  top: 10px;
  right: calc(30vw + 10px);
  z-index: 4;
  border-radius: 0px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  background-image: url(${exit});
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  padding: 0;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  @media (max-width: 650px) {
    right: calc(50vw + 10px);
  }
  @media (max-width: 470px) {
    right: calc(80vw + 10px);
  }
  @media (max-width: 305px) {
    right: calc(100vw + 10px);
  }
  @media (min-width: 1101px) {
    display: none;
  }
`;

const Burger = ({ color }: any): React.ReactElement => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <StyledExitButton onClick={() => setOpen(false)} />}
      <StyledBurger open={open} onClick={() => setOpen(true)} color={color}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};
export default Burger;
