import { useState, useEffect } from "react";
import { Admin } from "../components/layouts/admin";
import { useTest } from "../hooks/useTest";
import { useHover } from "../hooks/useHover";
import { useOnWindowScroll } from "../hooks/useOnWindowScroll";
import { useKeyPress } from "../hooks/useKeyPress";
import { useHash } from "../hooks/useHash";

const Test = () => {

  // useTest
  const {test, customSetTest} = useTest();

  // useHover
  const [callbackRef, isHovering] = useHover();

  // useWindowScroll
  useOnWindowScroll(() => console.log(`scroll Y: ${window.pageYOffset}`));

  // useKeyPress
  const wPressed = useKeyPress("w");

  // useHash
  const [hash, setHash] = useHash();

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
        <hr />
        <h4>Check Key Press</h4>
        <p>The "w" key is {!wPressed ? "not " : ""}pressed!</p>
        <hr />
        <h4>Check Key Press</h4>
        <p>window.location.href: {typeof window !== "undefined" ? window.location.href : null}</p>
        <p>Edit hash: </p>
        <input value={hash} onChange={(e) => setHash(e.target.value)} />
      </div>
    </>
  );
};

// Choose layout
Test.layout = Admin

export default Test;
