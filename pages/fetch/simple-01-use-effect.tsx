import { useState, useEffect } from "react";
import { Blank } from "../../components/layouts/blank";

const Test = () => {

  interface User {
    userId: 1,
    id: 1,
    title: string,
    completed: boolean
  }

  const [info, setData] = useState<User[]>([])

  useEffect(() => {
    async function fetchData(){
      const res = await fetch('https://jsonplaceholder.typicode.com/todos')
      const info = await res.json()
      setData(info)
    }
    fetchData()
  },[])

  return (
    <>
      <h1>Simple 01 - useEffect</h1>
      <div style={container}>
        {info.length > 0 ? info.map((item, index) => {
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
