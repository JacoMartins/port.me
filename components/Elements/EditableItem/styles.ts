import styled from "styled-components";

export const Main = styled.div`
  height: auto;
  width: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 0.25rem;
  cursor: pointer;

  padding: 0.5rem;
  
  &:hover{
    background: rgba(255, 255, 255, 0.06);
  }

  p {
    margin: 0;
  }
`;

export const ShowActionBallon = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: var(--dark-mode-background);

  border: solid 1px rgba(255, 255, 255, 0.2);
  border-radius: 0.375rem;
  padding: 0.25rem;

  z-index: 10;

  animation: openActionBallon 0.15s ease-out forwards;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-radius: 0.25rem;

    padding: 0.5rem;

    background: transparent;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      filter: brightness(1);
    }
  }
`;