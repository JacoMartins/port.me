import { ReactNode, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { P600 } from "../../../global";
import { EditableComponent } from "../../Elements/EditableItem";

interface TextProps {
  children: string;
  id?: string;
  profile_id?: string;
  title: string;
  handleItemUpdate: () => void;
  isEditable: boolean;
}

export function Text({ children, id, profile_id, handleItemUpdate, title, isEditable }: TextProps) {
  const type = 'text';

  const { account, isAuthenticated } = useContext(AuthContext);
  const { username } = useParams();
  const isItMyAccount = account?.username === username;

  return (
    isAuthenticated && isItMyAccount && isEditable ?
      <EditableComponent
        id={id}
        profile_id={profile_id}
        handleItemUpdate={handleItemUpdate}
        item_title={title}
        item_description={children}
        item_type={type}
      >
        <P600>{children}</P600>
      </EditableComponent>

      :

      <P600>{children}</P600>
  )
}