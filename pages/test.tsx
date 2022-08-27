import { useState, useEffect, useContext } from "react";
import { Blank } from "../components/layouts/blank";

import { useAppSelector, useAppDispatch } from '../store/hooks'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '../store/counterSlice'

const Test = () => {

  interface User {
    userId: 1,
    id: 1,
    title: string,
    completed: boolean
  }

  const [data, setData] = useState<User[]>([])

  useEffect(() => {
    async function fetchData(){
      const res = await fetch('https://jsonplaceholder.typicode.com/todos')
      const info = await res.json()
      setData(info)
    }
    fetchData()
  },[])

  console.log(data)

  // global state
  const count = useAppSelector(selectCount)

  return (
    <>
      <h1>Test Page  - {count}</h1>
      <div style={container}>
        {data.length > 0 ? data.map((item, index) => {
          return (
            <div key={index} style={card}>
              <h6>{item.title} / {item.id}</h6>
            </div>
          )
        }) : null}
      </div>
    </>
  );
};

// Choose layout
Test.layout = Blank

// Styles
const container = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px'
}

const card = {
  border: '3px solid #ccc',
  width: '20%'
}

export default Test;
