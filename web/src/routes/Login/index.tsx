import { useContext, useState } from "react";
import { Main } from "./styles";
import { ArrowLeft, Check, CircleNotch } from 'phosphor-react';
import { GoBackButton } from "../Profile/styles";
import { P850 } from "../../global";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const [identificator, setIdentificator] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const [isSendingData, setIsSendingData] = useState(false);

  const { signIn, error, isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  async function Authenticate() {
    event?.preventDefault();
    
    setIsSendingData(true);

    const data = {
      identificator,
      password
    };

    // event?.preventDefault();

    // setIsSendingData(true);
    // setIsAlreadySent(false);

    // try {

    //   await api.post('/auth', data)
    //     .then(async res => {
    //       setToken(await res.data);
    //       setError(null);
    //     });

    //   navigate(`/profile/${identificator}`);

    // } catch (POST) {
    //   setError('Nome de usuário ou senha inválidos.');
    // }

    // console.log(token);

    // setIsSendingData(false);
    // setIsAlreadySent(true);

    signIn(data).then();
    
    setTimeout(() => {
      console.log(isAuthenticated)
    }, 1000);
    setIsSendingData(false);
    isAuthenticated ? navigate(`/profile/${identificator}`) : null;
  }

  return (
    <>
      <Main>
        <GoBackButton onClick={() => { navigate('/') }}><ArrowLeft size={24} /></GoBackButton>

        <div className='LogoContainer'>
          <h1>port<span>me</span></h1>
        </div>

        <div className='Container'>
          <h2>Entrar</h2>

          <form onSubmit={Authenticate}>
            <input type='text' placeholder='Email ou nome de usuário' onChange={() => { setIdentificator((event?.target as HTMLInputElement).value) }} />
            <input type='password' placeholder='Senha' onChange={() => { setPassword((event?.target as HTMLInputElement).value) }} />

            {error ? <P850>{error}</P850> : null}

            {isAuthenticated ?
              <button disabled type="submit"><Check size={16} weight='bold' />Autenticado</button>
              :
              isSendingData ?
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