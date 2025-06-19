import {
  BarChart3,
  CalendarClock,
  Camera,
  History,
  QrCode,
  Settings,
  Shield,
  User,
} from "lucide-react";

export const dataGeneralSidebar = [
  {
    href: "/dashboard",
    label: "Mi panel",
    icon: User,
  },
  {
    href: "/records",
    label: "Historial de accesos",
    icon: History,
  },
  {
    href: "/schedules",
    label: "Horarios",
    icon: CalendarClock,
  },
  {
    href: "/settings",
    label: "Configuración",
    icon: Settings,
  },
];

export const dataUSerSidebar = [
  {
    href: "/Qr",
    label: "Mi Código QR",
    icon: QrCode,
  },
  {
    href: "/facial",
    label: "Reconocimiento facial",
    icon: Camera,
  },
];

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
  },
];
