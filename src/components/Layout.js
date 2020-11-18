import React from "react";

import styled from "styled-components";

const LayoutStyles = styled.div`
  overflow: hidden;
  padding: calc(var(--base-size) * 1.5);
`;

const Layout = ({ children }) => {
  return <LayoutStyles>{children}</LayoutStyles>;
};

export default Layout;
