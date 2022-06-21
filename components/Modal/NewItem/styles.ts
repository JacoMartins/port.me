import styled from 'styled-components';

export const Div = styled.div`
  
`;

export const Container = styled.form`
  background: var(--dark-mode-background);
  height: auto;
  width: 20rem;

  @media screen and (max-width: 720px) {
    width: auto;
  }

  .MainContainer  {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 0.5rem;
    padding: 0rem;
    border-radius: 0.75rem;

    .DemoContainer {
      border: solid 1px rgba(255, 255, 255, 0.25);
      width: 100%;
      border-radius: 0.375rem;
      padding: 1.5rem;
      overflow: hidden;

      button {
        margin: 0;
      }

      >div {
        width: auto;
      }

      >aside{
        width: auto;
        height: auto;
        margin: 1.25rem 0rem 1.25rem -0.5rem;
      }

      .Frame {
        height: 8rem;
        margin-bottom: 0;
      }
    }

    > p {
      margin-top: 0.25rem;
    }
  }

  h2{
    margin-bottom: 1rem;
  }

  > p {
    margin-bottom: 0.5rem;
  }

  input + h2 {
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 720px) {
      font-size: calc(1rem + 0.125rem);      
    }
  }

  input[type=text], button {
    width: 100%;
  }

  textarea {
    height: 6rem;
    resize: none;

    @media screen and (max-width: 720px) {
      font-size: calc(1rem + 0.125rem);
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;

    svg {
      margin-right: 0.25rem;
    }
  }
`;