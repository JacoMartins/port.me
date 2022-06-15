import { useState } from 'react'
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import { Header } from './components/Base/Header';
import { Main } from './home_style';

Modal.setAppElement('#root');

function App() {
  const [theme, setTheme] = useState('light');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  function findProfile() {
    event?.preventDefault();

    navigate(`/profile/${username}`)
  }

  return (
    <>
        <Header showBackButton={false} showLogo={true} />
        <Main>
          <div className='LogoContainer'>
            {/* <h1>port<span>.me</span></h1> */}
            <h2>Pesquise portfolios pelo nome de usuário</h2>
          </div>

          <div className='FindPorfolioContainer'>
            <form onSubmit={findProfile}>
              <input type='text' placeholder='Buscar perfil' onChange={() => { setUsername((event?.target as HTMLInputElement).value) }} />
            </form>
          </div>

          <p>Jacó Martins (maio de 2022)</p>
        </Main>
    </>
  )
}

export default App
