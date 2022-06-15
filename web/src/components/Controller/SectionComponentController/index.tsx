import { CircleNotch, Cpu, Cursor, PencilSimple, Plus, Trash, WhatsappLogo } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { P600 } from "../../../global";
import { api } from "../../../services/api";
import { BlockHeader } from "../../Information/BlockHeader";
import { Frame } from "../../Information/Frame";
import { FrameContainer } from "../../Information/Frame/styles";
import { IconButton } from "../../Information/IconButton";
import { IconButtonContainer } from "../../Information/IconButton/styles";
import { InfoGraphic } from "../../Information/InfoGraphic";
import { InfoGraphicContainer } from "../../Information/InfoGraphic/styles";
import { EditComponent } from "../../Modal/EditComponent";
import { NewItem } from "../../Modal/NewItem";
import { ComponentButton } from "./styles";

interface Component {
  id: string;
  section_id: string;
  profile_id?: string;
  title: string;
  value: number;
  type: string;
  description: string;
  icon?: string;
  path?: string;
}

export function SectionComponentController({ id, profile_id, title, value, type, description }: Component) {
  const { username } = useParams();
  const [newItemModalOpen, setNewItemModalOpen] = useState(false);
  const [editComponentModalOpen, setEditComponentModalOpen] = useState(false);
  const { isAuthenticated, account } = useContext(AuthContext);
  const isItMyAccount = username === account?.username;
  const [isDeleting, setIsDeleting] = useState(false);

  const navigate = useNavigate();

  const [items, setItems] = useState<Component[]>([]);

  useEffect(() => {
    const fetch = async () => {
      await api.get(`/section/component_items?component_id=${id}`).then(
        res => setItems(res.data)
      );
    };

    fetch();
  }, [])

  async function handleDeleteComponent() {
    setIsDeleting(true);

    await api.delete('/section/components', {
      data: {
        profile_id,
        id
      }
    });

    setIsDeleting(false);
    navigate(0);
  }

  function handleNewItemModal() {
    setNewItemModalOpen(!newItemModalOpen)
  }

  function handleEditComponentModal() {
    setEditComponentModalOpen(!editComponentModalOpen)
  }

  return (
    <>
      <NewItem
        onRequestClose={handleNewItemModal}
        isOpen={newItemModalOpen}
        id={id}
        profile_id={profile_id}
      />

      <EditComponent
        onRequestClose={handleEditComponentModal}
        isOpen={editComponentModalOpen}
        id={id}
        profile_id={profile_id}
        component_title={title}
        component_description={description}
        component_type={type}
      />

      {
        isAuthenticated && isItMyAccount ?
          <div className="MyComponentContainer">
            <div className="Header">
              <h2>{title}</h2>

              <div className="ButtonContainer">
                <ComponentButton onClick={handleEditComponentModal}>
                  <PencilSimple size={20} weight='regular' />
                </ComponentButton>

                <ComponentButton onClick={handleDeleteComponent}>
                  {
                    isDeleting ?
                      <CircleNotch size={20} weight='regular' className="load" />
                      :
                      <Trash size={20} weight='regular' />
                  }
                </ComponentButton>
              </div>
            </div>
            <hr></hr>
            {
              type === 'icon_button' &&
              <IconButtonContainer>
                {
                  items.map(
                    item => (
                      <IconButton key={item.id} title={item.title} description={item.description} icon={<Cursor size={24} weight='light' />} arrowRight={true} />
                    )
                  )
                }
              </IconButtonContainer>
            }

            {
              type === 'frame' &&
              <FrameContainer>
                {
                  items.map(
                    item => (
                      <Frame key={item.id} src={item.icon} />
                    )
                  )
                }
              </FrameContainer>
            }

            {
              type === 'text' &&
              <>
                {
                  items.map(
                    item => (
                      <P600>{item.description}</P600>
                    )
                  )
                }
              </>
            }

            {
              type === 'info_graphic' &&
              <InfoGraphicContainer>
                {
                  items.map(
                    item => (
                      <InfoGraphic key={item.id} title={item.title} percentage={item.value} />
                    )
                  )
                }
              </InfoGraphicContainer>
            }

            {
              type === 'block_header' &&
              <BlockHeader title={title} description={description}>
                {
                  items.map(
                    item => (
                      <>
                        {item.type === 'icon_button' &&
                          <IconButton
                            title={item.title}
                            description={item.description}
                            icon={<WhatsappLogo weight="light" />}
                            arrowRight={true}
                            key={item.id}
                          />}

                        {item.type === 'info_graphic' &&
                          <InfoGraphic
                            title={item.title}
                            percentage={item.value}
                            key={item.id}
                          />}

                        {
                          item.type === 'text' &&
                          <P600>{item.description}</P600>
                        }

                        {
                          item.type === 'frame' &&
                          <FrameContainer>
                            {
                              items.map(
                                item => (
                                  <Frame key={item.id} src={item.icon} />
                                )
                              )
                            }
                          </FrameContainer>
                        }
                      </>
                    )
                  )
                }
              </BlockHeader>
            }

            <ComponentButton className="margin" title={'Add item to component ' + type} onClick={handleNewItemModal}>
              <Plus size={18} weight="regular" className="margin" />
              Adicionar item
            </ComponentButton>
          </div>
          :
          <>
            {
              type === 'icon_button' &&
              <IconButtonContainer>
                {
                  items.map(
                    item => (
                      <IconButton key={item.id} title={item.title} description={item.description} icon={<Cursor size={24} weight='light' />} arrowRight={true} path={item.path} />
                    )
                  )
                }
              </IconButtonContainer>
            }

            {
              type === 'info_graphic' &&
              <InfoGraphicContainer>
                {
                  items.map(
                    item => (
                      <InfoGraphic key={item.id} title={item.title} percentage={item.value} />
                    )
                  )
                }
              </InfoGraphicContainer>
            }

            {
              type === 'block_header' &&
              <BlockHeader title={title} description={description}>
                  {
                    items.map(
                      item => (
                        <>
                          {item.type === 'icon_button' &&
                            <IconButton
                              title={item.title}
                              description={item.description}
                              icon={<WhatsappLogo weight="light" />}
                              arrowRight={true}
                              path={item.path}
                              key={item.id}
                            />}

                          {item.type === 'info_graphic' &&
                            <InfoGraphic
                              title={item.title}
                              percentage={item.value}
                              key={item.id}
                            />}
                        </>
                      )
                    )
                  }
              </BlockHeader>
            }

            {
              type === 'text' &&
              <>
                {
                  items.map(
                    item => (
                      <P600>{item.description}</P600>
                    )
                  )
                }
              </>
            }

            {
              type === 'frame' &&
              <FrameContainer>
                {
                  items.map(
                    item => (
                      <Frame key={item.id} src={item.icon} />
                    )
                  )
                }
              </FrameContainer>
            }
          </>
      }
    </>
  )
}