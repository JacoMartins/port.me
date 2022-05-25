import styled from 'styled-components';

interface Props {
}

interface PercentProps {
  value: string;
}

export const Aside = styled.aside`
  height: auto;
  margin-top: 2.5rem;

  @media screen and (max-width: 56.25rem){

  }

  @media screen and (max-width: 54.375rem) {
    text-align: center;
    margin-top: 1.5rem;
  }

  .TextContainer{
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

export const InfoBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  width: 16rem;
  height: 4.625rem;
  border-radius: 6px;
  transition: 0.25s;
  color: var(--text-dark);

  &:hover{
    transform: translate(0, -0.125rem);

    aside{
      div {
        box-shadow: 0px 0px 0.75rem rgba(255, 247, 0, 0.5);   
      }
    }
  } 
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
`;

export const InfoTitle = styled.h3`
  text-align:left;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.1875rem;
  transition: 0.15s;
`;

export const InfoCore = styled.a`
  text-align: left;
  opacity: 0.6;

  font-size: 0.875rem;
  margin-top: 0.375rem;
`;

export const AbilityPercent = styled.aside`
  width: 14.5rem;
  height: 0.25rem;
  border-radius: 1rem;
  background: var(--percentage-bar-dark);
  margin-top: 0.25rem;
  
  div {
    width: ${(props: PercentProps) => props.value};
    height: 100%;
    border-radius: 1rem;
    background: var(--yellow);
    transition: 0.15s;
  }
`;