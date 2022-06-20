import styled from "styled-components";

interface ProfilePictureProps {
  src?: string;
}

export const Main = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: solid 2px rgba(255,255,255, 0.08);
  padding: 2.5rem 2.5rem;
  text-align: center;
`;

export const SectionContainer = styled.div`
  width: 1024px;
  max-width: 1024px;

  .My {
    margin-top: 0;
    @media screen and (max-width: 720px) {
      margin-top: 0;
    }
  }

  .My.HeaderContainer{
    margin-top: -1.5rem;
    @media screen and (max-width: 720px) {
      margin-top: -1.5rem;
    }
  }

  .HeaderContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.25rem;
    width: 100%;

    h1{
      text-align: center;
      width: 100%
    }

    .ButtonContainer{
      display: flex;
      flex-direction: row;
      gap: 0.25rem;
    }

    @media screen and (max-width: 720px) {
      justify-content: right;
    }
  
    button {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(255, 255, 255, 0);
      border: solid 1px rgba(255, 255, 255, 0.2);

      &:hover {
        background: rgba(255, 255, 255, 0.08);
        filter: brightness(1);
      }
    }
  }

  .MainContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media screen and (max-width: 650px) {
      flex-direction: column;
      gap: 0rem;
    }
  }

  hr{
    display: block;
    margin: 1rem 0rem;
  }
  
  @media screen and (max-width: 720px){
    flex-direction: column-reverse;
    width: auto;
    text-align: center;
  }
`;

export const Title = styled.h1`
  margin-bottom: 1.5rem;
`;

export const LoadContainer = styled.div`
  height: auto;
  width: 100%;
  padding: 3.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;

  p{
    width: 75%;
  }

  justify-content: center;
  align-items: center;
`;

export const TitleInput = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 1.5rem; */
  --h1-font-size: 2.25rem;
  font-size: var(--h1-font-size);
  line-height: 100%;
  font-weight: 600;
  text-align: center;
  border: solid 1px transparent;
  border-radius: 0.5rem;
  width: 100%;
  padding: 0.0625rem 0.375rem;
  @media screen and (max-width: 720px) {
    width: auto;
  }

  input {
    border: 0;
  --h1-font-size: 2.25rem;
    font-size: var(--h1-font-size);
    line-height: 100%;
    font-weight: 600;
    width: 100%;
    text-align: center;
    padding: 0.2rem 0;
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

  &:focus {
    border: 1px solid var(--dark-mode-blue-600);     
    outline: 2px solid var(--dark-mode-blue-250);
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.08);
  }

  @media screen and (max-width: 30.3125rem) {
    font-size: calc(var(--h1-font-size) + 0.125rem);      
  }
`;