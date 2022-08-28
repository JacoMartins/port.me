import { Download } from 'phosphor-react';
import styled, { createGlobalStyle } from 'styled-components';

import CaretDownWhite from './resources/icons/caret-down-white.svg';
import CaretDownBlack from './resources/icons/caret-down-black.svg';

export const GlobalStyle = createGlobalStyle`
  :root {
    --light-mode-blue: #1844b8;
    --light-mode-blue-250: rgba(24, 68, 184, 0.25);
    --light-mode-blue-400: rgba(24, 68, 184, 0.4);
    --light-mode-blue-600: rgba(24, 68, 184, 0.6);
    --light-mode-blue-800: rgba(24, 68, 184, 0.8);
    --dark-mode-blue: #3182ce;
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

    @media screen and (max-width: 720px) {
      font-size: calc(1rem + 0.125rem);  
      border-radius: 0.5rem;
    }
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
    padding: 0.5rem 0.5rem;
    transition: 0.15s ease-in;

    @media screen and (max-width: 30.3125rem) {
      font-size: calc(var(--h1-font-size) + 0.125rem);   
      padding: 0.75rem 0.5rem;   
    }

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
  
  select {
    background: var(--dark-mode-background);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 0.375rem;
    outline: 0 solid rgba(255, 255, 255, 0.25);
    font-size: 1rem;
    padding: 0.5rem 0.5rem;
    transition: 0.15s ease-in;
    color: var(--dark-mode-text-850);

    appearance: none;

    background-image: url('${CaretDownWhite}');
    background-position: right 0.75rem center;
    background-size: 12px;
    background-repeat: no-repeat;

    @media screen and (max-width: 30.3125rem) {
      font-size: calc(var(--h1-font-size) + 0.125rem);   
      padding: 0.75rem 0.5rem;   
    }

    &:active{
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
  
  @keyframes open {
    0% {
      transform: scale(90%);
    }

    100%{
      transform: scale(100%);
    }
  }

  @keyframes open-mobile {
    0% {
      transform: translate(0, 6rem);
    }

    100%{
      transform: translate(0, 0);
    }
  }

  @keyframes openActionBallon {
    0%{
      transform: scale(0.98) translate(0 , -0.25rem);
      opacity: 0.8;
    }

    100%{
      transform: scale(1) translate(0, 0);
      opacity: 1;
    }
  }

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;

  }
  
  .react-modal-content {
    width: auto;
    max-width: 576px;
    background: var(--dark-mode-background);
    padding: 1rem;
    border-radius: 0.25rem;
    z-index: 999;

    animation: open 0.15s ease-out;
    
    @media screen and (max-width: 720px){
      position: absolute;
      bottom: 0;
      border-top: solid 2px rgba(255, 255, 255, 0.1);
      width: 100%;
      animation: open-mobile 0.15s ease-out;
    }

    button {
      @media screen and (max-width: 480px) {
        padding: 0.75rem 0.5rem;
      }
    }
  }

  .react-modal-content-header{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: auto;
    width: 100%;
    padding: 0 0 1rem 0;
    margin: 0;
    
    .react-modal-close{
      position: relative;
      border: 0;
      background: transparent;
      transition: filter 0.2s;
      cursor: pointer;
  
      &:hover {
        filter: brightness(0.8);
      }
  
      z-index: 999;
    }

    h2 {
      margin: 0;
    }
  }


  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    line-height: 1.75rem;

    @media screen and (max-width: 720px) {
      font-size: calc(1rem + 0.125rem);      
    }
    
    div {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.25rem;
      height: 1.25rem;
      border: solid 1px rgba(255, 255, 255, 0.25);
      border-radius: 0.25rem;
      margin-right: 0.375rem;
      cursor: pointer;

      transition: 0.15s;

      @media screen and (max-width: 720px) {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.5rem;
      }
      
      svg {
        display: none;
      }
    }

    input[type=checkbox]:checked~div {
      background: var(--light-mode-blue);
      border: 0;
      
      svg {
        display: block;
        color: white;
        font-weight: 600;
      }
    }

    input[type=checkbox] {
      position: absolute;
      width: 0;
      height: 0;
      margin-right: 0.25rem;
      opacity: 0;
      cursor: pointer;
    }
    
    input[type=radio] {
      position: absolute;
      width: 0;
      height: 0;
      margin-right: 0.25rem;
      opacity: 0;
      cursor: pointer;
    }

    input[type=radio]:checked~div {
      background: var(--light-mode-blue);
      border: 0;
      
      svg {
        display: block;
        color: white;
        font-weight: 600;
      }
    }

  }

  input[type=range] {
    padding: 0;
  }

  hr{
    border: solid 1px rgba(255, 255, 255, 0.15);
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    display: block;
    background: var(--dark-mode-background);
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 3px;
    width: 2px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  .MyComponentContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: dashed 2px rgba(255, 255, 255, 0.08);
    border-radius: 0.5rem;
    padding: 0.5rem;
    width: 100%;

    .Header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .ButtonContainer {
        display: flex;
        flex-direction: row;
        gap: 0.25rem;
      }
      
      h2 {
        margin-left: 0.5rem;
      }

      input {
        width: 100%;
        margin-left: 0rem;
        font-size: 1.25rem;
        font-weight: 500;
        padding: 0.5rem 0.25rem;

        border: solid 1px transparent;

        &:hover{
          border: solid 1px rgba(255, 255, 255, 0.15);
        }
      }
    }

    hr {
      width: 100%;
      margin: 0.375rem 0 0 0;
      border-color: rgba(255, 255, 255, 0.08);
    }

    div + & {
      margin-top: 1rem;
    }

    > button{
      width: auto;
      height: 2.5rem;

      svg {
        color: white;
      }
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
    background: rgba(255, 255, 255, 0.08);
    filter: brightness(1);
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

