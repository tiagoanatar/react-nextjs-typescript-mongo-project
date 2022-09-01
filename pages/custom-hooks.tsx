import { useState, useEffect } from "react";
import { Admin } from "../components/layouts/admin";
import { useTest } from "../hooks/useTest";

import { useQuery } from "@tanstack/react-query";

const Test = () => {

  const {test, customSetTest} = useTest()

  //const {setGlobalVariable, getGlobalVariable} = useGlobalVariable()

  function setGlobalVariable(value: number){
    return value;
  }

  const { data } = useQuery(['global-variable'], () => 66);

  function getGlobalVariable(){
    console.log(data)
  }

  return (
    <>
      <h1>Custom Hooks Test</h1>
      <hr />
      <h4>Test Number</h4>
      <button onClick={() => customSetTest(445)}>Set Var to 445</button> <button onClick={() => customSetTest(6)}>Set var to 6</button>
      <hr />
      <h4>Global Variable</h4>

    </>
  );
};

// Choose layout
Test.layout = Admin

export default Test;
