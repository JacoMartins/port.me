import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom';
import { api } from "../../services/api";
import { ColumnContainer, GoBackButton, LoadContainer, ProfileContainer, ProfilePicture, Section, SectionContainer, Title } from "./styles";
import { ArrowLeft, At, CircleNotch, Cookie, Cursor, InstagramLogo, Keyboard, Trash, User, WhatsappLogo } from 'phosphor-react';
import { IconButton } from "../../components/IconButton";
import { IconButtonContainer } from "../../components/IconButton/styles";
import { P600, P850, TransparentButton } from "../../global";
import { BlockHeader } from "../../components/BlockHeader";
import { IconTextContainer } from "../../components/IconText/styles";
import { IconText } from "../../components/IconText";
import { InfoGraphic } from "../../components/InfoGraphic";
import { InfoGraphicContainer } from "../../components/InfoGraphic/styles";
import { FrameContainer } from "../../components/Frame/styles";
import { Frame } from "../../components/Frame";
import { Header } from "../../components/Header";
import NotFound from "../NotFound";
import { Add } from "../../components/Add";
import Modal from 'react-modal';
import { NewSection } from "../../components/NewSection";
import { AuthContext } from "../../contexts/AuthContext";
import { AxiosRequestConfig } from "axios";

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
}

interface Section {
  id: string;
  title: string;
}

export default function Profile() {
  const { account } = useContext(AuthContext);
  const { username } = useParams();

  const [profile, setProfile] = useState<Profile>({});
  const [sections, setSections] = useState([]);
  const [isDataReady, setIsDataReady] = useState(false);
  const [status, setStatus] = useState(102);

  const navigate = useNavigate();

  const [isNewSectionModalOpen, setIsNewSectionModalOpen] = useState(false);

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

        await api.get(`/sections?username=${username}`)
          .then(res => {
            setSections(res.data);
            setStatus(200);
            setIsDataReady(true);
          });
      } catch (GET) {
        setStatus(404);
        return;
      }

      console.log(profile);
    };

    fetch();
  }, []);

  if (status === 404) {
    return (
      <NotFound />
    );
  }

  function handleOpenNewSectionModal() {
    setIsNewSectionModalOpen(true);
  }

  function handleCloseNewSectionModal() {
    setIsNewSectionModalOpen(false);
  }

  async function handleDeleteSection(id: string) {
    event?.preventDefault();

    await api.delete('/section', {
      data: {
        id
      }
    });

    navigate(`/profile/${username}`); navigate(0);
  }

  return (
    <main>
      <NewSection isOpen={isNewSectionModalOpen} onRequestClose={handleCloseNewSectionModal} />
      <Header showBackButton={true} showLogo={true} />
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
              <CircleNotch size={32} className="load" />
          }
        </div>
      </ProfileContainer>

      {
        isDataReady ?
          sections.map((section: Section) => (
            <Section key={section.id}>
              <SectionContainer>
                <div className="MainContainer">
                  {isItMyAccount ?
                    <button type="button" onClick={() => handleDeleteSection(section.id)}><Trash size={16} weight='bold' /></button>
                  : null}
                  <Title>
                    {section.title}
                  </Title>

                  <h2>Seções</h2>
                </div>
              </SectionContainer>
            </Section>
          ))
          :
          <LoadContainer>
            <CircleNotch className="load" size={32} />
          </LoadContainer>
      }
      <Add openNewSectionModal={handleOpenNewSectionModal} />
    </main>
  )
}