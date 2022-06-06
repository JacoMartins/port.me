import { P600 } from "../../global";
import { Div } from "./styles";
import { Percentage } from "./styles";

interface InfoGraphicProps{
  title: string;
  percentage: number;
}

export function InfoGraphic({title, percentage}:InfoGraphicProps){
  return(
    <Div>
      <div className="Container">
        {title ? <h3>{title}</h3> : <></>}
        {percentage ? <P600>{percentage}%</P600> : <></>}

        <Percentage value={percentage} />
      </div>
    </Div>
  )
}