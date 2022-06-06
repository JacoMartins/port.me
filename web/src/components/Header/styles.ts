import styled from "styled-components";

interface HeaderStylesProps{
  headerType: number;
}

export const HeaderBody = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.5rem;
  background: ${(props:HeaderStylesProps) => props.headerType === 1? 'rgba(0,0,0, 0.00)' : 'rgba(24, 25, 28, 0.65)'};
  backdrop-filter: ${(props:HeaderStylesProps) => props.headerType === 1? 'blur(0px)' : 'blur(30px)'};
  outline: ${(props:HeaderStylesProps) => props.headerType === 1? '0px solid rgba(255,255,255, 0.08)' : '2px solid rgba(255,255,255, 0.08)'};
  z-index: 9999;
  padding: 0 1rem;

  @media screen and (max-width: 720px){
    height: 4.5rem;
  }

  .Container{
    width: 1024px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .LogoContainer {
      justify-self: left;
      @media screen and (max-width: 720px){
        justify-self: center;
      }
    
      h1{
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
        line-height: 1.5rem;

        text-align: center;

        @media screen and (max-width: 720px){
          font-size: 1.75rem;
        }

        span{
          color: var(--dark-mode-blue);
        }
      }

      p{
        color: var(--dark-mode-text-500);
      }
    }

    .NavContainer{
      position: relative;
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
    }
  }
`;

export const GoBackButton = styled.button`
    position: relative;
    background: transparent;
    outline: 0;
    border: 0;
    padding: 0;
    margin: 0 1rem;
    
    transition: 0.2s;

    &:hover{
      filter: brightness(0.8);
      transform: scale(110%);
    }
    
    &:active {
      filter: brightness(0.8);
      transform: scale(100%);
    }
`;