import styled from "styled-components";

interface PercentageProps {
  value: number;
}

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  width: 16rem;
  height: 4.625rem;
  border-radius: 6px;
  transition: 0.25s;
  color: var(--text-dark);

  .Container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;
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
  width: 14.5rem;
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