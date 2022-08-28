import styled from 'styled-components';

interface MainButton {
  showActions: boolean;
}

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  gap: 0.25rem;
  position: fixed;
  border-radius: 3rem;
  right: 2rem;
  bottom: 2rem;
  min-width: 3.5rem;
  padding: 0.5rem;
  background: var(--light-mode-blue);
  animation: ${(props:MainButton) => props.showActions? 'openActionsDesktop 0.15s ease-out forwards' : 'openActionsDesktop 0.15s ease-out forwards reversed'};
  overflow: hidden;

  @media screen and (max-width: 720px) {
    flex-direction: column-reverse;
    animation: ${(props:MainButton) => props.showActions? 'openActionsMobile 0.15s ease-out forwards' : 'openActionsMobile 0.15s ease-out forwards reversed'};
  }

  @keyframes openActionsDesktop {
    0%{
      width: 3.5rem;
    }

    100%{
      width: 6.25rem;
    }
  }

  @keyframes openActionsMobile {
    0%{
      height: 3.5rem;
    }

    100%{
      height: 7.25rem;
    }
  }

  button {
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    width: 2.5rem;
    background: var(--light-mode-blue);

    transition: 0.25s;

    @media screen and (max-width: 720px) {
      height: 3rem;
      width: 3rem;
    }
  }

  @media screen and (max-width: 720px) {
    min-width: 4rem;
  }
`;