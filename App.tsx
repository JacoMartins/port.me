import { useState } from 'react'
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import { Header } from './components/Base/Header';
import { SearchList } from './components/Base/SearchList';
import { SubmitInput } from './components/Elements/SubmitInput';
import { P600 } from './global';
import { Main } from './home_style';
import { api } from './services/api';

Modal.setAppElement('#root');

function App() {
  const [theme, setTheme] = useState('light');
  const [searchList, setSearchList] = useState(false);
  const [username, setUsername] = useState<string>();
  const navigate = useNavigate();

  function findProfile() {
    event?.preventDefault();

    username ? navigate(`/profile/${username}`) : null
  }

  function handleChangeInput(event: Event) {
    setUsername((event.target as HTMLInputElement).value);
    (event.target as HTMLInputElement).value? setSearchList(true) : setSearchList(false) ;
  }

  return (
    <>
      <Header showBackButton={false} showLogo={false} />
      <Main>
        <div className='LogoContainer'>
          <h2>Bem vindo(a) ao</h2>
          <h1>port<span>.me</span></h1>
          <P600>Pesquise um portfólio</P600>
        </div>

        <div className='MainContainer'>
          <form onSubmit={findProfile}>
            <SubmitInput placeholder='Buscar portfólio' onChange={handleChangeInput} />
            {searchList && <SearchList username={username} />}
          </form>
        </div>

        <P600>Jacó Martins (maio de 2022)</P600>
      </Main>
    </>
  )
}

export default App
