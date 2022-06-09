import { GearSix, NotePencil, Plus, X } from "phosphor-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Div } from "./styles";

interface AddProps {
  openNewSectionModal: () => void;
}

export function Add({openNewSectionModal}:AddProps) {
  const [showActions, setShowActions] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);

  function showActionsHandle() {
    setShowActions(!showActions);
  }

  return (
    isAuthenticated ? <Div showActions={showActions}>
      {
        showActions ?
          <>
            <button type="button" onClick={showActionsHandle} title="Fechar opções">
              <X size={24} weight={'bold'} />
            </button>

            <button type="button" onClick={() => {openNewSectionModal(); showActionsHandle();}} title="Fazer um post">
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