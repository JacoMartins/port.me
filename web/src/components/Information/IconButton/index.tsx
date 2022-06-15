import { ReactNode } from 'react';
import { Button } from './styles';
import { CaretRight } from 'phosphor-react';

interface IconButtonProps {
  title: string;
  description: string;
  icon?: ReactNode;
  path?: string;
  arrowRight: boolean;
}

export function IconButton({ title, description, icon, path, arrowRight }: IconButtonProps) {
  return (
    <Button onClick={path ? () => window.open(path) : undefined} type="button">
      <div className='IconButtonContainer'>
        <div className='IconButton Container'>

        {icon? icon : null}

        <div className='TextCotainer'>
          <h3>{title}</h3>
          {description === '' ? null : <p>{description}</p>}
        </div>

        </div>
        {arrowRight? <CaretRight size={16} weight='bold'/> : null}
      </div>
    </Button>
  )
}