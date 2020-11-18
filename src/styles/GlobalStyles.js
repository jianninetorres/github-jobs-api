import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --base-size: 16px;
        --background-color-grey: #f0f0f0;
        --white: #ffffff;
    }

    body {
        background-color: var(--background-color-grey);
        margin: 0;
    }
`;

export default GlobalStyles;
