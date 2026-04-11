import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { hexColorGen } from "./assets/hexColorGen.js";
import { oList } from "./assets/helpers.js";
import { themes } from "./themes.js";

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
      <main
        className={`grid grid-cols-[50%_50%] w-[calc(100%_-_2rem)] gap-[calc(5%_-_0rem)] p-[calc(5%_-_1rem)]`}
      >
        {themes.oMap((_) => (
          <ThemeTemplate arg={_} />
        ))}
      </main>
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

const ThemeTemplate = ({ arg }) => {
  const id = crypto.randomUUID();
  return (
    <>
      <template-tag
        id={`template${id}`}
        className={`flex relative bg-[${arg.c1}] text-[${arg.text}] w-full aspect-[1/2] rounded-4 overflow-hidden`}
      >
        <appbar
          id={`appbar${id}`}
          className={`flex bg-[${arg.c0}] w-full h-[10%] absolute top-0 left-0 items-center justify-center`}
        >
          {arg.id}
        </appbar>
        <sidebar
          id={`sidebar${id}`}
          className={`flex bg-[${arg.c0}] w-[25%] h-[calc(100%_-_25px) absolute top-[25px] left-0`}
        ></sidebar>
        <main
          id={`main${id}`}
          className={`flex gap-4 bg-[${arg.c1}] w-full h-full mt-[25px] flex-col items-center justify-center`}
        >
          {[...Array(3)].map((_) => (
            <card
              id={`card${id}`}
              className={` flex
              bg-[${arg.c0}] rounded-4 flex-col w-[75%] aspect-[1.8/1] m[0_auto]
              bg-[${arg.c2}]
              `}
            >
              <header id={`flex card-header${id}`}></header>
            </card>
          ))}
        </main>
      </template-tag>
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
