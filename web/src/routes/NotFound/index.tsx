import { Main } from './styles';
import NotFoundIllustration from '../../resources/images/404.svg';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function NotFound() {
  const { where } = useParams();

  return (
    <Main>
      <div className='Container'>
        <img src={NotFoundIllustration} />

        <h1>Desculpe, não conseguimos localizar o que você pediu.</h1>
      </div>
      
      <a href="https://storyset.com/web">Web illustrations by Storyset</a>
    </Main>
  )
}