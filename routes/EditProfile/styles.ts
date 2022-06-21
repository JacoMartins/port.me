import styled from "styled-components";

interface ProfilePictureProps {
  src: string;
}

export const Container = styled.div`
  padding: 6rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  
  .MainContainer {
    display: flex;
    flex-direction: column;
    min-width: 240px;
    width: 1000px;

    h1 {
      margin-bottom: 1rem;
    }
    h2{
      margin-bottom: 0.5rem;
    }

    
    form {
      margin-top: 1.5rem;
      gap: 1rem;
      
      p {
        margin-bottom: 0.375rem;
      }
      
      .NameInputs {
        display: flex;
        flex-wrap: nowrap;
        gap: 0.375rem;
      }

      input {
        color: var(--dark-mode-text-500);

        &:focus {
          color: var(--dark-mode-text-850);
        }
      }

      hr{
        margin: 0rem 0.5rem 0.5rem 0.5rem;
        border: 0;
      }

      input, button, textarea {
        width: 100%;
        margin-bottom: 0.5rem;
        padding: 0.75rem 0.5rem;
        
        svg {
          margin-right: 0.25rem;
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    @media screen and (max-width: 720px){
      border: 0px solid rgba(255, 255,255, 0.2);
      
      input, button, textarea {
        padding: 0.75rem 0.75rem;
        font-size: 1.125rem;
        border-radius: 0.5rem;
      }
    }
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 12rem;
  min-width: 14rem;
  background-image: url(${(props: ProfilePictureProps) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 20rem;
  border: ${(props: ProfilePictureProps) => props.src ? 'none' : 'solid 2px var(--white-850)'};

  button {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    width: 2.5rem;
    margin: 9.5rem 0 0 11rem;
    overflow: hidden;

    @media screen and (max-width: 720px) {
      height: 3rem;
      width: 3rem;
      margin: 10rem 0 0 12.5rem;
    }

    svg {
      min-width: 1.5rem;
      max-width: 1.5rem;
      min-height: 1.5rem;
      max-height: 1.5rem;

      @media screen and (max-width: 720px) {
        min-width: 1.75rem;
        max-width: 1.75rem;
        min-height: 1.75rem;
        max-height: 1.75rem;
      }
    }

    input[type=file]{
      position: absolute;
      margin: 0;
      top: 0;
      left: 0;
      height: 3rem;
      width: 3rem;
      opacity: 0;
      cursor: pointer;

      ::-webkit-file-upload-button {
        display: none;
      }

    }
  }

  @media screen and (max-width: 720px){
    height: 14rem;
    width: 16rem;
  }

  > svg {
    display: ${(props: ProfilePictureProps) => props.src ? 'none' : 'block'};
  }
`;

export const ProfileContainer = styled.div`
  padding: 3rem;
  background-image: url(${({ src }: ProfilePictureProps) => src});
  background-color: rgba(100, 100, 100, 1);
  background-blend-mode: multiply;
  background-position: center;
  background-size: cover;
  border-radius: 0.5rem;
  display: flex;
  
  width: auto;
  
  @media screen and (max-width: 720px) {
    text-align: center;
  }
  
  .MainContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 8rem;
    
    h1 {
      margin-bottom: 1rem;
      font-weight: 500;

      @media screen and (max-width: 720px){
        margin-bottom: 2rem;
      }
      
      span{
        font-weight: 600;
        color: var(--dark-mode-blue);
      }
    }

    p {
      max-width: 26.25rem;
    }

    @media screen and (max-width: 720px) {
      flex-direction: column-reverse;
      gap: 2rem;
    }
  }
`;