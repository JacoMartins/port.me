import { CircleNotch, X } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { DataContext } from "../../../contexts/DataContext";
import { P600 } from "../../../global";
import { api } from "../../../services/api";
import { Frame } from "../../Information/Frame";
import { IconButton } from "../../Information/IconButton";
import { IconText } from "../../Information/IconText";
import { InfoGraphic } from "../../Information/InfoGraphic";
import { Text } from "../../Information/Text";
import { Container, Div } from "./styles";

interface EditItemProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id?: string;
  profile_id?: string;
  item_title: string;
  item_description?: string;
  item_type: string;
  item_value?: number;
  item_icon?: string;
  item_path?: string;
  handleItemUpdate: () => void;
}

export function EditItem({ isOpen, onRequestClose, profile_id, id, item_title, item_description, item_type, item_value, item_icon, item_path, handleItemUpdate }: EditItemProps) {
  const [title, setTitle] = useState(item_title);
  const [description, setDescription] = useState(item_description);
  const [value, setValue] = useState(item_value);
  const [type, setType] = useState(item_type);
  const [icon, setIcon] = useState(item_icon);
  const [path, setPath] = useState(item_path);

  const { renderIcons } = useContext(DataContext);
  const [isSendingData, setIsSendingData] = useState(false);

  async function editItem() {
    event?.preventDefault();

    setIsSendingData(true);

    await api.put('/items', {
      profile_id,
      id,
      title,
      value: value ? value : 0,
      description,
      type: item_type,
      icon,
      path
    });

    setIsSendingData(false);

    handleItemUpdate();
    onRequestClose();
  }

  function internalRequestClose() {
    onRequestClose();
    setTitle(item_title);
    setDescription(item_description);
    setValue(item_value);
    setType(item_type);
    setIcon(item_icon);
    setPath(item_path);
  }
  return (
    <Div>
      <Modal
        isOpen={isOpen}
        onRequestClose={internalRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container onSubmit={editItem}>
          <div className="react-modal-content-header">
            <h2>Editar item</h2>
            <X className="react-modal-close" size={24} onClick={internalRequestClose} />
          </div>

          <P600>{item_type === 'text' && 'Novo texto:'}</P600>

          <div className="MainContainer">
            {
              type === 'icon_button' &&
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

                  <input type="text" placeholder="Título" defaultValue={title} onChange={event => setTitle(event.target.value)} />

                  <input type="text" placeholder="Descrição" defaultValue={description} onChange={event => setDescription(event.target.value)} />

                  <P600>Selecione um ícone</P600>

                  <select defaultValue={icon} onChange={event => setIcon(event.target.value)}>
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

                  <input type="text" placeholder="Link" defaultValue={path} onChange={event => setPath(event.target.value)} />
                </>
              )
            }

            {
              type === 'icon_text' &&
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

                  <input type="text" placeholder="Título" defaultValue={title} onChange={event => setTitle(event.target.value)} />

                  <textarea placeholder="Texto" defaultValue={description} onChange={event => setDescription(event.target.value)} />

                  <P600>Selecione um ícone</P600>

                  <select defaultValue={icon} onChange={event => setIcon(event.target.value)}>
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
              type === 'info_graphic' &&
              (
                <>
                  <div className="DemoContainer">
                    <InfoGraphic
                      title={!title ? 'Título' : title}
                      description={description as string}
                      percentage={value as number}

                      id='a'
                      profile_id='a'

                      isEditable={false}
                      handleItemUpdate={() => { }}
                    />
                  </div>

                  <input type="text" placeholder="Título" defaultValue={title} onChange={event => setTitle(event.target.value)} />

                  <P600>{value} %</P600>
                  <input type="range" defaultValue={value} onChange={event => setValue(parseInt(event.target.value, 10))} />
                </>
              )
            }

            {
              type === 'text' &&
              (
                <>
                  <textarea placeholder="Texto" defaultValue={description} onChange={event => setDescription(event.target.value)} />
                </>
              )
            }

            {
              type === 'frame' &&
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

                <input type="text" defaultValue={icon} placeholder="URL da imagem" onChange={event => setIcon(event.target.value)} />
                <input type="text" defaultValue={description} placeholder="Descrição da imagem" onChange={event => setDescription(event.target.value)} />
                <P600>Por enquanto estamos trazendo as imagens para a aplicação por meio de URLs pois ainda não temos onde guardá-las, a aplicação ainda está em fase de desenvolvimento.</P600>
              </>
            }

            {isSendingData ?
              <button type="submit" disabled><CircleNotch className="load" size={16} weight='bold' />Enviando...</button>
              :
              <button type="submit">Enviar</button>
            }
          </div>
        </Container>
      </Modal>
    </Div>
  )
}