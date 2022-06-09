import styled from 'styled-components';

export const Div = styled.div`
  
`;

export const Container = styled.form`
  background: var(--dark-mode-background);
  height: auto;
  width: auto;

  h2{
    margin-bottom: 1rem;
  }

  p{
    margin-bottom: 0.5rem;
  }

  input + h2 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  input[type=text], button {
    width: 100%;
  }

  button {
    margin-top: 1rem;
  }
`;