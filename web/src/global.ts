import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --light-mode-blue: #2B6CB0;
    --light-mode-blue-250: rgba(24, 68, 184, 0.25);
    --light-mode-blue-400: rgba(24, 68, 184, 0.4);
    --light-mode-blue-600: rgba(24, 68, 184, 0.6);
    --light-mode-blue-800: rgba(24, 68, 184, 0.8);
    --dark-mode-blue: #3182CE;
    --dark-mode-blue-250: rgba(49, 130, 206, 0.25);
    --dark-mode-blue-400: rgba(49, 130, 206, 0.4);
    --dark-mode-blue-600: rgba(49, 130, 206, 0.6);
    --dark-mode-blue-800: rgba(49, 130, 206, 0.8);

    --yellow: #FFAC2F;
    --white-850: rgba(255, 255, 255, 0.85);
    --white-250: rgba(255, 255, 255, 0.25);

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
    border-radius: 0.375rem;
    outline: 0;
    border: 0;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 0.625rem;
    transition: 0.2s;

    @media screen and (max-width: 30.3125rem) {
      font-size: calc(1rem + 0.125rem);      
    }

    &:hover {
      filter: brightness(0.8);
    }

    &:active{
      transform: scale(98%);
    }

    &:disabled{
      opacity: 0.8;

      &:hover {
        filter: brightness(1);
      }

      &:active{
        transform: scale(100%);
      }
    }
  }

  input {
    background: var(--dark-mode-background);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 0.375rem;
    outline: 0 solid rgba(255, 255, 255, 0.25);
    font-size: 1rem;
    padding: 0.5rem;
    transition: 0.15s ease-in;

    &:focus{
      border: 1px solid var(--dark-mode-blue-600);     
      outline: 2px solid var(--dark-mode-blue-250);     
    }
  }

  textarea {
    background: var(--dark-mode-background);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 0.375rem;
    outline: 0 solid rgba(255, 255, 255, 0.25);
    font-size: 1rem;
    padding: 0.5rem;
    transition: 0.15s ease-in;

    &:focus{
      border: 1px solid var(--dark-mode-blue-600);     
      outline: 2px solid var(--dark-mode-blue-250);     
    }
  }
  

  h1 {
    --h1-font-size: 2.25rem;
    font-size: var(--h1-font-size);
    line-height: 100%;
    font-weight: 600;

    @media screen and (max-width: 30.3125rem) {
      font-size: calc(var(--h1-font-size) + 0.125rem);      
    }
  }

  h2 {
    --h2-font-size: 1.25rem;
    font-size: 1.25rem;
    line-height: 150%;
    @media screen and (max-width: 30.3125rem) {
      font-size: calc(var(--h2-font-size) + 0.125rem);      
    }
  }

  h3{
    font-size: 1.125rem;
    line-height: 150%;
  }

  p {
    line-height: 125%;

    @media screen and (max-width: 30.3125rem) {
      font-size: calc(1rem + 0.125rem);      
    }
  }

  ul, ol {
    margin-top: 0.5rem;
    line-height: 137.5%;

    li {
      list-style-position: inside;
    } 
  }

  svg.load{
    animation: spin 1s infinite linear;
    opacity: 0.6;
  }

  @keyframes spin {
    0%{
      transform: rotate(0deg);
    }

    100%{
      transform: rotate(360deg);
    }
  }
`;

export const P850 = styled.p`
  color: var(--dark-mode-text-850);
`;

export const P600 = styled.p`
  color: var(--dark-mode-text-600);
`;

export const P500 = styled.p`
  color: var(--dark-mode-text-500);
`;

export const TransparentButton = styled.button`
  cursor: pointer;
  background: transparent;
  border-radius: 0.375rem;
  border: 1px solid rgba(255, 255, 255, 0.25);
  outline: 0;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0.625rem;
  transition: 0.2s;

  @media screen and (max-width: 30.3125rem) {
    font-size: calc(1rem + 0.125rem);      
  }

  &:hover {
    filter: brightness(0.8);
  }

  &:active{
    transform: scale(98%);
  }

  &:disabled{
    opacity: 0.8;

    &:hover {
      filter: brightness(1);
    }

    &:active{
      transform: scale(100%);
    }
  }
`;

