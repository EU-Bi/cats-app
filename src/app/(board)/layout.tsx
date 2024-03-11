import React from "react";
import SearchPanel from "../components/SearchPanel";
import Upload from "../components/Upload";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <aside className="breeds activeFrame w-1/2 flex flex-col items-center p-8 relative">
      <SearchPanel />
      <div className="w-full overflow-y-auto rounded-[20px] bg-white h-full  p-5">
        {children}
      </div>
      <Upload open={true} />
    </aside>
  );
}

export default Layout;
