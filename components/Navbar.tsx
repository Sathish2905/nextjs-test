"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          FitTrack
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/members">
            <Button variant="ghost" className={cn(
              pathname === "/members" && "bg-accent"
            )}>Members</Button>
          </Link>
          <Link href="/classes">
            <Button variant="ghost" className={cn(
              pathname === "/classes" && "bg-accent"
            )}>Classes</Button>
          </Link>
          <Link href="/equipment">
            <Button variant="ghost" className={cn(
              pathname === "/equipment" && "bg-accent"
            )}>Equipment</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="ghost" className={cn(
              pathname === "/dashboard" && "bg-accent"
            )}>Dashboard</Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}