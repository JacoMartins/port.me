import { ReactNode } from "react";
import { P600 } from "../../../global";
import { EditableComponent } from "../../Elements/EditableItem";

interface TextProps {
  children: string;
  isItMyAccount?: boolean;
  id?: string;
  profile_id?: string;
  title: string;
  handleItemUpdate: () => void;
}

export function Text({ children, isItMyAccount, id, profile_id, handleItemUpdate, title }: TextProps) {
  const type = 'text';

  return (
    isItMyAccount ?
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