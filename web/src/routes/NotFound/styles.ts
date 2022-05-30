import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  a {
    position: absolute;
    bottom: 1rem;
    text-decoration: none;
    color: var(--dark-mode-text-600);
  }

  .Container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    
    img {
      min-width: 32rem;
      min-height: 32rem;
      max-width: 32rem;
      max-height: 32rem;
    }

    h1{
      color: var(--dark-mode-text-850);
      text-align: center;
    }

  }
`;