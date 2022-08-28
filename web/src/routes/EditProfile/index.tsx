import { Camera, CircleNotch, User } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Base/Header";
import { AuthContext } from "../../contexts/AuthContext";
import { P600 } from "../../global";
import { api } from "../../services/api";
import NotFound from "../NotFound";
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
  const [pictureFile, setPictureFile] = useState<FileList | null>();
  const [profileCover, setProfileCover] = useState('');
  const [isSendingData, setIsSendingData] = useState(false);
  const navigate = useNavigate();

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

  if (!account?.username) {
    return (
      <NotFound />
    )
  }

  async function updateProfile() {
    event?.preventDefault();
    setIsSendingData(true);

    const formData = new FormData();
    formData.append('file', (pictureFile as FileList)[0], (pictureFile as FileList)[0].name);

    Promise.all([
      await api.put('/profile', {
        first_name: firstName,
        last_name: lastName,
        greeting,
        description,
        // profile_picture: profilePicture,
        profile_cover: profileCover
      }),

      await api.patch('/profile/avatar', formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    ]);

    setIsSendingData(false);
    navigate(`/profile/${profile.username}`);
    navigate(0);
  }

  return (
    <main>
      <Header showLogo={true} showBackButton={true} />
      <Container>
        <div className="MainContainer">
          {isDataReady ? <>
            <h1>Editar Perfil</h1>

            <h2>Prévia</h2>
            <ProfileContainer src={profileCover as string}>

              <div className="MainContainer">
                <div className="TextContainer">
                  <h1>{greeting} <span>{firstName} {lastName}</span></h1>
                  <P600>{description}</P600>
                </div>
                <ProfilePicture src={profilePicture as any}>
                  <User size={128} weight='regular' />
                  <button>
                    <input type="file" onChange={event => setPictureFile(event.target.files)} />
                    <Camera size={24} weight='regular' />
                  </button>
                </ProfilePicture>
              </div>

              <div className="Background" />

            </ProfileContainer>

            <br></br>
            <P600>Por enquanto estamos trazendo as imagens para a aplicação por meio de URLs pois ainda não temos onde guardá-las, a aplicação ainda está em fase de desenvolvimento.</P600>

            <form onSubmit={updateProfile}>
              <div className="NameInputs">
                <input type='text' placeholder='Primeiro nome' defaultValue={firstName} onChange={(event) => setFirstName(event.target.value)} />
                <input type='text' placeholder='Último nome' defaultValue={lastName} onChange={(event) => setLastName(event.target.value)} />
              </div>

              <input type='text' placeholder='Frase de saudação' defaultValue={greeting} onChange={(event) => setGreeting(event.target.value)} />
              <textarea placeholder='Biografia' defaultValue={description} onChange={(event) => setDescription(event.target.value)} />

              <hr></hr>

              <div className="Pictures">
                <P600>Foto de perfil</P600>
                <input type='text' placeholder='Foto de perfil (Em desenvolvimento)' defaultValue={profilePicture as string | undefined} onChange={(event) => setProfilePicture(event.target.value as any)} />

                <P600>Capa do perfil</P600>
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