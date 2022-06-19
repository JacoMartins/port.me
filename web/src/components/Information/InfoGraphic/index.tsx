import { P600 } from "../../../global";
import { EditableComponent } from "../../Elements/EditableItem";
import { Div } from "./styles";
import { Percentage } from "./styles";

interface InfoGraphicProps {
  title: string;
  description: string;
  percentage: number;

  isItMyAccount?: boolean;
  id?: string;
  profile_id?: string;
  handleItemUpdate: () => void;
}

export function InfoGraphic({ title, description, percentage, isItMyAccount, id, profile_id, handleItemUpdate }: InfoGraphicProps) {
  const type = 'info_graphic';
  
  return (
    isItMyAccount ?
      <EditableComponent
        id={id}
        profile_id={profile_id}
        item_title={title}
        item_description={description}
        item_type={type}
        handleItemUpdate={handleItemUpdate}
      >
        <Div>
          <div className="Container">
            {title ? <h3>{title}</h3> : <></>}
            {percentage ? <P600>{percentage}%</P600> : <></>}

            <Percentage value={percentage} />
          </div>
        </Div>
      </EditableComponent>

      :

      <Div>
        <div className="Container">
          {title ? <h3>{title}</h3> : <></>}
          {percentage ? <P600>{percentage}%</P600> : <></>}

          <Percentage value={percentage} />
        </div>
      </Div>
  )
}