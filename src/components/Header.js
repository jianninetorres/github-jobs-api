import React from "react";
import styled from "styled-components";

import headerBG from "../images/bg-pattern-header.svg";

const HeaderStyles = styled.header`
  background: url(${headerBG}) no-repeat center top;
  background-size: 120% 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: calc(var(--base-size) * 1.5);
  @media screen and (min-width: 1024px) {
    background-size: 100% 70%;
  }

  h2 {
    align-self: flex-start;
    color: var(--white);
    width: 100%;
    max-width: 1100px;
    margin: var(--base-size) auto;
  }
`;

const Header = ({ children, title }) => {
  return (
    <HeaderStyles>
      <h2>{title}</h2>
      {children}
    </HeaderStyles>
  );
};

export default Header;
