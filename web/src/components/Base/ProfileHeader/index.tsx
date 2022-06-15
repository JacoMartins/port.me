import { CircleNotch, User } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { TransparentButton } from "../../../global";
import { LoadContainer, ProfileContainer, ProfilePicture } from "../../../routes/Profile/styles";
import { api } from "../../../services/api";

interface Profile {
  username?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  greeting?: string;
  description?: string;
  profile_picture?: string;
  profile_cover?: string;
  error?: string;
  id?: string;
}

interface ProfileHeaderProps {
  username?: string;
}

export function ProfileHeader({ username }: ProfileHeaderProps) {
  const [profile, setProfile] = useState<Profile>({});
  const [isDataReady, setIsDataReady] = useState(false);
  const [status, setStatus] = useState(102);

  const { account } = useContext(AuthContext);

  const navigate = useNavigate();

  const isItMyAccount = account?.username === username;

  useEffect(() => {
    const fetch = async () => {
      try {
        await api.get(`/profile?username=${username}`).
          then(res => {
            setProfile(res.data);
            setStatus(200);
            setIsDataReady(true);
          });
          
      } catch (GET) {
        return;
      }
    };

    fetch();
  }, []);

  return (
    <ProfileContainer id="ProfileContainer" src={profile.profile_cover}>
      <div className="MainContainer">
        {
          isDataReady ?
            <>
              <div className="TextContainer">
                <h1>
                  {`${profile.greeting} `}
                  <span>{profile.first_name} {profile.last_name}</span>
                </h1>

                <p>{profile.description}</p>

                <button type="button">Entrar em Contato</button>

                {isItMyAccount ?
                  <TransparentButton type="button" onClick={() => navigate('/edit')}>Editar perfil</TransparentButton>
                  : null}
              </div>

              <ProfilePicture src={profile.profile_picture}>
                <User size={128} />
              </ProfilePicture>
            </>
            :
            <LoadContainer>
              <CircleNotch className="load" size={32} />
            </LoadContainer>
        }
      </div>
    </ProfileContainer>
  )
}