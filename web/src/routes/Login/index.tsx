import { useContext, useState } from "react";
import { Main } from "./styles";
import { ArrowLeft, Check, CircleNotch } from 'phosphor-react';
import { GoBackButton } from "../Profile/styles";
import { P850 } from "../../global";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  
  const [identificator, setIdentificator] = useState('');
  const [password, setPassword] = useState('');

  const {
    signIn,
    status, 
    isAuthenticated, 
    isLoadingData, 
    account 
  } = useContext(AuthContext);


  function Authenticate() {
    event?.preventDefault();

    const data = {
      identificator,
      password
    };

    signIn(data).then();
  }

  if (status === 201) {window.location.href = `/profile/${account?.username}`}

  return (
    <>
      <Main>
        <GoBackButton onClick={() => { navigate(-1) }}><ArrowLeft size={24} /></GoBackButton>

        <div className='LogoContainer'>
          <h1>port<span>.me</span></h1>
        </div>

        <div className='Container'>
          <h2>Entrar</h2>

          <form onSubmit={Authenticate}>
            <input type='text' placeholder='Email ou nome de usuário' onChange={() => { setIdentificator((event?.target as HTMLInputElement).value) }} />
            <input type='password' placeholder='Senha' onChange={() => { setPassword((event?.target as HTMLInputElement).value) }} />

            {status === 400 ? <P850>{'Nome de usuário ou senha incorretos.'}</P850> : null}

            {isAuthenticated ?
              <button disabled type="submit"><Check size={16} weight='bold' />Autenticado</button>
              :
              isLoadingData ?
                <button disabled type="submit"><CircleNotch className="load" size={16} weight='bold' />Autenticando...</button>
                :
                <button type="submit">Entrar</button>
            }
          </form>
        </div>
      </Main>
    </>
  )
}