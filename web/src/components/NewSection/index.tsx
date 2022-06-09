import { Check } from "phosphor-react";
import Modal from "react-modal";
import { P600, P850 } from "../../global";
import { Checkbox } from "../Checkbox";
import { Container, Div } from "./styles";

interface NewSectionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewSection({ isOpen, onRequestClose }: NewSectionProps) {

  return (
    <Div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container>
          <h2>Postar uma seção</h2>
          <P600>Insira o título da seção:</P600>
          <input type="text" placeholder="Exemplo: Sobre mim"></input>

          <h2>Informações da seção</h2>
          <P600>Adicione alguns componentes para complementar a sua seção</P600>
          <Checkbox value="block_header" text="Bloco" />
          <Checkbox value="block_header" text="Gráficos" />

          <button type="button">Postar seção</button>
        </Container>
      </Modal>
    </Div>
  )
}