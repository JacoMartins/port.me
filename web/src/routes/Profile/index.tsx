import { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom';
import { api } from "../../services/api";
import { ColumnContainer, GoBackButton, LoadContainer, ProfileContainer, ProfilePicture, Section, SectionContainer, Title } from "./styles";
import { ArrowLeft, At, CircleNotch, Cookie, Cursor, InstagramLogo, Keyboard, WhatsappLogo } from 'phosphor-react';
import { IconButton } from "../../components/IconButton";
import { IconButtonContainer } from "../../components/IconButton/styles";
import { P600, P850 } from "../../global";
import { BlockHeader } from "../../components/BlockHeader";
import { IconTextContainer } from "../../components/IconText/styles";
import { IconText } from "../../components/IconText";
import { InfoGraphic } from "../../components/InfoGraphic";
import { InfoGraphicContainer } from "../../components/InfoGraphic/styles";
import { FrameContainer } from "../../components/Frame/styles";
import { Frame } from "../../components/Frame";
import { Header } from "../../components/Header";

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
  const [isDataReady, setIsDataReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`p/${username}`).
      then(response => {
        setProfile(response.data.data);
        setIsDataReady(true);
      });
  }, []);

  if (!profile) {
    navigate('/404');
    return (
      <LoadContainer>
        <CircleNotch className="load" size={32} />
      </LoadContainer>
    );
  }

  return (
    <main>
      <Header />
      <ProfileContainer>
        <div className="MainContainer">
          {
            isDataReady ?
              <>
                <div className="TextContainer">
                  <h1>
                    {`${profile.welcome_phrase} `}
                    <span>{profile.display_name}</span>
                  </h1>

                  <p>{profile.description}</p>

                  <button type="button">Entrar em Contato</button>
                </div>

                <ProfilePicture src={profile.profile_picture} />
              </>
              :
              <CircleNotch size={32} className="load" />
          }
        </div>
      </ProfileContainer>

      {
        isDataReady ?
          <Section>
            <SectionContainer>
              <div className="MainContainer">
                <Title>
                  Available components
                </Title>

                <h2>Sub Header</h2>
                <P600>Paragraph</P600>

                <BlockHeader title="Category divider" description="You can put anything you want inside here">
                  <InfoGraphicContainer>
                    <InfoGraphic title="Percentage Info Component" percentage={60} />
                    <IconButton title="Button" description="Interactive Button with an icon" icon={<Cursor size={24} />} arrowRight={true}/>
                    <IconText title="Informational Text" description="Type any text you want here, and choose the icon you like the most." icon={<Keyboard weight='light' size={24} />} />
                    <ColumnContainer>
                      <Frame src={profile.profile_picture} />
                      <P600>Insert frames to make your porfolio more interesting.</P600>
                    </ColumnContainer>
                  </InfoGraphicContainer>
                </BlockHeader>
              </div>
            </SectionContainer>
          </Section>
          :
          <LoadContainer>
            <CircleNotch className="load" size={32} />
          </LoadContainer>
      }
    </main>
  )
}