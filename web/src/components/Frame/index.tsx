import { P600 } from "../../global";
import { Image } from "./styles";

interface FrameProps {
  src?: string;
}

export function Frame({ src }: FrameProps) {
  return (
    <Image src={src}>
    </Image>
  )
}