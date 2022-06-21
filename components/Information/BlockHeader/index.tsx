import { ReactNode } from "react";
import { P600 } from "../../../global";
import { Aside } from "./styles";

interface BlockHeaderProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function BlockHeader({ title, description, children }:BlockHeaderProps){
    return (
      <Aside>
        <div className='BlockHeader TextContainer'>
  
          {title? <h2>{title}</h2> : null}
  
          {description? <P600>{description}</P600> : null}
  
        </div>

        {children}
      </Aside>
    )
}