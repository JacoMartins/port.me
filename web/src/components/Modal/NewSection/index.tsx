import { CircleNotch, X } from "phosphor-react";
import { useContext, useState } from "react";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { P600 } from "../../../global";
import { api } from "../../../services/api";
import { Container, Div } from "./styles";

interface NewSectionProps {
  isOpen: boolean;
  onRequestClose: () => void;
  handleSectionUpdate: () => void;
  id?: string;
}

export function NewSection({ isOpen, onRequestClose, id, handleSectionUpdate }: NewSectionProps) {
  const [title, setTitle] = useState('');
  const { account } = useContext(AuthContext);
  const [isSendingData, setIsSendingData] = useState(false);
  const {username} = useParams();

  const navigate = useNavigate();

  async function createSection() {
    event?.preventDefault();

    setIsSendingData(true);

    await api.post('/section', {
      profile_id: id,
      title
    })

    setIsSendingData(false);

    handleSectionUpdate();
    onRequestClose();
  }

  return (
    <Div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container onSubmit={createSection}>
          <div className="react-modal-content-header">
            <h2>Postar uma seção</h2>
            <X className="react-modal-close" size={24} onClick={onRequestClose}/>
          </div>

          <P600>Insira o título da seção:</P600>
          <input type="text" placeholder="Exemplo: Sobre mim" onChange={(event) => setTitle(event.target.value)}></input>

          {/* <h2>Informações da seção</h2>
          <P600>Adicione alguns componentes para complementar a sua seção</P600>
          <Checkbox value="block_header" text="Bloco" />
          <Checkbox value="block_header" text="Gráficos" /> */}

          {isSendingData ?
            <button type="submit" disabled><CircleNotch className="load" size={16} weight='bold' />Postando...</button>
            :
            <button type="submit">Postar seção</button>
          }
        </Container>
      </Modal>
    </Div>
  )
}