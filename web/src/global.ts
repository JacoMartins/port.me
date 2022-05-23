import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --light-mode-blue: #2259E7;
    --dark-mode-blue: #4373f0;
    --yellow: #FFAC2F;
    --white-850: rgba(255, 255, 255, 0.85);

    --light-mode-cover: #EEF1F9;
    --light-mode-background: #F9F9F9;
    --light-mode-text-1000: rgba(0, 0, 0, 1);
    --light-mode-text-850: rgba(0, 0, 0, 0.85);
    --light-mode-text-600: rgba(0, 0, 0, 0.6);
    --light-mode-text-500: rgba(0, 0, 0, 0.5);

    --dark-mode-cover: #18191C;
    --dark-mode-background: #09090A;
    --dark-mode-text-1000: rgba(255, 255, 255, 1);
    --dark-mode-text-850: rgba(255, 255, 255, 0.85);
    --dark-mode-text-600: rgba(255, 255, 255, 0.6);
    --dark-mode-text-500: rgba(255, 255, 255, 0.5);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media screen and (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media screen and (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--dark-mode-background);
    -webkit-font-smoothing: antialised;
  }
  
  body, input, textarea, button {
    font-family: 'Inter', Heveltica, Arial, sans-serif;
    letter-spacing: -0.0625rem;
    font-weight: 400;
    color: var(--dark-mode-text-850);
  }

  button {
    cursor: pointer;
    background: var(--light-mode-blue);
    border-radius: 0.5rem;
    outline: 0;
    border: 0;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem;
    transition: 0.2s;

    &:hover {
      filter: brightness(0.8);
    }

    &:active{
      transform: scale(98%);
    }
  }

  input {
    background: var(--dark-mode-background);
    border: 2px solid rgba(255, 255, 255, 0.25);
    border-radius: 0.5rem;
    outline: 0;
    font-size: 1rem;
    padding: 0.5rem;
  }
`; 

export const GlobalHeader = styled.header`
  
`;