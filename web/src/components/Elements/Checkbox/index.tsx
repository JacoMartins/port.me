import { Check } from "phosphor-react";

interface CheckboxProps{
  value: any;
  text: string;
  onChange: () => void;
}

export function Checkbox({value, text, onChange}:CheckboxProps) {
  return (
    <label>
      <input type="checkbox" onChange={onChange} value={value} />
      <div><Check size={14} weight="bold" /></div>
      {text}
    </label>
  )
}