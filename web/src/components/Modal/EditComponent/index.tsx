import { CircleNotch, X } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { P600 } from "../../../global";
import { api } from "../../../services/api";
import { Container, Div } from "./styles";

interface EditComponentProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id?: string;
  profile_id?: string;
  component_title?: string;
  component_description?: string;
  component_type?: string;
  handleComponentsUpdate: () => void;
}

export function EditComponent({ isOpen, onRequestClose, profile_id, id, component_title, component_description, component_type, handleComponentsUpdate }: EditComponentProps) {
  const [title, setTitle] = useState(component_title);
  const [description, setDescription] = useState(component_description);
  const [isSendingData, setIsSendingData] = useState(false);

  async function editComponent() {
    event?.preventDefault();

    setIsSendingData(true);

    await api.put('/components', {
      profile_id,
      id,
      title,
      value: 0,
      description,
      type: component_type
    });

    setIsSendingData(false);

    handleComponentsUpdate();
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
        <Container onSubmit={editComponent}>
          <div className="react-modal-content-header">
            <h2>Editar componente</h2>
            <X className="react-modal-close" size={24} onClick={onRequestClose} />
          </div>

          <P600>Insira os dados necessários:</P600>

          <div className="MainContainer">
            <input type="text" placeholder="Título" defaultValue={title} onChange={(event) => setTitle(event.target.value)}></input>
            <input type="text" placeholder="Descrição" defaultValue={description} onChange={(event) => setDescription(event.target.value)}></input>

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