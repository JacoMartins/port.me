import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background: transparent;
  text-align: left;
  border-radius: 0;

  &:hover{
    background: rgba(255, 255, 255, 0.05);
    filter: brightness(1);
  }

  svg{
    margin-right: 0.375rem;
  }
`;