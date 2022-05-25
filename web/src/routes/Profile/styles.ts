import styled from "styled-components";

interface ProfilePictureProps {
  src?: string;
}

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: calc(100vh);
  width: 100%;
  background: var(--dark-mode-cover);
  
  .MainContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 720px;
    
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
        
        span{
          color: var(--dark-mode-blue);
        }
      }

      p{
        color: var(--dark-mode-text-600);
      }
    }
  }
`;

export const Section = styled.section`
  border-top: solid 2px rgba(255,255,255, 0.08);
  padding: 3rem 2.5rem;
  text-align: center;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  @media screen and (max-width: 720px){
    flex-direction: column-reverse;
  }
`;

export const ProfilePicture = styled.div`
  height: 18rem;
  width: 20rem;
  background-image: url(${(props: ProfilePictureProps) => props.src});
  background-size: cover;
  border-radius: 20rem;
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