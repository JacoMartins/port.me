import { ReactNode, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { EditableComponent } from "../../Elements/EditableItem";
import { Div } from "./styles";

interface IconTextProps {
  title: string;
  description: string;
  icon?: ReactNode;

  item_icon?: string;

  id?: string;
  profile_id?: string;
  handleItemUpdate: () => void;

  isEditable: boolean;
}

export function IconText({ title, description, handleItemUpdate, id, profile_id, icon, item_icon, isEditable }: IconTextProps) {
  const type = 'icon_text';

  const { account, isAuthenticated } = useContext(AuthContext);
  const { username } = useParams();
  const isItMyAccount = account?.username === username;

  return (
    <>
      {
        isAuthenticated && isItMyAccount && isEditable ?
          <EditableComponent
            id={id}
            profile_id={profile_id}
            handleItemUpdate={handleItemUpdate}
            item_title={title}
            item_description={description}
            item_type={type}
            item_icon={item_icon}
          >
            <Div>
              <div className='IconText MainContainer'>

                {icon ? icon : null}

                <div className='IconText TextContainer'>
                  <h3>{title}</h3>
                  {description === '' ? null : <p>{description}</p>}
                </div>
              </div>
            </Div>
          </EditableComponent>
          :
          <Div>
            <div className='IconText MainContainer'>

              {icon ? icon : null}

              <div className='TextContainer'>
                <h3>{title}</h3>
                {description === '' ? null : <p>{description}</p>}
              </div>
            </div>
          </Div>
      }
    </>
  )
}