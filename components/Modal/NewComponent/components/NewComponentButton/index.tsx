import { Article, CircleNotch, Cursor } from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { P600, P850 } from "../../../../../global";
import { api } from "../../../../../services/api";
import { BlockHeader } from "../../../../Information/BlockHeader";
import { Frame } from "../../../../Information/Frame";
import { IconButton } from "../../../../Information/IconButton";
import { IconText } from "../../../../Information/IconText";
import { InfoGraphic } from "../../../../Information/InfoGraphic";
import { Text } from "../../../../Information/Text";
import { Div } from "./styles";

interface NewComponentButtonProps {
  title: string;
  description: string;
  component: string;
  section_id?: string;
  profile_id?: string;
  handleComponentsUpdate: () => void;
  onRequestClose: () => void;
}

export function NewComponentButton({ title, description, component, section_id, profile_id, handleComponentsUpdate, onRequestClose }: NewComponentButtonProps) {
  const [isSendingData, setIsSendingData] = useState(false);

  async function addComponent() {
    event?.preventDefault();

    setIsSendingData(true);

    await api.post('/components', {
      profile_id,
      section_id,
      title,
      value: 0,
      type: component,
      description: 'Novo componente'
    });

    setIsSendingData(false);

    handleComponentsUpdate();
    onRequestClose();
  }

  return (
    <Div>
      <div className="DemoContainer">
        {
          component === 'icon_button' &&
          <IconButton
            title="Título"
            description="Descrição"
            icon={<Cursor weight="light" />}
            arrowRight={true}

            id='a'
            profile_id='a'

            handleItemUpdate={() => { }}
            isEditable={false}
          />
        }

        {
          component === 'info_graphic' &&
          <InfoGraphic
            title="Andamento do meu curso"
            description="none"
            percentage={60}
            handleItemUpdate={() => { }}

            id='a'
            profile_id='a'

            isEditable={false}
          />
        }

        {
          component === 'block_header' &&
          <BlockHeader
            title="Divisor de informações"
            description="Demonstração"
          >
            <></>
          </BlockHeader>
        }

        {
          component === 'text' &&
          <Text title='Demo' isEditable={false} handleItemUpdate={() => { }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        }

        {
          component === 'icon_text' &&
          <IconText
            title='Texto com ícone'
            description="Demonstração"

            id='a'
            profile_id='a'

            icon={<Article size={24} weight='light' />}
            isEditable={false}
            handleItemUpdate={() => { }}
          />
        }

        {
          component === 'frame' &&
          <Frame
            src={'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80'}
            alt='Imagem de Demonstração'

            id='a'
            profile_id='a'
            isEditable={false}
            handleItemUpdate={() => { }}
          />
        }
      </div>

      <div className="Demo TextContainer">
        <p>{title}</p>
        <P600>{description}</P600>
        {isSendingData ?
          <button type="button" disabled><CircleNotch className="load" size={16} weight='bold' />Adicionando...</button>
          :
          <button type="button" onClick={addComponent}>Adicionar</button>
        }
      </div>

    </Div>
  )
}