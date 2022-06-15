import { User } from "phosphor-react";
import { ReactNode } from "react";
import { Button } from "./styles";

interface MenuButtonProps{
  icon: ReactNode;
  children: ReactNode;
  onClick?: () => void;
}

export function MenuButton({icon, children, onClick}:MenuButtonProps) {
  return (
    <Button type="button" onClick={onClick}>
      {icon}
      {children}
    </Button>
  )
}