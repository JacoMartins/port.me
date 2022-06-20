import { CircleNotch, Cursor } from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { P600, P850 } from "../../../../../global";
import { api } from "../../../../../services/api";
import { BlockHeader } from "../../../../Information/BlockHeader";
import { IconButton } from "../../../../Information/IconButton";
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

            handleItemUpdate={() => {}}
            isEditable={false}
          />
        }

        {
          component === 'info_graphic' &&
          <InfoGraphic
            title="Andamento do meu curso"
            description="none"
            percentage={60}
            handleItemUpdate={() => {}}

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
          <Text title='Demo' isEditable={false} handleItemUpdate={() => {}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        }
      </div>

      <div className="TextContainer">
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