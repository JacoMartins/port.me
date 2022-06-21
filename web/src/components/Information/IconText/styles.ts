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
  align-items: center;
  height: auto;
  background: transparent;
  outline: 0;
  border: 0;
  justify-content: center;
  padding: 0.75rem;
  width: 23.5rem;

  transition: 0.15s ease-out;

  & + aside {
    margin-top: 2rem;
  }
  
  .IconText.MainContainer /*Main Container*/ {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: left;
    flex-wrap: nowrap;
    text-align: left;
    color: var(--text-dark-half);
    width: 20rem;
    gap: 1.5rem;

    svg {
      align-self: center;
      
      min-height: 2.375rem;
      min-width: 2.375rem;
      max-height: 2.375rem;
      max-width: 2.375rem;
      
      transition: 0.15s ease-in;

      filter: brightness(1);
    }
    
    .TextContainer {
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: left;
      text-align: left;
      
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