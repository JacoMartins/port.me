import { ArrowLeft, SignOut, Target, User } from 'phosphor-react';
import { createRef, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { AuthContext } from '../../contexts/AuthContext';
import { TransparentButton } from '../../global';
import { api } from '../../services/api';
import { MenuButton } from '../MenuButton';
import { GoBackButton, HeaderBody, LoginButton, Menu, ProfilePicture } from './styles';

interface HeaderProps {
  showLogo: boolean;
  showBackButton: boolean;
}

interface Profile {
  username?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  greeting?: string;
  description?: string;
  profile_picture?: string;
  error?: string;
}

export function Header({ showLogo, showBackButton }: HeaderProps) {
  const [headerType, setHeaderType] = useState(1);
  const [profile, setProfile] = useState<Profile>({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cookies = new Cookies();

  const { isAuthenticated, account, signOut } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      const fetch = async () => {
        await api.get(`/profile?username=${account?.username}`)
          .then(res => setProfile(res.data))
      };

      fetch();
    }
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

  function menuHandle() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <HeaderBody headerType={headerType}>
      <div className='Container'>
        {showLogo ?
          <div className='LogoContainer' onClick={() => navigate('/')}>
            {showBackButton ? <GoBackButton onClick={() => { navigate(-1) }}><ArrowLeft size={24} /></GoBackButton> : null}
            <h1>port<span>.me</span></h1>
          </div>
          :
          null
        }
        <div className='NavContainer'>
          {isAuthenticated ?
            <>
              <LoginButton onClick={menuHandle}>
                <ProfilePicture src={profile.profile_picture}>
                  <User size={18} weight={'bold'} />
                </ProfilePicture>
                {account?.username}
              </LoginButton>

              {isMenuOpen ?
                <Menu className="menu" onBlur={menuHandle}>
                  <MenuButton icon={<User size={16} weight={'bold'} />} onClick={() => { navigate(`/profile/${account?.username}`); navigate(0); }}>Meu perfil</MenuButton>
                  <hr></hr>
                  <MenuButton icon={<SignOut size={16} weight={'bold'} />} onClick={signOut}>Sair</MenuButton>
                </Menu> :
                null
              }
            </>
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