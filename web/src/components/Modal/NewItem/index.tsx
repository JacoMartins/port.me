import { CircleNotch, PersonSimpleWalk, X } from "phosphor-react";
import { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { P600 } from "../../../global";
import { api } from "../../../services/api";
import { Container, Div } from "./styles";

interface NewComponentProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id?: string;
  profile_id?: string;
}

export function NewItem({ isOpen, onRequestClose, id, profile_id }: NewComponentProps) {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState('');
  const [icon, setIcon] = useState('');
  const [path, setPath] = useState('');

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
    navigate(0);
  }

  return (
    <Div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container onSubmit={createItem}>
          <div className="react-modal-content-header">
            <h2>Adicionar um item</h2>
            <X className="react-modal-close" size={24} onClick={onRequestClose} />
          </div>

          <P600>Insira os dados necessários</P600>

          <div className="MainContainer">
            <input type="text" placeholder="Título do item" onChange={event => setTitle(event.target.value)} />
            <input type="text" placeholder="Descrição" onChange={event => setDescription(event.target.value)} />
            <input type="text" placeholder="Valor" onChange={event => setValue(parseInt(event.target.value, 10))} />
            <input type="text" placeholder="Tipo" onChange={event => setType(event.target.value)} />
            <input type="text" placeholder="Ícone" onChange={event => setIcon(event.target.value)} />
            <input type="text" placeholder="Link" onChange={event => setPath(event.target.value)} />

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