import { Outlet } from "react-router"
import { TopNavbar } from "../app/top-navbar"

export function RootLayout() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex item-center h-[8vh]">
        <TopNavbar />
      </div>
      <div className="overflow-hidden h-[92vh]">
        <Outlet />
      </div>
    </div>
  )
}
