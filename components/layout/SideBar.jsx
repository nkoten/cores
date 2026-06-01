/**
 */
export default function SideBar({ children }) {
  return (
    <sidebar className="flex flex-col fixed top-0 left-0 w-[48px] h-[100vh] z-[100] bg-amber-600">
      <main className="relative flex flex-col w-full h-full items-center">
        {children}
      </main>
    </sidebar>
  );
}

export const SideBarHeader = ({ children }) => {
  return (
    <sidebar-header className="absolute top-0 left-0 flex w-full h-[81px] bg-slate-300">
      {children}
    </sidebar-header>
  );
};

export const SideBarFooter = ({ children }) => {
  return (
    <sidebar-footer className="absolute bottom-0 left-0 flex w-full h-[81px] bg-slate-300">
      {children}
    </sidebar-footer>
  );
};
