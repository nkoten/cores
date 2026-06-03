/** --- Device.jsx ---
 */
export default function Device({ layout, overlay, ui, children, ...props }) {
  return (
    <device className="relative flex flex-col w-[70%] rounded-[9px] overflow-hidden">
      <Header overlay={overlay} />
      <Body>
        {[1, 2, 3].map((item) => (
          <Tiles ui={ui} />
        ))}
      </Body>
      {children}
    </device>
  );
}

function Header({ overlay }) {
  return (
    <header
      className={`sticky top-0 left-0 flex w-full h-[30px] bg-[${overlay || '#18161c'}]`}
    ></header>
  );
}

function Body({ layout, children }) {
  return (
    <main
      className={`flex gap-2 flex w-full bg-[${layout || '#1b1d22'}] items-center justify-center p-8`}
    >
      {children}
    </main>
  );
}

function Tiles({ ui }) {
  return (
    <section
      className={`flex flex-col bg-[${ui || '#212329'}] w-[70%] aspect-[1/.6] items-center justify-center`}
    ></section>
  );
}
