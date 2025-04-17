import { BarChart3, History, KeyRound, LayoutDashboard, Shield } from "lucide-react";

export const dataGeneralSidebar = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/records",
    label: "Historial de accesos",
    icon: History,
  },
  {
    href: "/access",
    label: "Permisos",
    icon: KeyRound,
  },
]

export const dataAdminSidebar = [
  {
    href: "/manage-permissions",
    label: "Gestionar permisos",
    icon: Shield,
  },
  {
    href: "/user-history",
    label: "Historial de usuarios",
    icon: BarChart3,
  }
]