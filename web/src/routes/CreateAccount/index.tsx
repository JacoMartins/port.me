import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { Main } from "./styles";
import {CircleNotch} from 'phosphor-react';

export default function CreateAccount() {
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [welcomePhrase, setWelcomePhrase] = useState('');
  const [description, setDescription] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const [isSendingData, setIsSendingData] = useState(false);
  const [isAlreadySent, setIsAlreadySent] = useState(false);

  async function createProfile() {
    event?.preventDefault();

    setIsSendingData(true);

    await api.post('p', {
      username,
      display_name: displayName,
      welcome_phrase: welcomePhrase,
      description,
      profile_picture: profilePicture
    });

    setIsSendingData(false);
    setIsAlreadySent(true);
  }

  return (
    <>
      <Main>
        <div className='LogoContainer'>
          <h1>port<span>.me</span></h1>
          <h3>Poste o seu portfolio</h3>
        </div>

        <div className=''>
          <form onSubmit={createProfile}>
            <input type='text' placeholder='Nome de usuário' onChange={() => { setUsername((event?.target as HTMLInputElement).value) }} />
            <input type='text' placeholder='Nome a ser mostrado' onChange={() => { setDisplayName((event?.target as HTMLInputElement).value) }} />
            <input type='text' placeholder='Frase de saudação' onChange={() => { setWelcomePhrase((event?.target as HTMLInputElement).value) }} />
            <input type='text' placeholder='Descrição' onChange={() => { setDescription((event?.target as HTMLInputElement).value) }} />
            <input type='text' placeholder='Imagem de perfil' onChange={() => { setProfilePicture((event?.target as HTMLInputElement).value) }} />

            {isSendingData ?
              <button disabled type="submit"><CircleNotch size={16} weight='bold' />Posting...</button>
              :
              !isAlreadySent?
              <button type="submit">Submit data</button>
              :
              <Link className="link" to={`/profile/${username}`}>
                <button>Go to your profile</button>
              </Link>
            }
          </form>
        </div>
      </Main>
    </>
  )
}