import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba(255, 255, 255, 0.);
  border: solid 1px rgba(255, 255, 255, 0.25);
  border-radius: 0.5rem;
  padding: 0.5rem;

  .DemoContainer{
    border: solid 1px rgba(255, 255, 255, 0.25);
    width: 100%;
    border-radius: 0.25rem;
    padding: 1.5rem;

    button {
      margin: 0;
    }

    >div {
      width: auto;
    }

    .Frame {
      height: 8rem;
      margin-bottom: 0;
    }
  }

  .Demo.TextContainer {
    margin-top: 0.5rem;
    padding: 0.25rem;
    text-align: left;
    width: 100%;

    p:first-child {
      margin-bottom: 0;
    }

    p:last-child {
      margin-bottom: 0rem;
    }
  }
`;