import {
  BarChart3,
  CalendarClock,
  Camera,
  History,
  QrCode,
  Shield,
  User,
} from "lucide-react";

export const dataGeneralSidebar = [
  {
    href: "/perfil",
    label: "Mi Perfil",
    icon: User,
  },
  {
    href: "/records",
    label: "Mis accesos",
    icon: History,
  },
  {
    href: "/schedules",
    label: "Horarios",
    icon: CalendarClock,
  },
];

export const dataUSerSidebar = [
  {
    href: "/qr",
    label: "Mi Código QR",
    icon: QrCode,
  },
  {
    href: "/facial-recognition",
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
