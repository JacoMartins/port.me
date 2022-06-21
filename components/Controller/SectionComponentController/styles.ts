import styled from "styled-components";

export const ComponentButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0);
  border: solid 1px rgba(255, 255, 255, 0.2);

  &.margin {
    margin-top: 0.5rem;
  }
  
  svg.margin {
    margin-right: 0.375rem;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    filter: brightness(1);
  }
`;

export const P600 = styled.p`
  &:first-child {
    margin-top: 0.5rem;
  }

  color: rgba(255, 255, 255, 0.6);
`;