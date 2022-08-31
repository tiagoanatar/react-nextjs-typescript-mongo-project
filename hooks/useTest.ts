import { useState } from "react";

export const useTest = () => {
  const [test, setTest] = useState(0);

  function customSetTest(value: number){
    setTest(value);
    console.log(test);
  } 
  
  return {test, customSetTest};
}