import { useState } from "react";
import { api } from "../../services/api";
import { Main } from "./styles";

export default function CreateAccount(){
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [welcomePhrase, setWelcomePhrase] = useState('');
  const [description, setDescription] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  async function createProfile() {
    event?.preventDefault();

    await api.post('p', {
      username,
      display_name: displayName,
      welcome_phrase: welcomePhrase,
      description,
      profile_picture: profilePicture
    });

    window.location.href = `/profile/${username}`;
  }

  return(
    <>
      <Main>
        <div className='LogoContainer'>
          <h1>port<span>.me</span></h1>
          <h3>Poste o seu portfolio</h3>
        </div>

        <div className=''>
          <form onSubmit={createProfile}>
            <input type='text' placeholder='Nome de usuário' onChange={() => {setUsername((event?.target as HTMLInputElement).value)}}/>
            <input type='text' placeholder='Nome a ser mostrado' onChange={() => {setDisplayName((event?.target as HTMLInputElement).value)}}/>
            <input type='text' placeholder='Frase de saudação' onChange={() => {setWelcomePhrase((event?.target as HTMLInputElement).value)}}/>
            <input type='text' placeholder='Descrição' onChange={() => {setDescription((event?.target as HTMLInputElement).value)}}/>
            <input type='text' placeholder='Imagem de perfil' onChange={() => {setProfilePicture((event?.target as HTMLInputElement).value)}}/>

            <button type="submit">Submit data</button>
          </form>
        </div>
      </Main>
    </>
  )
}