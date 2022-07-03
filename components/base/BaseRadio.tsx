
interface Radio {
  name: string
  label: string
  id: string
  value: string
}

export const BaseButton = ({name, label, id, value} : Radio) => {
  return (
    <div className="theme-radio">
      <input type="radio" id={id} name={name} value={value}></input>
      <label htmlFor={id}>{label}</label>
    </div>

  )
}