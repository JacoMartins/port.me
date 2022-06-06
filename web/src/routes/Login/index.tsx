import { useState } from "react";
import { Main } from "./styles";
import { ArrowLeft, CircleNotch } from 'phosphor-react';
import { GoBackButton } from "../Profile/styles";
import { P850 } from "../../global";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const [isSendingData, setIsSendingData] = useState(false);
  const [isAlreadySent, setIsAlreadySent] = useState(false);

  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);

  function verifyForm() {
    event?.preventDefault();
    const charBlock = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÁÇÉǴÍḰĹḾŃÓṔŔŚÚǗẂÝŹḈÀÈÌǸÒÙǛẀỲÃẼĨÑÕŨṼỸãẽĩñõũṽỹÂĈÊĜĤÎĴÔŜÛṼỸâĉêĝĥîĵôŝûŵŷẑàìǹòùǜẁỳáçéǵíḱĺḿńóṕŕśúǘẃýź!#$%¨&*()-=[]~^`´:;/?>.<,| ';
    let err = '';

    const charBlockArray = charBlock.split('');

    for (let n = charBlockArray.length; n > -1; n--) {
      if (
        id.includes(charBlockArray[n])
      ) {
        error !== 'Nome de usuário inválido!' ? setError('Nome de usuário inválido!') : null;

        return;
      }
    }

    if (id === '' || password === '') {
      setError('Por favor, preencha todos os campos!');
      return;
    }

    if (password.length < 8) { } else { setError('Senha inválida.'); return; }

    setError(null);
    err ? console.log(`Nome de usuário: "${id}". \n\nERRO: ${err}`) : console.log('show');
  }

  return (
    <>
      <Main>
        <GoBackButton onClick={() => { navigate('/') }}><ArrowLeft size={24} /></GoBackButton>

        <div className='LogoContainer'>
          <h1>port<span>.me</span></h1>
        </div>

        <div className='Container'>
          <h2>Entrar</h2>
          <form onSubmit={verifyForm}>
            <input type='text' placeholder='Email ou nome de usuário' onChange={() => { setId((event?.target as HTMLInputElement).value) }} />
            <input type='password' placeholder='Senha' onChange={() => { setPassword((event?.target as HTMLInputElement).value) }} />

            {error ? <P850>{error}</P850> : null}

            {isSendingData ?
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