import { DesktopSidebar } from "@/components/navigation/desktop-sidebar"
import { DesktopTopbar } from "@/components/navigation/desktop-topbar"

type AppShellProps = {
  children: React.ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card/70 shadow-sm">
      <div className="grid min-h-[620px] grid-cols-1 md:grid-cols-[256px_1fr]">
        <DesktopSidebar />
        <div className="flex min-w-0 flex-col">
          <DesktopTopbar />
          <div className="flex-1 p-4 sm:p-6">{children}</div>
        </div>
      </div>
    </div>
  )
}
