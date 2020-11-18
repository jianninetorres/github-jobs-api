import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --base-size: 16px;
        --background-color-grey: #f0f0f0;
        --white: #ffffff;
        --grey: #707C91;
    }

    body {
        background-color: var(--background-color-grey);
        margin: 0;
    }
    
    h2, p {
        font-family: 'Inter', sans-serif;
        margin-top: 0;
        margin-bottom: var(--base-size);
    }
    
    h2 {
        font-weight: 600;
    }
    
    p {
        font-weight: 400;
        color: var(--grey);
    }
`;

export default GlobalStyles;
