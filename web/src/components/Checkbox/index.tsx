import { Check } from "phosphor-react";

interface CheckboxProps{
  value: string;
  text: string;
}

export function Checkbox({value, text}:CheckboxProps) {
  return (
    <label>
      <input type="checkbox" value={value} />
      <div><Check size={14} weight="bold" /></div>
      {text}
    </label>
  )
}