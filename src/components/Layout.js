import React from "react";

import styled from "styled-components";

const LayoutStyles = styled.div`
  overflow: hidden;
  padding: calc(var(--base-size) * 1.5);
  max-width: 1100px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return <LayoutStyles>{children}</LayoutStyles>;
};

export default Layout;
