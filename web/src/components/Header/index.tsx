import { ArrowLeft, User } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { TransparentButton } from '../../global';
import { api } from '../../services/api';
import { GoBackButton, HeaderBody, LoginButton, ProfilePicture } from './styles';

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

  const { isAuthenticated, account } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      const fetch = api.get(`/profile?username=${account?.username}`)
        .then(res => setProfile(res.data));
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

  return (
    <HeaderBody headerType={headerType}>
      <div className='Container'>
        {showLogo ?
          <div className='LogoContainer'>
            {showBackButton ? <GoBackButton onClick={() => { navigate('/') }}><ArrowLeft size={24} /></GoBackButton> : null}
            <h1>port<span>me</span></h1>
          </div>
          :
          null
        }
        <div className='NavContainer'>
          {isAuthenticated ?
            <LoginButton>
              <ProfilePicture src={profile.profile_picture}>
                <User size={18} weight={'bold'} />
              </ProfilePicture>
              {account?.username}
            </LoginButton>
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