import { CircleNotch, PaperPlaneRight, Plus, Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { TransparentButton } from "../../../global";
import { LoadContainer } from "../../../routes/Profile/styles";
import { api } from "../../../services/api";
import { NewComponent } from "../../Modal/NewComponent";
import { SectionComponentController } from "../../Controller/SectionComponentController";
import { Main, SectionContainer, Title, TitleInput } from "./styles";

interface SectionProps {
  id: string;
  title: string;
  profile_id?: string;
  handleSectionUpdate: () => void;
}

interface Section {
  id: string;
  title: string;
}

interface Component {
  id: string;
  section_id: string;
  title: string;
  value: number;
  type: string;
  description: string;

}

export function Section({ id, title, profile_id, handleSectionUpdate }: SectionProps) {
  const { username } = useParams();
  const { account } = useContext(AuthContext);

  const [components, setComponents] = useState<Component[]>([]);

  const isItMyAccount = account?.username === username;
  const [isDataReady, setIsDataReady] = useState(false);

  const [showSectionTitleSubmitButton, setShowSectionTitleSubmitButton] = useState(false);
  const [sectionTitle, setSectionTitle] = useState(title);
  const [isSendingSectiontitle, setIsSendingSectionTitle] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const [isNewComponentModalOpen, setIsNewComponentModalOpen] = useState(false);

  const [updateComponents, setUpdateComponents] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      await api.get(`/components?section_id=${id}`).then(res => {
        setComponents(res.data);
        setIsDataReady(true);
      });
    };

    fetch();
  }, [updateComponents]);

  async function handleDeleteSection(id: string) {
    event?.preventDefault();

    setIsDeleting(true);

    await api.delete('/section', {
      data: {
        profile_id,
        id
      }
    });

    setIsDeleting(false);

    handleSectionUpdate();
  }

  async function handleUpdateSection({ id, title }: Section) {
    event?.preventDefault();

    setIsSendingSectionTitle(true);

    await api.put('/section', {
      profile_id,
      id,
      title
    });

    setIsSendingSectionTitle(false);

    setShowSectionTitleSubmitButton(false);
  }

  function handleOpenModal() {
    setIsNewComponentModalOpen(true);
  }

  function handleCloseModal() {
    setIsNewComponentModalOpen(false);
  }

  function handleComponentsUpdate(){
    setUpdateComponents(!updateComponents);
  }

  return (
    <Main id={id.slice(0, 6)}>
      <NewComponent isOpen={isNewComponentModalOpen} onRequestClose={handleCloseModal} id={id} profile_id={profile_id} handleComponentsUpdate={handleComponentsUpdate} />
      <SectionContainer>

        {
          isItMyAccount ?
            <div className="My HeaderContainer">
              <TitleInput
                onSubmit={() => handleUpdateSection({ title: sectionTitle, id: id })}
                onFocus={() => setShowSectionTitleSubmitButton(true)}
              >
                <input
                  id={`${id}.input`}
                  type='text'
                  defaultValue={title}
                  onChange={(event) => setSectionTitle(event.target.value)}
                />

                {
                  showSectionTitleSubmitButton &&
                  <button type="submit">
                    {
                      isSendingSectiontitle ?
                        <CircleNotch size={24} weight='regular' className="load" />
                        :
                        <PaperPlaneRight size={24} weight='regular' />
                    }
                  </button>
                }

              </TitleInput>
              <div className="ButtonContainer">
                <TransparentButton type="button" onClick={handleOpenModal}><Plus size={20} weight='regular' /></TransparentButton>
                <TransparentButton type="button" onClick={() => handleDeleteSection(id)}>
                  {
                    isDeleting ?
                      <CircleNotch size={20} weight='regular' className="load" />
                      :
                      <Trash size={20} weight='regular' />
                  }
                </TransparentButton>
              </div>
            </div>
            :
            <div className="HeaderContainer">
              <Title>
                {title}
              </Title>
            </div>
        }

        {
          isItMyAccount && components.length >= 1 && <hr></hr>
        }

        {
          isItMyAccount ?
            <div className="My MainContainer">
              {
                isDataReady ?
                  components.map(component => (
                    <SectionComponentController
                      id={component.id}
                      type={component.type}
                      title={component.title}
                      description={component.description}
                      section_id={component.section_id}
                      value={0}
                      key={component.id}
                      profile_id={profile_id}
                      handleComponentsUpdate={handleComponentsUpdate}
                    />
                  ))
                  :
                  <LoadContainer>
                    <CircleNotch size={24} weight='regular' className="load" />
                  </LoadContainer>
              }
            </div>
            :
            <div className="MainContainer">
              {
                isDataReady ?
                  components.map(component => (
                    <SectionComponentController
                      id={component.id}
                      type={component.type}
                      title={component.title}
                      description={component.description}
                      section_id={component.section_id}
                      value={0}
                      key={component.id}
                      profile_id={profile_id}
                      handleComponentsUpdate={handleComponentsUpdate}
                    />
                  ))
                  :
                  <LoadContainer>
                    <CircleNotch size={24} weight='regular' className="load" />
                  </LoadContainer>
              }
            </div>
        }

      </SectionContainer>
    </Main>
  )
}