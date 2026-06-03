import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { hexColorGen } from './assets/hexColorGen.js';
import { oList } from './assets/helpers.js';
import { themes } from './themes.js';

import SideBarTile from './components/ui/SideBarTile.jsx';
import SideBar, {
  SideBarFooter,
  SideBarHeader,
} from './components/layout/SideBar.jsx';
import Device from './components/ui/Device.jsx';

const cores = [
  '#16151D', // -1 +7
  '#191724', // -2 +11

  // ogx
  '#09080d',
  '#120f19',
  '#1c1726',
  '#493d65',
];

/**
 * --- Prototype Application ---
 * Buildless ESM React Component (N-Koten Pattern)
 */
function App() {
  document.body.style.background = nc11.c1;

  return (
    <>
      <HashRouter>
        <AppBar title="N-Koten Cores" bg={'#181611e'} pos="sticky" />
        <SideBar>
          <SideBarHeader>C</SideBarHeader>
          <SideBarTile>
            <Link to="/cores">tile</Link>
            <Link to="/colorcard">card</Link>
            <Link to="/appbar">appbar</Link>
            <Link to="/device">device</Link>
          </SideBarTile>

          <SideBarFooter>sair</SideBarFooter>
        </SideBar>
        <Routes>
          <Route path="/cores" element={<CoresPage />} />
          <Route path="/colorcard" element={<ColorCard />} />
          <Route path="/appbar" element={<AppBar />} />
          <Route path="/device" element={<DeviceView />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export function DeviceView({ ...props }) {
  return (
    <main className="flex flex-col gap-4 w-full h-[100dvh] flex-1 items-center justify-center">
      <Device overlay="#18161e" layout="#1d1b23" ui="#232129" />
      <Device overlay="#18161d" layout="#1d1b22" ui="#232128" />
      <Device />
    </main>
  );
}

export function CoresPage({}) {
  return (
    <>
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
        {themes.mapValues((_) => (
          <ThemeTemplate arg={_} />
        ))}
      </main>
    </>
  );
}

const AppBar = ({ title, bg, pos }) => {
  return (
    <>
      <appbar
        className={`flex items-center justify-center p-8 bg-[${bg && bg}] w-full h-[81px]
          ${pos && `${pos} top-0 left-0 z-[100]`} 
        `}
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
  const [Width, Height] = [window.innerWidth, window.innerHeight];

  return (
    <>
      <template-tag
        className={`flex flex-col relative bg-[${arg.c1}] text-[${arg.text}] w-[${Width / 3 + 'px'}] h-[${Width / 2 + 'px'}] max-h-[${Width / 2 + 'px'}] rounded-[1.5rem] overflow-hidden`}
      >
        <appbar
          className={`flex sticky top-0 left-0 bg-[${arg.c0}] w-full h-[10%] absolute top-0 left-0 items-center justify-center`}
        >
          {arg.id}
        </appbar>
        <sidebar
          className={`flex flex-col absolute top-0 left-0 w-[25%] h-full bg-[${arg.c0}]`}
        ></sidebar>
        <main
          className={`flex gap-4 bg-[${arg.c1}] w-full h-full py-[3rem] flex-col items-center justify-center overflow-y-scroll no-scrollbar`}
        >
          {[...Array(5)].map((_) => (
            <card
              className={` flex
                bg-[${arg.c0}] rounded-4 flex-col w-[75%] aspect-[1.8/1] m[0_auto]
                bg-[${arg.c2}]
              `}
            >
              <header id={`flex `}></header>
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
  c1: hexColorGen({ value: '1f' }).value,
  c2: hexColorGen({ value: '25' }).value,
  c3: hexColorGen({ value: '2b' }).value,
  c4: hexColorGen({ value: '30' }).value,
};

createRoot(document.getElementById('app_root')).render(<App />);
