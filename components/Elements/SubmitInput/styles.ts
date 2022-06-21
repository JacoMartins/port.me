import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  line-height: 100%;
  font-weight: 600;
  text-align: center;
  border: solid 1px rgba(255, 255, 255, 0.2);
  outline: solid 0px transparent;
  border-radius: 0.5rem;
  width: 100%;
  padding: 0.25rem;
  transition: 0.15s;

  @media screen and (max-width: 720px) {
    width: 100%;
  }

  input {
    border: 0;
    line-height: 100%;
    font-weight: 400;
    width: 100%;
    height: 100%;
    text-align: left;
    padding: 0.125rem;
    border: solid 1px transparent;

    &:hover {
      border: solid 1px transparent;
    }

    &:focus{
      border: solid 1px transparent;
      outline: 0;
    }
  }

  &:hover{
    border: solid 1px rgba(255, 255, 255, 0.2);
  }

  &:focus-within {
    border: 1px solid var(--dark-mode-blue-600);     
    outline: 2px solid var(--dark-mode-blue-250);
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.08);
    padding: 0.5rem;
    border-radius: 0.25rem;
  }

  @media screen and (max-width: 30.3125rem) {
    font-size: calc(var(--h1-font-size) + 0.125rem);      
  }
`;