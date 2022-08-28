import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Main } from "./styles";
import { ArrowLeft, CircleNotch } from 'phosphor-react';
import { GoBackButton } from "../Profile/styles";
import { P600, P850 } from "../../global";
import { AuthContext } from "../../contexts/AuthContext";
import { SectionComponentController } from "../../components/Controller/SectionComponentController";

interface Section {
  id: string;
  title: string;
}

export default function CreateAccount() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isSendingData, setIsSendingData] = useState(false);
  const [isAlreadySent, setIsAlreadySent] = useState(false);

  const [stage, setStage] = useState('create');

  const [AboutMeSection, setAboutMeSection] = useState<Section[]>();

  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);

  function verifyForm() {
    event?.preventDefault();
    const charBlock = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÁÇÉǴÍḰĹḾŃÓṔŔŚÚǗẂÝŹḈÀÈÌǸÒÙǛẀỲÃẼĨÑÕŨṼỸãẽĩñõũṽỹÂĈÊĜĤÎĴÔŜÛṼỸâĉêĝĥîĵôŝûŵŷẑàìǹòùǜẁỳáçéǵíḱĺḿńóṕŕśúǘẃýź!#$%¨&*()-=[]~^`´:;/?>.<,| ';
    let err = '';

    const charBlockArray = charBlock.split('');

    for (let n = charBlockArray.length; n > -1; n--) {
      if (
        username.includes(charBlockArray[n])
      ) {
        error !== 'Nome de usuário inválido!' ? setError('Nome de usuário inválido!') : null;

        return;
      }
    }

    if (username === '' || firstName === '' || lastName === '' || password === '' || confirmPassword === '') {
      setError('Por favor, preencha todos os campos!');
      return;
    }

    if (confirmPassword === password) { } else { setError('As senhas não coincidem!'); return; }

    setError(null);

    createAccount()

    err ? console.log(`Nome de usuário: "${username}", Nome: "${firstName}", Último nome: "${lastName}". \n\nERRO: ${err}`) : console.log('show');
  }

  async function createAccount() {
    event?.preventDefault();
    setIsSendingData(true);

    await api.post('/account', {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      username
    }).then(
      res => setAboutMeSection(res.data)
    );

    // console.log(AboutMeSection);

    await signIn({
      identificator: username,
      password
    });

    // setStage('set');

    setIsAlreadySent(true);
    setIsSendingData(false);

    navigate(`/profile/${username}`);
    navigate(0);
  }

  return (
    <>
      <Main>
        <GoBackButton onClick={() => { navigate(-1) }}><ArrowLeft size={24} /></GoBackButton>

        <div className='LogoContainer'>
          <h1>port<span>.me</span></h1>
        </div>

        <div className='Container'>
          {
            stage === 'create' &&
            <>
              <h2>Criar uma conta</h2>
              <form onSubmit={verifyForm}>
                <input type='text' placeholder='Nome de usuário' required onChange={() => { setUsername((event?.target as HTMLInputElement).value) }} />

                <div className="NameContainer">
                  <input type='text' placeholder='Nome' required onChange={() => { setFirstName((event?.target as HTMLInputElement).value) }} />
                  <input type='text' placeholder='Sobrenome' required onChange={() => { setLastName((event?.target as HTMLInputElement).value) }} />
                </div>

                <input type='email' placeholder='Endereço de email' onChange={() => { setEmail((event?.target as HTMLInputElement).value) }} />

                <input type='password' placeholder='Senha' pattern=".{8,}" required onChange={() => { setPassword((event?.target as HTMLInputElement).value) }} />
                <input type='password' placeholder='Confirmar senha' pattern=".{8,}" required onChange={() => { setConfirmPassword((event?.target as HTMLInputElement).value) }} />

                {error ? <P850>{error}</P850> : null}

                {isSendingData ?
                  <button disabled type="submit"><CircleNotch className="load" size={16} weight='bold' />Criando sua conta...</button>
                  :
                  !isAlreadySent ?
                    <button type="submit">Criar minha conta</button>
                    :
                    <Link className="link" to={`/profile/${username}`}>
                      <button>Ir para o seu portfólio</button>
                    </Link>
                }
              </form>
            </>
          }

          {
            stage === 'set' &&
            <>
              <h2>Fale um pouco sobre você...</h2>

              <P600>Insira alguns dados relevantes sobre você para <br></br>dar um up no seu perfil.</P600>
              <br></br>
              <form onSubmit={() => ''}>
                <h2>{AboutMeSection && AboutMeSection[0].title}</h2>

                {error ? <P850>{error}</P850> : null}

                {isSendingData ?
                  <button disabled type="submit"><CircleNotch className="load" size={16} weight='bold' />Criando sua conta...</button>
                  :
                  !isAlreadySent ?
                    <button type="submit">Criar minha conta</button>
                    :
                    <Link className="link" to={`/profile/${username}`}>
                      <button>Ir para o seu portfólio</button>
                    </Link>
                }
              </form>
            </>
          }
        </div>
      </Main>
    </>
  )
}