import { useContext, useState } from 'react'
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Main } from './home_style';
import { api } from './services/api';

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
      <Main>
        <div className='LogoContainer'>
          <h1>port<span>.me</span></h1>
          <p>Pesquise portfolios pelo nome de usuário</p>
        </div>

        <div className='FindPorfolioContainer'>
          <form onSubmit={findProfile}>
            <input type='text' placeholder='Buscar perfil' onChange={() => { setUsername((event?.target as HTMLInputElement).value) }} />
          </form>
        </div>

        <p>Não tem um perfil? <a><Link to='/post'>Poste um! (Em testes)</Link></a></p>
      </Main>
    </>
  )
}

export default App
