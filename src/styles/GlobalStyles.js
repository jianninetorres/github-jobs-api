import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --base-size: 16px;
        --background-color-grey: #f0f0f0;
        --white: #ffffff;
        --grey: #707C91;
        --purple: #5262EB;
        --black: #000000;
    }

    body {
        background-color: var(--background-color-grey);
        font-family: 'Inter', sans-serif;
        margin: 0;
    }
    
    h2, h3, p {
        margin-top: 0;
        margin-bottom: var(--base-size);
    }
    
    h2 {
        font-weight: 600;
        font-size: 1.5rem;
    }
    
    h3 {
        color: var(--purple);
        font-size: 1rem;
    }
    
    p {
        color: var(--grey);
        font-weight: 400;
        font-size: 1.2rem;
    }
`;

export default GlobalStyles;
