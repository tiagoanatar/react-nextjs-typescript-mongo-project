import { useRef, useState, useEffect, Dispatch, SetStateAction } from "react";

interface Radio {
  name: string
  label: string
  id: string
  value?: string
  dataTestId?: string
}

export const BaseInput = ({ name, label, id, value = '', dataTestId }: Radio) => {
  const [data, setData] = useState('');

  useEffect(() => {
    setData(value)
  }, [value])

  const changeValue = (value: string)=> {
    setData(value)
  }

  return (
    <div className="theme-input">
      <p><label htmlFor={id}>{label}</label></p>
      <input
        type="text"
        id={id}
        name={name}
        value={data}
        onChange={(e) => changeValue(e.target.value)}
        data-test-id={dataTestId}
      />
    </div>
  );
};