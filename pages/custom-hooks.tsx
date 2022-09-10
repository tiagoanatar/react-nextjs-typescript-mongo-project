import { useState, useEffect } from "react";
import { Admin } from "../components/layouts/admin";
import { useTest } from "../hooks/useTest";
import { useHover } from "../hooks/useHover";
import { useOnWindowScroll } from "../hooks/useOnWindowScroll";

const Test = () => {

  const {test, customSetTest} = useTest();

  const [callbackRef, isHovering] = useHover();

  useOnWindowScroll(() => console.log(`scroll Y: ${window.pageYOffset}`));

  return (
    <>
      <div  style={{ height: "300vh" }}>
        <h1>Custom Hooks Test</h1>
        <hr />
        <h4>Test Number</h4>
        <button onClick={() => customSetTest(445)}>Set Var to 445</button> <button onClick={() => customSetTest(6)}>Set var to 6</button>
        <hr />
        <h4>Check Hover</h4>
        <a ref={callbackRef}>{isHovering ? "Hovering" : "Not hovering"}</a>
        <hr />
        <h4>Check Window Scroll</h4>
        Check console log
      </div>
    </>
  );
};

// Choose layout
Test.layout = Admin

export default Test;
