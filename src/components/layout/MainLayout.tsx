import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-4 overflow-y-auto flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
