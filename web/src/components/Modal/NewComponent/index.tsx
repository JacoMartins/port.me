import { X } from "phosphor-react";
import Modal from "react-modal";
import { P600 } from "../../../global";
import { NewComponentButton } from "./components/NewComponentButton";
import { Container, Div } from "./styles";

interface NewComponentProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id?: string;
  profile_id?: string;
}

export function NewComponent({ isOpen, onRequestClose, id, profile_id }: NewComponentProps) {
  return (
    <Div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container>
          <div className="react-modal-content-header">
            <h2>Adicionar um componente</h2>
            <X className="react-modal-close" size={24} onClick={onRequestClose} />
          </div>

          <P600>Selecione um componente de sua preferência</P600>

          <div className="NewComponentContainer">
            <NewComponentButton
              title="Botão com ícone"
              description="Adicionar um botão com icone, com redirecionamento de links"
              component="icon_button"
              section_id={id}
              profile_id={profile_id}
            />

            <NewComponentButton
              title="Gráfico Simples"
              description="Mostrar informações"
              component="info_graphic"
              section_id={id}
              profile_id={profile_id}
            />

            <NewComponentButton
              title="Divisor"
              description="Layout"
              component="block_header"
              section_id={id}
              profile_id={profile_id}
            />

            <NewComponentButton
              title="Paragráfo"
              description="Texto e informação"
              component="text"
              section_id={id}
              profile_id={profile_id}
            />

            <NewComponentButton
              title="Imagem"
              description="Informação visual"
              component="frame"
              section_id={id}
              profile_id={profile_id}
            />
          </div>
        </Container>
      </Modal>
    </Div>
  )
}