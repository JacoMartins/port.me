import styled from "styled-components";

interface ProfilePictureProps {
  src?: string;
}

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: auto;
  padding: 6.5rem 3rem 3rem 3rem;
  width: 100%;
  z-index: 0;

  overflow: hidden;

  background-color: rgba(75, 75, 75, 1);
  background-image: url(${(props: ProfilePictureProps) => props.src});
  background-blend-mode: multiply;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 480px){
    padding: 7.5rem 3rem 4rem 3rem;
  }

  .MainContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 720px;
    z-index: 0;
    
    @media screen and (max-width: 720px){
      flex-direction: column-reverse;
      gap: 2rem;

      .TextContainer{
        text-align: center;
      }
    }

    .TextContainer {
      width: 22rem;
      h1 {
        margin-bottom: 1rem;
        font-weight: 500;
        
        span{
          font-weight: 600;
          color: var(--dark-mode-blue);
        }
      }

      p{
        color: var(--dark-mode-text-600);
        margin-bottom: 2rem;
      }
      button{
        margin-right: 0.375rem;  
      }
    }
  }
`;


export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 14rem;
  width: 16rem;
  background-image: url(${(props: ProfilePictureProps) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 20rem;
  border: ${(props: ProfilePictureProps) => props.src ? 'none' : 'solid 2px var(--white-850)'};

  @media screen and (max-width: 720px){
    height: 14rem;
    width: 16rem;
  }

  svg {
    display: ${(props: ProfilePictureProps) => props.src ? 'none' : 'block'};
  }
`;

export const GoBackButton = styled.button`
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: transparent;
    outline: 0;
    border: 0;
    
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

export const LoadContainer = styled.div`
  height: auto;
  width: 100%;
  padding: 3.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;

  p{
    width: 75%;
  }

  justify-content: center;
  align-items: center;
`;