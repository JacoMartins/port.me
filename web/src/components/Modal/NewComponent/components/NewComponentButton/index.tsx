import { CircleNotch, Cursor } from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { P600, P850 } from "../../../../../global";
import { api } from "../../../../../services/api";
import { BlockHeader } from "../../../../Information/BlockHeader";
import { IconButton } from "../../../../Information/IconButton";
import { InfoGraphic } from "../../../../Information/InfoGraphic";
import { Div } from "./styles";

interface NewComponentButtonProps {
  title: string;
  description: string;
  component: string;
  section_id?: string;
  profile_id?: string;
}

export function NewComponentButton({ title, description, component, section_id, profile_id }: NewComponentButtonProps) {
  const [isSendingData, setIsSendingData] = useState(false);

  const navigate = useNavigate();

  async function addComponent() {
    event?.preventDefault();

    setIsSendingData(true);

    await api.post('/section/components', {
      profile_id,
      section_id,
      title,
      value: 0,
      type: component,
      description: 'Novo componente'
    });

    setIsSendingData(false);

    navigate(0);
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
          />
        }

        {
          component === 'info_graphic' &&
          <InfoGraphic
            title="Andamento do meu curso"
            percentage={60}
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
          <P600>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</P600>
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