import { Main } from './styles';
import NotFoundIllustration from '../../resources/images/404.2.svg';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { P600 } from '../../global';

export default function NotFound() {
  const { where } = useParams();

  return (
    <Main>
      <div className='Container'>
        <img src={NotFoundIllustration} />

        <h2>Desculpe, não conseguimos localizar o que você pediu.</h2>
      </div>
      
      <P600>Web illustrations by <a href="https://storyset.com/web">Storyset</a></P600>
    </Main>
  )
}