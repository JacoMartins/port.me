import { CircleNotch, X } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { P600 } from "../../../global";
import { api } from "../../../services/api";
import { Container, Div } from "./styles";

interface EditItemProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id?: string;
  profile_id?: string;
  item_title?: string;
  item_description?: string;
  item_type?: string;
  handleItemUpdate: () => void;
}

export function EditItem({ isOpen, onRequestClose, profile_id, id, item_title, item_description, item_type, handleItemUpdate }: EditItemProps) {
  const [title, setTitle] = useState(item_title);
  const [description, setDescription] = useState(item_description);
  const [isSendingData, setIsSendingData] = useState(false);

  async function editItem() {
    event?.preventDefault();

    setIsSendingData(true);

    await api.put('/items', {
      profile_id,
      id,
      title,
      value: 0,
      description,
      type: item_type
    });

    setIsSendingData(false);

    handleItemUpdate();
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
        <Container onSubmit={editItem}>
          <div className="react-modal-content-header">
            <h2>Editar item</h2>
            <X className="react-modal-close" size={24} onClick={onRequestClose} />
          </div>

          <P600>{item_type === 'text' && 'Novo texto:'}</P600>

          <div className="MainContainer">

            {item_type === 'text' &&
              <>
                <textarea placeholder="Descrição" defaultValue={description} onChange={(event) => setDescription(event.target.value)} />
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