import styled from "styled-components";

export const Main = styled.main`
  .LogoContainer {
    text-align: center;
    margin-bottom: 2rem;

    h1{
      font-weight: 600;
      margin-bottom: 0.25rem;

      span{
        color: var(--dark-mode-blue);
      }
    }

    p{
      color: var(--dark-mode-text-500);
    }
  }

  width: 100%;
  height: calc(100vh - 3.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > p{
    margin-top: 2rem;
    font-size: 0.875rem;
    color: var(--dark-mode-text-600);

    a{
      color: var(--dark-mode-blue);
      opacity: 0.9;
    }
  }
`;