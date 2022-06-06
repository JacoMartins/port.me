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
import NotFound from "../NotFound";

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

interface Section {
  id: string;
  title: string;
}

export default function Profile() {
  const { username } = useParams();

  const [profile, setProfile] = useState<Profile>({});
  const [sections, setSections] = useState([]);
  const [isDataReady, setIsDataReady] = useState(false);
  const [status, setStatus] = useState(102);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      await api.get(`/profile?username=${username}`).
        then(res => {
          setProfile(res.status === 200 ? res.data : setStatus(404));
          setIsDataReady(true);
        });

      await api.get(`/sections?username=${username}`)
        .then(res => {
          setSections(res.data);
          setIsDataReady(true);
        });

      console.log(sections);
    };

    fetch();
  }, []);

  if (status === 404) {
    return (
      <NotFound />
    );
  }

  return (
    <main>
      <Header showBackButton={true} showLogo={true} />
      <ProfileContainer>
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
          sections.map((section:Section) => (
            <Section key={section.id}>
              <SectionContainer>
                <div className="MainContainer">
                  <Title>
                    {section.title}
                  </Title>

                  <h2>Primeiras seções tiradas do back end</h2>
                  <P600>legal pra caramba!</P600>
                </div>
              </SectionContainer>
            </Section>
          ))
          :
          <LoadContainer>
            <CircleNotch className="load" size={32} />
          </LoadContainer>
      }
    </main>
  )
}