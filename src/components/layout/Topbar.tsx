import ThemeToggle from "../ui/ThemeToggle";


export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-border bg-background">
      <div className="text-xl font-semibold tracking-tight">Planning Worship</div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        {/* Futuro: Avatar, Notifications, etc. */}
      </div>
    </header>
  );
}
