import { useRef, useState, useEffect } from "react";

interface Radio {
  name: string;
  label: string;
  id: string;
  value: string;
  alternate?: boolean
}

const defaultProps = {
  alternate: false
}

export const BaseRadio = ({ name, label, id, value, alternate = false }: Radio) => {
  const input = useRef(null);
  const [data, setData] = useState({ checked: false });

  const classes = [
    'theme-radio',
    data.checked ? 'theme-radio-checked' : '',
    alternate ? 'alt-true' : 'alt-false',
  ]

  const radioCheck = () => {
    setData({...data, checked: !data.checked});
    //input.current.checked = !input.current.checked
    console.log(input.current?.value);
  };

  return (
    <div className={classes.join(' ')} onClick={() => radioCheck()}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        ref={input}
        checked={data.checked}
        onChange={() => radioCheck()}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};