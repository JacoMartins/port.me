import { EventHandler, useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom';
import { api } from "../../services/api";
import { ColumnContainer, GoBackButton, LoadContainer, ProfileContainer, ProfilePicture } from "./styles";
import { ArrowLeft, At, CircleNotch, Cookie, Cursor, InstagramLogo, Keyboard, PaperPlaneRight, Pencil, Plus, Target, Trash, User, WhatsappLogo } from 'phosphor-react';
import { IconButton } from "../../components/Information/IconButton";
import { IconButtonContainer } from "../../components/Information/IconButton/styles";
import { P600, P850, TransparentButton } from "../../global";
import { BlockHeader } from "../../components/Information/BlockHeader";
import { IconTextContainer } from "../../components/Information/IconText/styles";
import { IconText } from "../../components/Information/IconText";
import { InfoGraphic } from "../../components/Information/InfoGraphic";
import { InfoGraphicContainer } from "../../components/Information/InfoGraphic/styles";
import { FrameContainer } from "../../components/Information/Frame/styles";
import { Frame } from "../../components/Information/Frame";
import { Header } from "../../components/Base/Header";
import NotFound from "../NotFound";
import { Add } from "../../components/Base/Add";
import { NewSection } from "../../components/Modal/NewSection";
import { AuthContext } from "../../contexts/AuthContext";
import { Section } from "../../components/Base/Section";
import { SectionController } from "../../components/Controller/SectionController";
import { ProfileHeader } from "../../components/Base/ProfileHeader";

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

export default function Profile() {
  const { account } = useContext(AuthContext);
  const { username } = useParams();

  const [profile, setProfile] = useState<Profile>({});
  const [isDataReady, setIsDataReady] = useState(false);
  const [status, setStatus] = useState(102);

  const [updateSection, setUpdateSection] = useState(false);

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
      } catch (GET) {
        setStatus(404);
        return;
      }
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

  function handleSectionUpdate(){
    setUpdateSection(!updateSection);
  }

  return (
    <main>
      <NewSection isOpen={isNewSectionModalOpen} onRequestClose={handleCloseNewSectionModal} id={profile.id} handleSectionUpdate={handleSectionUpdate} />
      <Header showBackButton={true} showLogo={true} />
      
      <ProfileHeader username={username} />

      <SectionController handleSectionUpdate={handleSectionUpdate} updateSection={updateSection} username={username} profile={profile} />

      <Add openNewSectionModal={handleOpenNewSectionModal} />
    </main>
  )
}