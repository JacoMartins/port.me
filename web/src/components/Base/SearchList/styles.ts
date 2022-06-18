import styled from "styled-components";

interface ProfilePictureProps{
  src?: string;
}

export const Main = styled.main`
  position: relative;
  background: var(--dark-mode-background);
  border: solid 1px rgba(255, 255, 255, 0.2);
  margin-top: 1rem;
  border-radius: 0.5rem;
  padding: 0;
  max-height: 18rem;
  width: auto;
  overflow: auto;

  div.ListItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    padding: 0.5rem 0.75rem;
    list-style: none;
    transition: 0.15s;
    cursor: pointer;

    &:hover{
      background: rgba(255, 255, 255, 0.08);
    }

    &:active {
      background: rgba(255, 255, 255, 0.04);
      transform: scale(0.99);
    }

    .TextContainer {
      display: flex;
      flex-direction: column;
      margin-left: 0.5rem;
      padding: 0;
    }
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 3rem;
  background-image: url(${(props: ProfilePictureProps) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 20rem;
  border: ${(props: ProfilePictureProps) => props.src ? 'none' : 'solid 1px rgba(255, 255, 255, 0.6)'};

  @media screen and (max-width: 720px){
    height: 3rem;
    width: 3.5rem;
  }

  svg {
    display: ${(props: ProfilePictureProps) => props.src ? 'none' : 'block'};
    color: rgba(255, 255, 255, 0.6);
  }
`;
