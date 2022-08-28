import { MagnifyingGlass, PaperPlaneRight, Placeholder } from "phosphor-react";
import { Main } from "./styles";

interface SubmitInputProps {
  placeholder?: string;
  onChange?: any;
  onFocus?: any;
  onBlur?: any;
}

export function SubmitInput({ placeholder, onChange, onFocus, onBlur }: SubmitInputProps) {
  return (
    <Main>
      <input type='text' placeholder={placeholder} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
      <button type="submit">
        <MagnifyingGlass size={20} weight='regular' />
      </button>
    </Main>
  )
}