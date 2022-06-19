import { CircleNotch, PencilSimple, Trash } from "phosphor-react";
import { ReactNode, useState } from "react"
import { api } from "../../../services/api";
import { EditItem } from "../../Modal/EditItem";
import { Main, ShowActionBallon } from "./styles";

interface EditableComponentProps {
  children: ReactNode;
  id?: string;
  profile_id?: string;
  handleItemUpdate: () => void;
  item_title: string;
  item_description: string;
  item_type: string;
}

export function EditableComponent({ children, id, profile_id, handleItemUpdate, item_title, item_description, item_type }: EditableComponentProps) {
  const [showActions, setShowActions] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditingItemModalOpen, setIsEditingItemModalOpen] = useState(false);

  function handleShowActions() {
    setShowActions(true);

    setTimeout(() => {
      setShowActions(false);
    }, 3000)
  }

  function handleCloseEditingItemModal() {
    setIsEditingItemModalOpen(false);
  }

  async function handleDeleteItem() {
    setIsDeleting(true);

    await api.delete('/items', {
      data: {
        id,
        profile_id
      }
    })

    setIsDeleting(false);
    handleItemUpdate();
  }

  return (
    <>
      <EditItem
        id={id}
        profile_id={profile_id}
        item_title={item_title}
        item_description={item_description}
        item_type={item_type}
        isOpen={isEditingItemModalOpen}
        onRequestClose={handleCloseEditingItemModal}
        handleItemUpdate={handleItemUpdate}
      />

      <Main onClick={handleShowActions}>
        {
          showActions &&
          <ShowActionBallon>
            <button onClick={() => setIsEditingItemModalOpen(true)}>
              <PencilSimple size={20} />
            </button>

            <button onClick={handleDeleteItem}>
              {
                isDeleting ?
                  <CircleNotch size={20} className="load" />
                  :
                  <Trash size={20} />
              }
            </button>
          </ShowActionBallon>
        }
        {children}
      </Main>
    </>
  )
}