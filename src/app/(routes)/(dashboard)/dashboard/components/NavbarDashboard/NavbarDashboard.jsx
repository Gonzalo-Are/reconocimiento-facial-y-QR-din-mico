import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import { UserButton } from "@clerk/nextjs"
import { Menu } from "lucide-react"
import { LogoDashboard } from "../LogoDashboard"
import { SidebarRoutes } from "../SidebarRoutes"
import { Camera } from "lucide-react"
import Link from "next/link"


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
      <div className="flex items-center justify-end w-full gap-x-4">
        <Link href="/camera">
         <Camera className="w-6 h-6 text-black hover:text-blue-500 transition duration-200 cursor-pointer" />
        </Link> 
         
        <UserButton />
      </div>
    </nav>
  )
}
