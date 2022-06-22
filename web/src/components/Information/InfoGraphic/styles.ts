import styled from "styled-components";

interface PercentageProps {
  value: number;
}

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16rem;
  height: 4.625rem;
  border-radius: 6px;
  transition: 0.25s;
  color: var(--text-dark);

  p + & {
    margin-top: 0.75rem;
  }

  @media screen and (max-width: 720px) {
    width: 18rem;
  }

  .Container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;
    width: 14rem;
    
    > h3 {
      line-height: 1.125rem;
      margin-bottom: 0.25rem;
    }

    @media screen and (max-width: 720px) {
      width: 16rem;
    }
  }

  &:hover{
    filter: brightness(0.8);
  } 
`;

export const Percentage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 100%;
  height: 0.25rem;
  border-radius: 1rem;
  background: var(--white-250);
  margin-top: 0.25rem;
  
  &::after{
    content: '';
    width: ${(props: PercentageProps) => `${props.value}%`};
    height: 100%;
    border-radius: 1rem;
    background: var(--dark-mode-blue);
    transition: 0.15s;
    left: 0;
  }
`;

export const InfoGraphicContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  margin-top: 1rem;
`;