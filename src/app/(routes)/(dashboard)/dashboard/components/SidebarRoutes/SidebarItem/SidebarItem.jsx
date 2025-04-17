import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function SidebarItem(props) {
  const { label, icon: Icon, href, key } = props

  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <Link 
      href={href}
      className={cn(`flex gap-x-2 mt-2 text-slate-700 text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer transition-colors duration-200`, isActive && "bg-slate-400/20")}
      key={key}
    >
      <Icon 
        className="w-5 h-5"
        strokeWidth={1}
      />
      {label}
    </Link>
  )
}
