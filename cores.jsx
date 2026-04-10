import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { hexColorGen } from "./assets/hexColorGen.js";

/**
 * --- Prototype Application ---
 * Buildless ESM React Component (N-Koten Pattern)
 */
function App() {
  document.body.style.background = nc11.c1;

  return (
    <>
      <AppBar title="N-Koten Cores" bg={nc11.c0} />
      <div className="flex flex-col items-center justify-center min-h-screen gap-6">
        <p className="text-slate-400">hexColorGen( 19 ) =&gt; {cor}</p>

        {/* {Object.values(nc11).map((cor) => ( */}
        {nc11.mapValues((cor) => (
          <>
            <ColorCard cor={cor} />
          </>
        ))}
      </div>
    </>
  );
}

const AppBar = ({ title, bg }) => {
  return (
    <>
      <appbar
        className={`flex items-center justify-center p-8 bg-[${bg && bg}] w-full h-[81px]`}
      >
        {title && <p className="text-red-400 text-4xl font-black">{title}</p>}
      </appbar>
    </>
  );
};

const ColorCard = ({ cor }) => {
  return (
    <>
      <p className={`bg-[${cor}]`}>{cor}</p>
    </>
  );
};

const cor = hexColorGen({ value: 19 }).r;
const nc11 = {
  c0: hexColorGen({ value: 19 }).value,
  c1: hexColorGen({ value: "1f" }).value,
  c2: hexColorGen({ value: "25" }).value,
  c3: hexColorGen({ value: "2b" }).value,
  c4: hexColorGen({ value: "30" }).value,
};

createRoot(document.getElementById("app_root")).render(<App />);
