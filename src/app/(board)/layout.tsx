import React from "react";
import SearchPanel from "../components/SearchPanel";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <aside className="breeds activeFrame w-1/2 flex flex-col items-center p-8  ">
      <SearchPanel />
      <div className="w-full overflow-y-auto rounded-[20px] bg-white h-full  p-5">
        {children}
      </div>
    </aside>
  );
}

export default Layout;
