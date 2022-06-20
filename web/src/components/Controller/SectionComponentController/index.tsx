import { Article, CircleNotch, CircleWavyCheck, Cpu, Cursor, Envelope, GithubLogo, InstagramLogo, LinkedinLogo, PencilSimple, Phone, Plus, Trash, WhatsappLogo } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { P600 } from "./styles";
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
import { ColumnContainer } from "../../Base/Section/styles";
import { Text } from "../../Information/Text";
import { IconTextContainer } from "../../Information/IconText/styles";
import { IconText } from "../../Information/IconText";

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
  handleComponentsUpdate: () => void;
}

export function SectionComponentController({ id, profile_id, title, value, type, description, handleComponentsUpdate }: Component) {
  const { username } = useParams();
  const [newItemModalOpen, setNewItemModalOpen] = useState(false);
  const [editComponentModalOpen, setEditComponentModalOpen] = useState(false);
  const { isAuthenticated, account } = useContext(AuthContext);
  const isItMyAccount = username === account?.username;
  const [isDeleting, setIsDeleting] = useState(false);
  const [updateItems, setUpdateItems] = useState(false);

  const [items, setItems] = useState<Component[]>([]);

  const renderIcons = (icon: string | undefined) => (
    icon === 'InstagramLogo' && <InstagramLogo size={24} weight='light' /> ||
    icon === 'WhatsappLogo' && <WhatsappLogo size={24} weight='light' /> ||
    icon === 'GitHubLogo' && <GithubLogo size={24} weight='light' /> ||
    icon === 'LinkedInLogo' && <LinkedinLogo size={24} weight='light' /> ||
    icon === 'Phone' && <Phone size={24} weight='light' /> ||
    icon === 'Email' && <Envelope size={24} weight='light' /> ||
    icon === 'CircleWavyCheck' && <CircleWavyCheck size={24} weight='light' /> ||
    icon === 'Article' && <Article size={24} weight='light' />
  );

  useEffect(() => {
    const fetch = async () => {
      await api.get(`/items?component_id=${id}`).then(
        res => setItems(res.data)
      );
    };

    fetch();
  }, [updateItems])

  async function handleDeleteComponent() {
    setIsDeleting(true);

    await api.delete('/components', {
      data: {
        profile_id,
        id
      }
    });

    setIsDeleting(false);

    handleComponentsUpdate();
  }

  function handleNewItemModal() {
    setNewItemModalOpen(!newItemModalOpen)
  }

  function handleEditComponentModal() {
    setEditComponentModalOpen(!editComponentModalOpen)
  }

  function handleItemUpdate() {
    setUpdateItems(!updateItems);
  }

  return (
    <>
      <NewItem
        onRequestClose={handleNewItemModal}
        isOpen={newItemModalOpen}
        id={id}
        profile_id={profile_id}
        component_type={type}
        handleItemUpdate={handleItemUpdate}
      />

      <EditComponent
        onRequestClose={handleEditComponentModal}
        isOpen={editComponentModalOpen}
        id={id}
        profile_id={profile_id}
        component_title={title}
        component_description={description}
        component_type={type}
        handleComponentsUpdate={handleComponentsUpdate}
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

            {/* !!! EDITABLE COMPONENTS-ITEM RENDERING !!! */}
            {/* !!! EDITABLE COMPONENTS-ITEM RENDERING !!! */}
            {/* !!! EDITABLE COMPONENTS-ITEM RENDERING !!! */}

            {
              type === 'icon_button' &&
              <IconButtonContainer>
                {
                  items.map(
                    item => (
                      <IconButton
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        icon={renderIcons(item.icon)}
                        arrowRight={true}
                        isEditable={true}

                        id={item.id}
                        profile_id={profile_id}
                        handleItemUpdate={handleItemUpdate}
                      />
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
                      <Frame
                        key={item.id}
                        src={item.icon}
                        isEditable={true}

                        id={item.id}
                        profile_id={profile_id}
                        isAuthenticated={isAuthenticated}
                        isItMyAccount={isItMyAccount}
                        handleItemUpdate={handleItemUpdate}
                      />
                    )
                  )
                }
              </FrameContainer>
            }

            {
              type === 'text' &&
              <ColumnContainer>
                {
                  items.map(
                    item => (
                      <Text
                        key={item.id}
                        title={item.title}
                        isEditable={true}

                        id={item.id}
                        profile_id={profile_id}
                        handleItemUpdate={handleItemUpdate}
                      >
                        {item.description}
                      </Text>
                    )
                  )
                }
              </ColumnContainer>
            }

            {
              type === 'info_graphic' &&
              <InfoGraphicContainer>
                {
                  items.map(
                    item => (
                      <InfoGraphic
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        percentage={item.value}
                        isEditable={true}

                        id={item.id}
                        profile_id={profile_id}
                        handleItemUpdate={handleItemUpdate}
                      />
                    )
                  )
                }
              </InfoGraphicContainer>
            }

            {
              type === 'icon_text' &&
              <IconTextContainer>
                {
                  items.map(
                    item => (
                      <IconText
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        isEditable={true}

                        icon={renderIcons(item.icon)}

                        id={item.id}
                        profile_id={profile_id}
                        handleItemUpdate={handleItemUpdate}
                      />
                    )
                  )
                }
              </IconTextContainer>
            }

            {
              type === 'block_header' &&
              /* !!! INSIDE BLOCK HEADER RENDERING !!! */
              /* !!! INSIDE BLOCK HEADER RENDERING !!! */
              /* !!! INSIDE BLOCK HEADER RENDERING !!! */

              <BlockHeader
                title={title}
                description={description}
              >
                {
                  items.map(item => {

                    if (item.type === 'icon_button') {
                      return (
                        <IconButton
                          title={item.title}
                          description={item.description}
                          icon={renderIcons(item.icon)}
                          arrowRight={true}
                          key={item.id}
                          isEditable={true}

                          id={item.id}
                          profile_id={profile_id}

                          handleItemUpdate={handleItemUpdate}
                        />
                      )
                    }

                    if (item.type === 'info_graphic') {
                      return (
                        <InfoGraphic
                          title={item.title}
                          description={item.description}
                          percentage={item.value}
                          key={item.id}
                          isEditable={true}

                          id={item.id}
                          profile_id={profile_id}
                          handleItemUpdate={handleItemUpdate}
                        />
                      )
                    }

                    if (item.type === 'text') {
                      return (
                        <Text
                          key={item.id}
                          id={item.id}
                          title={item.title}

                          isEditable={true}
                          handleItemUpdate={handleItemUpdate}
                        >
                          {item.description}
                        </Text>
                      )
                    }

                    if (item.type === 'frame') {
                      return (
                        <FrameContainer key={item.id}>
                          {
                            items.map(
                              item => (
                                <Frame
                                  key={item.id}
                                  src={item.icon}
                                  alt={item.description}
                                  isEditable={true}

                                  handleItemUpdate={handleItemUpdate}
                                />
                              )
                            )
                          }
                        </FrameContainer>
                      )
                    }

                    if (item.type === 'icon_text') {
                      return (
                        <IconTextContainer>
                          {
                            items.map(
                              item => (
                                <IconText
                                  key={item.id}
                                  title={item.title}
                                  description={item.description}
                                  isEditable={true}

                                  icon={renderIcons(item.icon)}

                                  id={item.id}
                                  profile_id={profile_id}
                                  handleItemUpdate={handleItemUpdate}
                                />
                              )
                            )
                          }
                        </IconTextContainer>
                      )
                    }

                    return (
                      <h3>Couldn't identify component.</h3>
                    )

                  })
                }
              </BlockHeader>
            }

            <ComponentButton className="margin" title={'Add item to component ' + type} onClick={handleNewItemModal}>
              <Plus size={18} weight="regular" className="margin" />
              Adicionar item
            </ComponentButton>
          </div>

          :

          /* !!! READ-ONLY COMPONENTS-ITEM RENDERING !!! */
          /* !!! READ-ONLY COMPONENTS-ITEM RENDERING !!! */
          /* !!! READ-ONLY COMPONENTS-ITEM RENDERING !!! */

          <>
            {
              type === 'icon_button' &&
              <IconButtonContainer>
                {
                  items.map(
                    item => (
                      <IconButton
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        icon={renderIcons(item.icon)}
                        arrowRight={true}
                        path={item.path}
                        isEditable={false}

                        handleItemUpdate={handleItemUpdate}
                      />
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
                      <InfoGraphic
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        percentage={item.value}
                        handleItemUpdate={handleItemUpdate}
                        isEditable={false}
                      />
                    )
                  )
                }
              </InfoGraphicContainer>
            }

            {
              type === 'icon_text' &&
              <IconTextContainer>
                {
                  items.map(
                    item => (
                      <IconText
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        isEditable={false}

                        icon={renderIcons(item.icon)}

                        id={item.id}
                        profile_id={profile_id}
                        handleItemUpdate={handleItemUpdate}
                      />
                    )
                  )
                }
              </IconTextContainer>
            }

            {
              type === 'block_header' &&
              <BlockHeader title={title} description={description}>
                {
                  items.map(item => {

                    if (item.type === 'icon_button') {
                      return (
                        <IconButton
                          title={item.title}
                          description={item.description}
                          icon={renderIcons(item.icon)}
                          arrowRight={true}
                          key={item.id}
                          isEditable={false}

                          id={item.id}
                          profile_id={profile_id}

                          handleItemUpdate={handleItemUpdate}
                        />
                      )
                    }

                    if (item.type === 'info_graphic') {
                      return (
                        <InfoGraphic
                          title={item.title}
                          description={item.description}
                          percentage={item.value}
                          key={item.id}
                          isEditable={false}

                          id={item.id}
                          profile_id={profile_id}
                          handleItemUpdate={handleItemUpdate}
                        />
                      )
                    }

                    if (item.type === 'text') {
                      return (
                        <Text
                          key={item.id}
                          id={item.id}
                          title={item.title}

                          isEditable={false}
                          handleItemUpdate={handleItemUpdate}
                        >
                          {item.description}
                        </Text>
                      )
                    }

                    if (item.type === 'frame') {
                      return (
                        <FrameContainer key={item.id}>
                          {
                            items.map(
                              item => (
                                <Frame
                                  key={item.id}
                                  src={item.icon}
                                  alt={item.description}
                                  isEditable={false}

                                  handleItemUpdate={handleItemUpdate}
                                />
                              )
                            )
                          }
                        </FrameContainer>
                      )
                    }

                    if (item.type === 'icon_text') {
                      return (
                        <IconTextContainer>
                          {
                            items.map(
                              item => (
                                <IconText
                                  key={item.id}
                                  title={item.title}
                                  description={item.description}
                                  isEditable={false}

                                  icon={renderIcons(item.icon)}

                                  id={item.id}
                                  profile_id={profile_id}
                                  handleItemUpdate={handleItemUpdate}
                                />
                              )
                            )
                          }
                        </IconTextContainer>
                      )
                    }

                    return (
                      <h3>Couldn't identify component.</h3>
                    )

                  })
                }
              </BlockHeader>
            }

            {
              type === 'text' &&
              <ColumnContainer>
                {
                  items.map(
                    item => (
                      <Text
                        title={item.title}
                        handleItemUpdate={() => { }}
                        key={item.id}
                        isEditable={false}
                      >
                        {item.description}
                      </Text>
                    )
                  )
                }
              </ColumnContainer>
            }

            {
              type === 'frame' &&
              <FrameContainer>
                {
                  items.map(
                    item => (
                      <Frame
                        key={item.id}
                        src={item.icon}
                        alt={item.description}
                        isEditable={false}

                        handleItemUpdate={() => { }}
                      />
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