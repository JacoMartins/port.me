import { CircleNotch, User } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { AuthContext } from "../../contexts/AuthContext";
import { P600 } from "../../global";
import { api } from "../../services/api";
import { LoadContainer } from "../Profile/styles";
import { Container, ProfileContainer, ProfilePicture } from "./styles";

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

export default function EditProfile() {
  const { account } = useContext(AuthContext);
  const { username } = useParams();
  const [status, setStatus] = useState<number>(102);
  const [profile, setProfile] = useState<Profile>({});
  const [isDataReady, setIsDataReady] = useState<boolean>(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [greeting, setGreeting] = useState('');
  const [description, setDescription] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [profileCover, setProfileCover] = useState('');
  const [isSendingData, setIsSendingData] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        await api.get(`/profile?username=${account?.username}`).
          then(res => {
            setProfile(res.data);
            setStatus(200);
            setIsDataReady(true);

            setFirstName(res.data.first_name);
            setLastName(res.data.last_name);
            setGreeting(res.data.greeting);
            setDescription(res.data.description);
            setProfilePicture(res.data.profile_picture);
            setProfileCover(res.data.profile_cover);
          });
      } catch (GET) {
        setStatus(404);
        return;
      }
    };

    fetch();
  }, []);

  async function updateProfile() {
    event?.preventDefault();
    setIsSendingData(true);

    await api.put('/profile', {
      first_name: firstName,
      last_name: lastName,
      greeting,
      description,
      profile_picture: profilePicture,
      profile_cover: profileCover
    })

    setIsSendingData(false);
  }

  return (
    <main>
      <Header showLogo={true} showBackButton={true} />
      <Container>
        <div className="MainContainer">
          {isDataReady ? <>
            <h1>Editar Perfil</h1>

            <h2>Prévia</h2>
            <ProfileContainer src={profile.profile_cover as string}>

              <div className="MainContainer">
                <div className="TextContainer">
                  <h1>{greeting} <span>{firstName} {lastName}</span></h1>
                  <P600>{description}</P600>
                </div>
                <ProfilePicture src={profilePicture as string}>
                  <User size={128} weight='regular' />
                </ ProfilePicture>
              </div>

              <div className="Background" />

            </ProfileContainer>

            <form onSubmit={updateProfile}>
              <div className="NameInputs">
                <input type='text' placeholder='Primeiro nome' defaultValue={firstName} onChange={(event) => setFirstName(event.target.value)} />
                <input type='text' placeholder='Último nome' defaultValue={lastName} onChange={(event) => setLastName(event.target.value)} />
              </div>

              <input type='text' placeholder='Frase de saudação' defaultValue={greeting} onChange={(event) => setGreeting(event.target.value)} />
              <textarea placeholder='Biografia' defaultValue={description} onChange={(event) => setDescription(event.target.value)} />

              <hr></hr>

              <div className="Pictures">
                <input type='text' placeholder='Foto de perfil (Em desenvolvimento)' defaultValue={profilePicture} onChange={(event) => setProfilePicture(event.target.value)} />
                <input type='text' placeholder='Foto de capa (Em desenvolvimento)' defaultValue={profileCover} onChange={(event) => setProfileCover(event.target.value)} />
              </div>

              <hr></hr>

              {isSendingData ?
                <button type="submit" disabled><CircleNotch size={16} weight='bold' className="load" />Enviando...</button>
                :
                <button type="submit">Enviar</button>
              }

            </form>
          </>
          :
            <LoadContainer>
              <CircleNotch className="load" size={32} />
            </LoadContainer>}

        </div>
      </Container>
    </main>
  )
}