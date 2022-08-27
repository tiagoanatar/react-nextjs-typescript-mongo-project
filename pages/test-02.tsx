import { useState, useEffect } from "react";
import { Blank } from "../components/layouts/blank";

const Test = () => {

  const [data, setData] = useState({});

  async function fecthData(){
    const res = await fetch('https://reqres.in/api/users');
    const info = await res.json();
    setData(info);
  } 

  useEffect(() => {
    fecthData()
  },[])

  console.log(data);

  return (
    <>
      <h1>Test Page</h1>
      <div className="card-container">
        {data ? data?.data?.map((item) => {
          return (

            <div className="card">
              <div className="card-image">
                <img src={item.avatar} />
              </div>
              <div className="card-body">
                <p className="card-title">{item.first_name}</p>
                <p className="card-email">{item.email}</p>
                <button className="card-button">Edit</button>
              </div>
            </div>
          )
        }) : null}
      </div>
    </>
  );
};

// Choose layout
Test.layout = Blank

export default Test;
