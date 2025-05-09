import { Outlet } from "react-router"
import { GenericNavbar } from "../app/generic-navbar"

export function RootLayout() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex item-center h-[8vh]">
        <GenericNavbar />
      </div>
      <div className="overflow-hidden h-[92vh]">
        <Outlet />
      </div>
    </div>
  )
}
