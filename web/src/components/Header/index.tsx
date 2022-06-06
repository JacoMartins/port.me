import { ArrowLeft } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TransparentButton } from '../../global';
import { GoBackButton, HeaderBody } from './styles';

interface HeaderProps {
  showLogo: boolean;
  showBackButton: boolean;
}

export function Header({ showLogo, showBackButton }: HeaderProps) {
  const [headerType, setHeaderType] = useState(1);
  const [currentPath, setCurrentPath] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  window.addEventListener('scroll', () => {
    if (window.scrollY < 1) {
      setHeaderType(1);
      // console.log(`${headerType}, ${window.scrollY}`);
    } else {
      setHeaderType(0);
      // console.log(`${headerType}, ${window.scrollY}`);
    }
  });

  return (
    <HeaderBody headerType={headerType}>
      <div className='Container'>
        {showBackButton ? <GoBackButton onClick={() => { navigate('/') }}><ArrowLeft size={24} /></GoBackButton> : null}
        {showLogo ?
          <div className='LogoContainer'>
            <h1>port<span>.me</span></h1>
          </div>
          :
          null
        }
        <div className='NavContainer'>
          {isAuthenticated ?
            <button type="button" disabled>Jacó Martins</button>
            : (
              <>
                <TransparentButton type="button" onClick={() => navigate('/create')}>Criar uma conta</TransparentButton>
                <button type="button" onClick={() => navigate('/login')}>Entrar</button>
              </>
            )}
        </div>
      </div>
    </HeaderBody>
  )
}