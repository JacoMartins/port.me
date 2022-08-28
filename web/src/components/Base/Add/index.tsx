import { GearSix, NotePencil, Plus, X } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { api } from "../../../services/api";
import { Div } from "./styles";

interface AddProps {
  openNewSectionModal: () => void;
}

export function Add({ openNewSectionModal }: AddProps) {
  const [showActions, setShowActions] = useState(false);
  const { account } = useContext(AuthContext);
  const { username } = useParams();
  const isMyProfile = account?.username === username;

  function showActionsHandle() {
    setShowActions(!showActions);
  }

  return (
    isMyProfile ?
    
    <Div showActions={showActions}>
      <button type="button" onClick={openNewSectionModal}>
        <Plus size={24} weight="bold" />
      </button>
    </Div>

    :

    null
  )
}