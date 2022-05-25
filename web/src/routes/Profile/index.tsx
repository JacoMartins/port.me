import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { api } from "../../services/api";
import { GoBackButton, ProfileContainer, ProfilePicture, Section } from "./styles";
import { ArrowLeft, At, InstagramLogo, WhatsappLogo } from 'phosphor-react';
import { IconButton } from "../../components/IconButton";
import { IconButtonContainer } from "../../components/IconButton/styles";
import { P600, P850 } from "../../global";
import { BlockHeader } from "../../components/BlockHeader";

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
        <GoBackButton onClick={() => { window.location.href = '/' }}><ArrowLeft size={24} /></GoBackButton>

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

      <Section>
        <div className="MainContainer">
          <h1>
            Sobre mim
          </h1>

          <h2>Minhas raízes</h2>
          <P600>Sou Bruna Félix, nascida em Fortaleza no Ceará, UX/UI, Designer Gráfica, Passionata por desenvolvimento de gráficos!</P600>
          <BlockHeader title="Contatos" description="Fale comigo">
            <IconButtonContainer>
              <IconButton title="Me chame no Whatsapp" description="+55 (85) 99418-6689" icon={<WhatsappLogo />} action={() => { console.log('show') }} arrowRight={true} />
              <IconButton title="Email" description="jaco.contato@gmail.com" icon={<At />} action={() => { console.log('show') }} arrowRight={true} />
              <IconButton title="Instagram" description="@jaco.in" icon={<InstagramLogo />} action={() => { console.log('show') }} arrowRight={true} />
            </IconButtonContainer>
          </BlockHeader>
        </div>
      </Section>
    </main>
  )
}