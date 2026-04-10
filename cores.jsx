import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { hexConverter, calcularCorHex, gerarCorContexto } from "./assets/hexConverter.js";

/**
 * --- Prototype Application ---
 * Buildless ESM React Component (N-Koten Pattern)
 */
function App() {
  const cor = gerarCorContexto( 19 );
  const nc11 = {
    c0: gerarCorContexto(19),
    c1: gerarCorContexto("1f"),
    c2: gerarCorContexto("25"),
    c3: gerarCorContexto("2b"),
    c4: gerarCorContexto("30"),
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
