import React from "react";
import styled from "styled-components";

import headerBG from "../images/bg-pattern-header.svg";

const HeaderStyles = styled.header`
  background: url(${headerBG}) no-repeat center top;
  background-size: 100% 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: calc(var(--base-size) * 1.5);

  h2 {
    align-self: flex-start;
    color: var(--white);
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
