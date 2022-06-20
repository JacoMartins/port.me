import { ReactNode, useContext } from 'react';
import { Button } from './styles';
import { CaretRight } from 'phosphor-react';
import { AuthContext } from '../../../contexts/AuthContext';
import { useParams } from 'react-router-dom';
import { EditableComponent } from '../../Elements/EditableItem';

interface IconButtonProps {
  title: string;
  description: string;
  icon?: ReactNode;
  path?: string;
  arrowRight: boolean;

  id?: string;
  profile_id?: string;
  handleItemUpdate: () => void;

  isEditable: boolean;
}

export function IconButton({ title, description, icon, path, arrowRight, id, profile_id, handleItemUpdate, isEditable }: IconButtonProps) {
  const type = 'icon_button';

  const { account, isAuthenticated } = useContext(AuthContext);
  const { username } = useParams();
  const isItMyAccount = account?.username === username;

  return (
    <>
      {
        isAuthenticated && isItMyAccount && isEditable ?
          <EditableComponent
            item_title={title}
            item_description={description}
            item_type={type}

            id={id}
            profile_id={profile_id}
            handleItemUpdate={handleItemUpdate}
          >
            <Button onClick={path ? () => undefined : undefined} type="button">
              <div className='IconButtonContainer'>
                <div className='IconButton Container'>

                  {icon ? icon : null}

                  <div className='TextCotainer'>
                    <h3>{title}</h3>
                    {description === '' ? null : <p>{description}</p>}
                  </div>

                </div>
                {arrowRight ? <CaretRight size={16} weight='bold' /> : null}
              </div>
            </Button>
          </EditableComponent>
          :
          <Button onClick={path ? () => window.open(path) : undefined} type="button">
            <div className='IconButtonContainer'>
              <div className='IconButton Container'>

                {icon ? icon : null}

                <div className='TextCotainer'>
                  <h3>{title}</h3>
                  {description === '' ? null : <p>{description}</p>}
                </div>

              </div>
              {arrowRight ? <CaretRight size={16} weight='bold' /> : null}
            </div>
          </Button>
      }
    </>
  )
}