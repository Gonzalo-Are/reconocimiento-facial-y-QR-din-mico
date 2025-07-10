"use client"

import { Separator } from "@/components/ui/separator"
import { useAuth } from "@clerk/nextjs"
import { SidebarItem } from "./SidebarItem"
import { dataAdminSidebar, dataGeneralSidebar, dataUSerSidebar } from "./SidebarRoutes.data"

export function SidebarRoutes() {
  const { userId } = useAuth()

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="mb-2 text-slate-500">GENERAL</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem key={item.href} label={item.label} icon={item.icon} href={item.href} />
          ))}
        </div>
        <Separator />
        <div className="p-2 md:p-6">
          <p className="mb-2 text-slate-500">USUARIO</p>
          {dataUSerSidebar.map((item) => (
            <SidebarItem key={item.href} label={item.label} icon={item.icon} href={item.href} />
          ))}
        </div>
        <Separator />
        <div className="p-2 md:p-6">
          <p className="mb-2 text-slate-500">ADMIN</p>
          {dataAdminSidebar.map((item) => (
            <SidebarItem key={item.href} label={item.label} icon={item.icon} href={item.href} />
          ))}
        </div>
      </div>
    </div>
  )
}
