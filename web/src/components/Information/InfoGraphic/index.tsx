import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { P600 } from "../../../global";
import { EditableComponent } from "../../Elements/EditableItem";
import { Div } from "./styles";
import { Percentage } from "./styles";

interface InfoGraphicProps {
  title: string;
  description: string;
  percentage: number;

  id?: string;
  profile_id?: string;
  handleItemUpdate: () => void;

  isEditable: boolean;
}

export function InfoGraphic({ title, description, percentage, id, profile_id, handleItemUpdate, isEditable }: InfoGraphicProps) {
  const type = 'info_graphic';

  const { account, isAuthenticated } = useContext(AuthContext);
  const { username } = useParams();
  const isItMyAccount = account?.username === username;
  
  return (
    isItMyAccount && isAuthenticated && isEditable ?
      <EditableComponent
        id={id}
        profile_id={profile_id}
        item_title={title}
        item_description={description}
        item_type={type}
        item_value={percentage}
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