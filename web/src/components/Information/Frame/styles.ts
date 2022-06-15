import styled from 'styled-components';

interface FrameStyledProps {
  src?: string;
}

export const Image = styled.div`
  background: darkgray;
  width: 16rem;
  height: 24rem;
  overflow: hidden;
  border-radius: 1rem;
  background-image: url(${(props: FrameStyledProps) => props.src});
  background-position: center;
  background-size: cover;
  
  transition: 0.25s;
  
  div + & {
    margin-left: 1rem;
  }

  @media screen and (max-width: 37.8125rem) {
    margin-bottom: 1rem;
    div + &{
      margin-left: 0;
    }
    width: 20rem;
    height: 28rem;
  }

  @media screen and (max-width: 42.8125rem) {
    margin-bottom: 1rem;
    width: 20rem;
    height: 28rem;
  }


  @media screen and (max-width: 54.375rem) {
    margin-bottom: 1rem;
    width: 20rem;
    height: 28rem;
  }
`;

export const FrameContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin-top: 1rem;
`;