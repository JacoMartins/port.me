import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { api } from "../../services/api";
import { ProfileContainer, ProfilePicture } from "./styles";
import { ArrowLeft } from 'phosphor-react';

interface Profile {
  username?: string;
  display_name?: string;
  welcome_phrase?: string;
  description?: string;
  profile_picture?: string;
}

export default function Profile() {
  const { username } = useParams();

  const [profile, setProfile] = useState<Profile>({});

  useEffect(() => {
    api.get(`p/${username}`).
      then(response => setProfile(response.data.data));
  }, []);

  return (
    <main>
      <ProfileContainer>
        <button onClick={()=>{window.location.href = '/'}}><ArrowLeft size={24} /></button>

        <div className="MainContainer">
          <div className="TextContainer">
            <h1>{`${profile.welcome_phrase} `}
              <span>{profile.display_name}</span>
            </h1>

            <p>{profile.description}</p>
          </div>

          <ProfilePicture src={profile.profile_picture} />
        </div>
      </ProfileContainer>
    </main>
  )
}