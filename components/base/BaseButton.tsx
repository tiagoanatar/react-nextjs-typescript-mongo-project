
interface Button {
  label: string
  type: 'button' | 'submit' | 'reset' 
}

export const BaseButton = ({label, type} : Button) => {
  return (
    <button type={type}>{label}</button>
  )
}