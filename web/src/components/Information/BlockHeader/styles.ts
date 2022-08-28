import styled from 'styled-components';

export const Aside = styled.aside`
  height: auto;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;

  @media screen and (max-width: 870px) {
    text-align: center;
    margin-top: 2.5rem;
  }

  .BlockHeader.TextContainer {
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    flex-wrap: wrap;
    margin-bottom: 1rem;

    h2{
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 1.5rem;
      letter-spacing: -0.05em;
      text-align: center;
    }

    p{
      font-size: 0.875rem;
      line-height: 1.125rem;
      margin-top: 0.25rem;
      width: 15rem;
      text-align: center;
    }
  }
`;