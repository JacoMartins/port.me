import styled from "styled-components";

export const Main = styled.main`
  .LogoContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 2rem;

    h2 {
      font-size: 1rem;

      @media screen and (max-width: 720px){
        font-size: 1.25rem;
      }
    }

    h1 {
      font-weight: 600;
      margin-bottom: 0.25rem;
      font-size: 1.75rem;

      @media screen and (max-width: 720px) {
        font-size: 2.375rem;
      }

      span{
        color: var(--dark-mode-blue);
      }
    }

    p{
      margin-top: 1rem;
    }
  }

  .MainContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    input {
      border-radius: 0.375rem;
      width: 16rem;
    }
  }

  width: 100%;
  height: calc(100vh - 3.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > p{
    position: absolute;
    bottom: 1rem;
    font-size: 0.875rem;
    color: var(--dark-mode-text-600);
    z-index: -1;

    a{
      color: var(--dark-mode-blue);
      opacity: 0.9;
    }
  }
`;