import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { P600 } from "../../../global";
import { EditableComponent } from "../../Elements/EditableItem";
import { Image } from "./styles";

interface FrameProps {
  src?: string;
  alt?: string;

  isItMyAccount?: boolean;
  isAuthenticated?: boolean;
  id?: string;
  profile_id?: string;
  handleItemUpdate: () => void;

  isEditable: boolean;
}

export function Frame({ src, alt, id, profile_id, handleItemUpdate, isEditable }: FrameProps) {
  const type = 'frame';

  const { account, isAuthenticated } = useContext(AuthContext);
  const { username } = useParams();
  const isItMyAccount = account?.username === username;

  return (
    <>
      {
        isAuthenticated && isItMyAccount && isEditable ?
          <EditableComponent
            item_title={'Frame'}
            item_description={alt as string}
            item_type={type}
            item_icon={src}

            id={id}
            profile_id={profile_id}
            handleItemUpdate={handleItemUpdate}
          >
            <Image src={src} title={alt as string} className="Frame">
            </Image>
          </EditableComponent>
          :
          <Image src={src} title={alt as string} className="Frame">
          </Image>
      }
    </>
  )
}