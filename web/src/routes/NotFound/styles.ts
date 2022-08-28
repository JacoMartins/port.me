import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  
  p {
    position: absolute;
    bottom: 1rem;
    a {
      text-decoration: none;
      color: var(--dark-mode-text-600);
      &:hover{
        text-decoration: underline;
      }
    }
  }

  .Container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    
    img {
      width: 24rem;
    }

    h2{
      color: var(--dark-mode-text-850);
      text-align: center;
      max-width: 80%;
    }

  }
`;