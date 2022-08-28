import { CaretDown, CircleNotch, PersonSimpleWalk, X } from "phosphor-react";
import { useContext, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../../contexts/DataContext";
import { P600 } from "../../../global";
import { api } from "../../../services/api";
import { BlockHeader } from "../../Information/BlockHeader";
import { Frame } from "../../Information/Frame";
import { IconButton } from "../../Information/IconButton";
import { IconText } from "../../Information/IconText";
import { InfoGraphic } from "../../Information/InfoGraphic";
import { Text } from "../../Information/Text";
import { Container, Div } from "./styles";

interface NewItemProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id?: string;
  profile_id?: string;
  component_type?: string;
  handleItemUpdate: () => void;
}

export function NewItem({ isOpen, onRequestClose, id, profile_id, component_type, handleItemUpdate }: NewItemProps) {
  const [title, setTitle] = useState(
    component_type === 'text' ? 'Text' : ''
  );
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState(
    component_type === 'icon_button' && component_type ||
    component_type === 'icon_text' && component_type ||
    component_type === 'frame' && component_type ||
    component_type === 'text' && component_type ||
    component_type === 'info_graphic' && component_type ||
    component_type === 'block_header' && 'text'
  );
  const [icon, setIcon] = useState('Article');
  const [path, setPath] = useState('');

  const { renderIcons } = useContext(DataContext);

  const [isDataSending, setIsDataSending] = useState(false);

  async function createItem() {
    event?.preventDefault();

    setIsDataSending(true);

    await api.post('/items', {
      profile_id,
      component_id: id,
      title,
      description,
      value,
      type,
      icon,
      path
    });

    setIsDataSending(false)
    handleItemUpdate();
    onRequestClose();

    setTitle(component_type === 'text' ? 'Text' : '')
    setDescription('');
    setValue(0);
    setType(
      component_type === 'icon_button' && component_type ||
      component_type === 'icon_text' && component_type ||
      component_type === 'frame' && component_type ||
      component_type === 'text' && component_type ||
      component_type === 'info_graphic' && component_type ||
      component_type === 'block_header' && 'text'
    );
    setIcon('Article');
    setPath('');
  }

  function internalRequestClose() {
    onRequestClose();
    setTitle(component_type === 'text' ? 'Text' : '')
    setDescription('');
    setValue(0);
    setType(
      component_type === 'icon_button' && component_type ||
      component_type === 'icon_text' && component_type ||
      component_type === 'frame' && component_type ||
      component_type === 'text' && component_type ||
      component_type === 'info_graphic' && component_type ||
      component_type === 'block_header' && 'text'
    );
    setIcon('Article');
    setPath('');
  }

  return (
    <Div>
      <Modal
        isOpen={isOpen}
        onRequestClose={internalRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container onSubmit={createItem}>
          <div className="react-modal-content-header">
            <h2>Adicionar um item</h2>
            <X className="react-modal-close" size={24} onClick={internalRequestClose} />
          </div>

          <P600>
            {component_type === 'text' && 'Escreva algo sobre você...'}
            {component_type === 'icon_button' && 'Insira as informações necessárias.'}
          </P600>

          <div className="MainContainer">
            {
              component_type === 'icon_button' &&
              (
                <>
                  <div className="DemoContainer">
                    <IconButton
                      title={!title ? 'Título' : title}
                      description={!description ? 'Descrição' : description}
                      icon={renderIcons(icon)}

                      id='a'
                      profile_id='a'

                      arrowRight={true}

                      isEditable={false}
                      handleItemUpdate={() => { }}
                    />
                  </div>

                  <input type="text" placeholder="Título" onChange={event => setTitle(event.target.value)} />

                  <input type="text" placeholder="Descrição" onChange={event => setDescription(event.target.value)} />

                  <P600>Selecione um ícone</P600>

                  <select onChange={event => setIcon(event.target.value)}>
                    <option value='Article'>Artigo</option>
                    <option value='Bank'>Banco</option>
                    <option value='BehanceLogo'>Behance</option>
                    <option value='Camera'>Camera</option>
                    <option value='CircleWavyCheck'>Check</option>
                    <option value='Email'>Email</option>
                    <option value='GitHubLogo'>GitHub</option>
                    <option value='InstagramLogo'>Instagram</option>
                    <option value='LinkedInLogo'>LinkedIn</option>
                    <option value='Book'>Livro</option>
                    <option value='Books'>Livros</option>
                    <option value='BookOpen'>Livro Aberto</option>
                    <option value='MusicNoteSimple'>Nota músical</option>
                    <option value='MusicNotesSimple'>Notas musicais</option>
                    <option value='Cloud'>Núvem</option>
                    <option value='CookingPot'>Panela</option>
                    <option value='Brush'>Pincel</option>
                    <option value='Buildings'>Prédios</option>
                    <option value='Clock'>Relógio</option>
                    <option value='Phone'>Telefone</option>
                    <option value='WhatsappLogo'>Whatsapp</option>
                  </select>

                  <input type="text" placeholder="Link" onChange={event => setPath(event.target.value)} />
                </>
              )
            }

            {
              component_type === 'icon_text' &&
              (
                <>
                  <div className="DemoContainer">
                    <IconText
                      title={!title ? 'Título' : title}
                      description={!description ? 'Texto' : description}
                      icon={renderIcons(icon)}

                      id='a'
                      profile_id='a'

                      isEditable={false}
                      handleItemUpdate={() => { }}
                    />
                  </div>

                  <input type="text" placeholder="Título" onChange={event => setTitle(event.target.value)} />

                  <textarea placeholder="Texto" onChange={event => setDescription(event.target.value)} />

                  <P600>Selecione um ícone</P600>

                  <select onChange={event => setIcon(event.target.value)}>
                    <option value='Article'>Artigo</option>
                    <option value='Bank'>Banco</option>
                    <option value='BehanceLogo'>Behance</option>
                    <option value='Camera'>Camera</option>
                    <option value='CircleWavyCheck'>Check</option>
                    <option value='Email'>Email</option>
                    <option value='GitHubLogo'>GitHub</option>
                    <option value='InstagramLogo'>Instagram</option>
                    <option value='LinkedInLogo'>LinkedIn</option>
                    <option value='Book'>Livro</option>
                    <option value='Books'>Livros</option>
                    <option value='BookOpen'>Livro Aberto</option>
                    <option value='MusicNoteSimple'>Nota músical</option>
                    <option value='MusicNotesSimple'>Notas musicais</option>
                    <option value='Cloud'>Núvem</option>
                    <option value='CookingPot'>Panela</option>
                    <option value='Brush'>Pincel</option>
                    <option value='Buildings'>Prédios</option>
                    <option value='Clock'>Relógio</option>
                    <option value='Phone'>Telefone</option>
                    <option value='WhatsappLogo'>Whatsapp</option>
                  </select>
                </>
              )
            }

            {
              component_type === 'info_graphic' &&
              (
                <>
                  <div className="DemoContainer">
                    <InfoGraphic
                      title={!title ? 'Título' : title}
                      description={description}
                      percentage={value}

                      id='a'
                      profile_id='a'

                      isEditable={false}
                      handleItemUpdate={() => { }}
                    />
                  </div>

                  <input type="text" placeholder="Título" onChange={event => setTitle(event.target.value)} />

                  <P600>{value} %</P600>
                  <input type="range" defaultValue={value} onChange={event => setValue(parseInt(event.target.value, 10))} />
                </>
              )
            }

            {
              component_type === 'text' &&
              (
                <>
                  <textarea placeholder="Texto" onChange={event => setDescription(event.target.value)} />
                </>
              )
            }

            {
              component_type === 'frame' &&
              <>
                <div className="DemoContainer">
                  <Frame
                    src={icon}

                    id='a'
                    profile_id='a'

                    handleItemUpdate={() => { }}
                    isEditable={false}
                  />
                </div>

                <input type="text" placeholder="URL da imagem" onChange={event => setIcon(event.target.value)} />
                <input type="text" placeholder="Descrição da imagem" onChange={event => setDescription(event.target.value)} />
                <P600>Por enquanto estamos trazendo as imagens para a aplicação por meio de URLs pois ainda não temos onde guardá-las, a aplicação ainda está em fase de desenvolvimento.</P600>
              </>
            }

            {
              component_type === 'block_header' &&
              <>
                <h2>Pré-visualização</h2>
                <div className="DemoContainer">
                  {
                    type === 'text' &&
                    <Text title={title} handleItemUpdate={() => { }} isEditable={false}>
                      {!description ? 'Insira um texto para começar.' : description}
                    </Text>
                  }

                  {
                    type === 'icon_button' &&
                    <IconButton
                      title={!title ? 'Título' : title}
                      description={!description ? 'Descrição' : description}
                      icon={renderIcons(icon)}

                      id='a'
                      profile_id='a'

                      arrowRight={true}

                      isEditable={false}
                      handleItemUpdate={() => { }}
                    />
                  }

                  {
                    type === 'icon_text' &&
                    <IconText
                      title={!title ? 'Título' : title}
                      description={!description ? 'Texto' : description}
                      icon={renderIcons(icon)}

                      id='a'
                      profile_id='a'

                      isEditable={false}
                      handleItemUpdate={() => { }}
                    />
                  }

                  {
                    type === 'info_graphic' &&
                    <InfoGraphic
                      title={!title ? 'Título' : title}
                      description={!description ? 'Texto' : description}

                      id='a'
                      profile_id='a'

                      percentage={value}

                      isEditable={false}
                      handleItemUpdate={() => { }}
                    />
                  }

                  {
                    type === 'frame' &&
                    <Frame
                      src={icon}

                      id='a'
                      profile_id='a'

                      handleItemUpdate={() => { }}
                      isEditable={false}
                    />
                  }
                </div>

                <P600>Tipo do item a ser inserido </P600>
                <select onChange={event => setType(event.target.value)}>
                  <option value="text">Texto</option>
                  <option value="icon_button">Botão com ícone</option>
                  <option value="icon_text">Texto com ícone</option>
                  <option value="info_graphic">Gráfico Simples</option>
                  <option value="frame">Imagem</option>
                </select>

                <P600>Insira os dados necessários</P600>

                {
                  type === 'text' && <textarea placeholder="Texto" onChange={event => setDescription(event.target.value)} />
                }

                {
                  type === 'icon_button' &&
                  <>
                    <input type="text" placeholder="Título" onChange={event => setTitle(event.target.value)} />

                    <input type="text" placeholder="Descrição" onChange={event => setDescription(event.target.value)} />

                    <P600>Selecione um ícone</P600>

                    <select onChange={event => setIcon(event.target.value)}>
                      <option value='Article'>Artigo</option>
                      <option value='CircleWavyCheck'>Check</option>
                      <option value='Email'>Email</option>
                      <option value='GitHubLogo'>GitHub</option>
                      <option value='InstagramLogo'>Instagram</option>
                      <option value='LinkedInLogo'>LinkedIn</option>
                      <option value='Phone'>Telefone</option>
                      <option value='WhatsappLogo'>Whatsapp</option>
                    </select>

                    <input type="text" placeholder="Link" onChange={event => setPath(event.target.value)} />
                  </>
                }

                {
                  type === 'icon_text' &&
                  <>
                    <input type="text" placeholder="Título" onChange={event => setTitle(event.target.value)} />

                    <textarea placeholder="Texto" onChange={event => setDescription(event.target.value)} />

                    <P600>Selecione um ícone</P600>

                    <select onChange={event => setIcon(event.target.value)}>
                      <option value='Article'>Artigo</option>
                      <option value='CircleWavyCheck'>Check</option>
                      <option value='Email'>Email</option>
                      <option value='GitHubLogo'>GitHub</option>
                      <option value='InstagramLogo'>Instagram</option>
                      <option value='LinkedInLogo'>LinkedIn</option>
                      <option value='Phone'>Telefone</option>
                      <option value='WhatsappLogo'>Whatsapp</option>
                    </select>
                  </>
                }

                {
                  type === 'info_graphic' &&
                  <>
                    <input type="text" placeholder="Título" onChange={event => setTitle(event.target.value)} />

                    <P600>{value} %</P600>
                    <input type="range" defaultValue={value} onChange={event => setValue(parseInt(event.target.value, 10))} />
                  </>
                }

                {
                  type === 'frame' &&
                  <>
                    <input type="text" placeholder="URL da imagem" onChange={event => setIcon(event.target.value)} />
                    <input type="text" placeholder="Descrição da imagem" onChange={event => setDescription(event.target.value)} />
                    <P600>Por enquanto estamos trazendo as imagens para a aplicação por meio de URLs pois ainda não temos onde guardá-las, a aplicação ainda está em fase de desenvolvimento.</P600>
                  </>
                }
              </>
            }

            {
              isDataSending ?
                <button type="submit" disabled>
                  <CircleNotch size={16} weight="regular" className="load" />
                  Adicionando...
                </button>
                :
                <button type="submit">Adicionar</button>
            }
          </div>
        </Container>
      </Modal>
    </Div>
  )
}