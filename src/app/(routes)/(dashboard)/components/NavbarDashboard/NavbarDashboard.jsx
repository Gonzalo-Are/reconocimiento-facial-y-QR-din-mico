import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import { UserButton } from "@clerk/nextjs"
import { Camera, Menu, ArrowRight } from "lucide-react"
import Link from "next/link"
import { LogoDashboard } from "../LogoDashboard"
import { SidebarRoutes } from "../SidebarRoutes"


export function NavbarDashboard() {
  return (
    <nav className="flex items-center justify-between w-full h-20 px-2 border-b gap-x-4 md:px-6 bg-background">
      <div className="block xl:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center cursor-pointer">
            <Menu />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetTitle className={"p-2"}>Menu</SheetTitle>
            <SidebarRoutes />
          </SheetContent>
        </Sheet>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 xl:hidden">
        <LogoDashboard />
      </div>
      <div className="flex items-center justify-end w-full gap-x-6 flex-wrap sm:flex-nowrap">
        <Link href="/camera">
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-sm font-medium text-black hidden xs:inline">Reconocimiento facial</span>
            <ArrowRight className="w-4 h-4 text-black"/>
            <Camera className="w-5 h-5 text-black hover:text-blue-500 duration-200 cursor-pointer" />
          </div>
        </Link>

        <UserButton />
      </div>
    </nav>
  )
}
