import { X } from "phosphor-react";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { P600 } from "../../../global";
import { NewComponentButton } from "./components/NewComponentButton";
import { Container, Div } from "./styles";

interface NewComponentProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id?: string;
  profile_id?: string;
  handleComponentsUpdate: () => void;
}

export function NewComponent({ isOpen, onRequestClose, id, profile_id, handleComponentsUpdate }: NewComponentProps) {

  const componentList = [
    {
      title: 'Texto',
      description: 'Adicionar um texto',
      component: 'text',
      section_id: id,
      profile_id
    },

    {
      title: 'Botão com ícone',
      description: 'Adiciona um botão com um ícone de sua escolha e com redirecionamento de links',
      component: 'icon_button',
    },

    {
      title: 'Texto com ícone',
      description: 'Adiciona um texto com uma descrição e um ícone de sua escolha.',
      component: 'icon_text',
    },

    {
      title: 'Divisor de informações',
      description: 'Adiciona um container onde se colocam informações em formato de lista.',
      component: 'block_header',
    },

    {
      title: 'Gráfico Simples',
      description: 'Adiciona um gráfico de linha horizontal, utiliza valores percentuais.',
      component: 'info_graphic',
    },

    {
      title: 'Imagem',
      description: 'Adiciona múltiplas imagens.',
      component: 'frame',
    },
  ];

  const [filteredComponents, setFilteredComponents] = useState([...componentList]);
  const [search, setSearch] = useState<string>();

  useEffect(() => {
    search ?
      setFilteredComponents(componentList.filter(item =>
        item.title
          .normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')
          .toLowerCase()
          .includes(
            search
              .normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')
              .toLowerCase()
          ))
      )
      :
      setFilteredComponents(componentList.filter(item => item.title));
  }, [search]);

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

          <input type={'text'} placeholder='Buscar um componente' onChange={(event) => {
            setSearch(event.target.value);
          }} />

          <div className="NewComponentContainer">
            {
              filteredComponents.map(item => (
                <NewComponentButton
                  title={item.title}
                  description={item.description}
                  component={item.component}
                  section_id={id}
                  profile_id={profile_id}

                  key={item.title}

                  handleComponentsUpdate={handleComponentsUpdate}
                  onRequestClose={onRequestClose}
                />
              ))
            }
          </div>
        </Container>
      </Modal>
    </Div>
  )
}