import { ArrowLeft } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { GoBackButton, HeaderBody } from './styles';

export function Header({}) {
  const [headerType, setHeaderType] = useState(1);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  window.addEventListener('scroll', ()=>{
    if(window.scrollY < 1) {
      setHeaderType(1);
      console.log(`${headerType}, ${window.scrollY}`);
    } else {
      setHeaderType(0);
      console.log(`${headerType}, ${window.scrollY}`);
    }
  });

  return (
    <HeaderBody headerType={headerType}>
      <div className='Container'>
        <GoBackButton onClick={() => { window.location.href = '/' }}><ArrowLeft size={24} /></GoBackButton>
        <div className='LogoContainer'>
          <h1>port<span>.me</span></h1>
        </div>
      </div>
    </HeaderBody>
  )
}