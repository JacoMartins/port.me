import { ReactNode } from 'react';
import { Button } from './styles';
import { CaretRight } from 'phosphor-react';

interface IconButtonProps {
  title: string;
  description: string;
  icon?: ReactNode;
  action?: () => any;
  arrowRight: boolean;
}

export function IconButton({ title, description, icon, action, arrowRight }: IconButtonProps) {
  return (
    <Button onClick={action ? action : undefined}>
      <div className='MainContainer'>

        {icon? icon : null}

        <div className='TextCotainer'>
          <h3>{title}</h3>
          {description === '' ? null : <p>{description}</p>}
        </div>
        {arrowRight? <CaretRight size={16} weight='bold'/> : null}

      </div>
    </Button>
  )
}