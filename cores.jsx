import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { hexConverter } from "./assets/hexConverter.js";

/**
 * --- Prototype Application ---
 * Buildless ESM React Component (N-Koten Pattern)
 */
function App() {
  const cor = hexConverter( 19 ).r;
  const nc11 = {
    c0: hexConverter(19).value,
    c1: hexConverter("1f").value,
    c2: hexConverter("25").value,
    c3: hexConverter("2b").value,
    c4: hexConverter("30").value,
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-5xl font-black text-sky-400 tracking-tighter">N-Koten</h1>
      <p className="text-slate-400">hexConverter( 19 ) =&gt; {cor}</p>
      
      { Object.values( nc11 ).map( cor => <>
        <ColorCard cor={ cor } />
      </> ) }
    </div>
  );
}

const ColorCard = ({cor}) => {
  return( <>
    <p className={`bg-[${ cor }]`}>{ cor }</p>
  </> );
};

createRoot(document.getElementById("app_root")).render(<App />);
