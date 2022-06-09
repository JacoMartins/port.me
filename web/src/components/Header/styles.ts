import styled from "styled-components";

interface HeaderStylesProps{
  headerType: number;
}

interface ProfilePictureProps {
  src?: string;
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
  z-index: 998;
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
      display: flex;
      flex-direction: row;
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

export const LoginButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: transparent;
  border: solid 0px var(--light-mode-blue);
  border-radius: 90rem;
  font-size: 1.125rem;
  margin: 1rem 0;
  padding: 0.25rem 0.5rem 0.25rem 0.25rem;

  div {
    margin-right: 0.5rem;
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.75rem;
  width: 2rem;
  background-image: url(${(props: ProfilePictureProps) => props.src});
  background-size: cover;
  border-radius: 20rem;
  border: ${(props: ProfilePictureProps) => props.src? 'none' : 'none'};

  @media screen and (max-width: 720px){
    height: 1.75rem;
    width: 2rem;
  }

  svg {
    display: ${(props: ProfilePictureProps) => props.src? 'none' : 'block'};
  }
`;