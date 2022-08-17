import { useState, useEffect } from "react";
import { Blank } from "../components/layouts/blank";

const Home = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData(){
      const res = await fetch('https://jsonplaceholder.typicode.com/todos')
      const info = await res.json()
      setData(info)
    }
    fetchData()
    console.log(data)
  },[])

  return (
    <>
      <h1>Test Page</h1>
      
    </>
  );
};

// Choose layout
Home.layout = Blank

export default Home;
