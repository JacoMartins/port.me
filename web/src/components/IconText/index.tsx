import { ReactNode } from "react";
import { Div } from "./styles";

interface IconTextProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export function IconText({ title, description, icon }: IconTextProps) {

  return (
    <Div>
      <div className='MainContainer'>

        {icon ? icon : null}

        <div className='TextCotainer'>
          <h3>{title}</h3>
          {description === '' ? null : <p>{description}</p>}
        </div>
      </div>
    </Div>
  )
}