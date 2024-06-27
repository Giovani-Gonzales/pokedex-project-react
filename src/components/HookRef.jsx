import React, { useEffect, useState, useRef } from "react";
import "./HookRef.css";

function HookRef() {
  const inputRef = useRef(null)

  const focarInput = () => {
    inputRef.current.focus()
  }

  return(
    <div className="inputBox">
      <input ref={inputRef} type="text"/>
      <button onClick={focarInput}>Focar no Input</button>
    </div>
  )
}

export default HookRef;
