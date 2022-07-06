import { useRef, useState, useEffect, Dispatch, SetStateAction } from "react";

interface Radio {
  name: string
  label: string
  id: string
  value: string
  alternate?: boolean
  effectValue: string | undefined
  effectFunction: Dispatch<SetStateAction<string | undefined>>
}

const defaultProps = {
  alternate: false
}

export const BaseRadio = ({ name, label, id, value, alternate = false, effectValue, effectFunction }: Radio) => {
  const input = useRef<HTMLInputElement>(null);
  const [data, setData] = useState({ checked: false });

  const classes = [
    'theme-radio',
    data.checked ? 'theme-radio-checked' : '',
    alternate ? 'theme-radio-alt-true' : 'theme-radio-alt-false',
  ]

  const radioCheck = () => {
    setData({...data, checked: !data.checked});
    effectFunction(input.current?.value)
  };

  useEffect(() => {
    if (effectValue === input.current?.value){
      setData({...data, checked: true});
    } else {
      setData({...data, checked: false});
    }
  }, [effectValue])

  return (
    <div className={classes.join(' ')} onClick={() => effectFunction(input.current?.value)}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        ref={input}
        checked={data.checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};