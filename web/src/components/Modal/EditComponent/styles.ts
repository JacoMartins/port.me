import styled from 'styled-components';

export const Div = styled.div`

`;

export const Container = styled.form`
  background: var(--dark-mode-background);
  height: auto;
  width: auto;

  .MainContainer {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  h2{
    margin-bottom: 1rem;
  }

  p{
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