'use client'

import { ProfilePhotoCheck } from "./components/ProfilePhoto";
import { NavbarDashboard } from "./dashboard/components/NavbarDashboard";
import { Sidebar } from "./dashboard/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <ProfilePhotoCheck>
      <div className="flex w-full h-full">
        <div className="hidden h-full xl:block w-80 xl:fixed">
          <Sidebar />
        </div>
        <div className="w-full h-full xl:ml-80">
          <NavbarDashboard />
          <div className="p-6 h-max">{children}</div>
        </div>
      </div>
    </ProfilePhotoCheck>
  )
}