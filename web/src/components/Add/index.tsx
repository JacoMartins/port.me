import { GearSix, NotePencil, Plus, X } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import { Div } from "./styles";

interface AddProps {
  openNewSectionModal: () => void;
}

export function Add({ openNewSectionModal }: AddProps) {
  const [showActions, setShowActions] = useState(false);
  const { account } = useContext(AuthContext);
  const { username } = useParams();
  const [viewingProfile, setViewingProfile] = useState({});
  const [profile, setProfile] = useState({});
  const isMyProfile = account?.username === username;

  console.log(viewingProfile);

  function showActionsHandle() {
    setShowActions(!showActions);
  }

  return (
    isMyProfile ? <Div showActions={showActions}>
      {
        showActions ?
          <>
            <button type="button" onClick={showActionsHandle} title="Fechar opções">
              <X size={24} weight={'bold'} />
            </button>

            <button type="button" onClick={() => { openNewSectionModal(); showActionsHandle(); }} title="Fazer um post">
              <NotePencil size={24} weight={'bold'} />
            </button>

            <button type="button" title="Configurações do perfil">
              <GearSix size={24} weight={'bold'} />
            </button>
          </>
          :
          <button type="button" onClick={showActionsHandle}>
            <Plus size={24} weight="bold" />
          </button>
      }
    </Div> : null
  )
}