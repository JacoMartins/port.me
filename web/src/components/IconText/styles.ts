import styled from 'styled-components';

export const IconTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  margin-top: 1rem;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: auto;
  background: transparent;
  outline: 0;
  border: 0;
  /* border: solid 2px black; */
  justify-content: center;
  padding: 0.75rem;
  max-width: 23.5rem;

  transition: 0.15s ease-out;

  & + aside {
    margin-top: 2rem;
  }
  
  div /*Main Container*/ {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: left;
    text-align: left;
    color: var(--text-dark-half);
    max-width: 20rem;

    @media screen and (max-width: 30.3125rem) {
    }

    svg {
      align-self: center;
      
      min-height: 2.375rem;
      min-width: 2.375rem;
      max-height: 2.375rem;
      max-width: 2.375rem;
      
      transition: 0.15s ease-in;

      filter: brightness(1);
    }
    
    .TextCotainer {
      display: flex;
      flex-direction: column;
      
      h3{ 
        color: var(--dark-mode-text-850);
        font-weight: 600;
        font-size: 1.125rem;
      }

      p{
        color: var(--dark-mode-text-600);
      }
    }

    svg:last-child {
      min-height: 1.5rem;
      min-width: 1.5rem;
      max-height: 1.5rem;
      max-width: 1.5rem;

      margin-left: 0.75rem;
    }

    svg + .TextCotainer {
      margin-left: 0.5rem;
    }
  }
`;