import styled from "styled-components";

export const Main = styled.main`
  .LogoContainer {
    text-align: center;
    margin-bottom: 2rem;

    h1{
      font-size: 1.75rem;
      font-weight: 600;
      margin-bottom: 0.25rem;

      @media screen and (max-width: 720px){
        font-size: 2rem;
      }

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

  .Container {
    border: 1px solid rgba(255, 255,255, 0.2);
    border-radius: 0.75rem;
    padding: 1rem;

    @media screen and (max-width: 720px){
      border: 0px solid rgba(255, 255,255, 0.2);
      
      input, button, textarea {
        padding: 0.75rem 0.75rem;
        font-size: 1.125rem;
        border-radius: 0.5rem;
      }

      h2{
        text-align: center;
        margin-bottom: 1rem;
        font-weight: 500;
        font-size: 1.5rem;
      }
    }
    
    input, button,textarea {
      padding: 0.75rem 0.5rem;
    }

    h2{
      text-align: center;
      margin-bottom: 1rem;
      font-weight: 400;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;

    textarea {
      height: 6rem;
    }

    button{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
    }

    .link{
      width: 100%;
      button{
        width: 100%;
      }
    }

    p {
      color: salmon;
    }

    .NameContainer {
      display: flex;
      justify-content: space-between;
      width: 20rem;
      gap: 0.5rem;

      input {
        width: 50%;
      }
    }
  }
`;