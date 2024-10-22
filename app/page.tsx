import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Dumbbell, Users, Calendar, BarChart } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Welcome to FitTrack</h1>
      <p className="text-xl">Manage your gym efficiently with our comprehensive management system.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Members</CardTitle>
            <CardDescription>Manage gym memberships</CardDescription>
          </CardHeader>
          <CardContent>
            <Users className="w-12 h-12 mb-4" />
            <Link href="/members">
              <Button>View Members</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Classes</CardTitle>
            <CardDescription>Schedule and manage classes</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar className="w-12 h-12 mb-4" />
            <Link href="/classes">
              <Button>Manage Classes</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Equipment</CardTitle>
            <CardDescription>Track gym equipment</CardDescription>
          </CardHeader>
          <CardContent>
            <Dumbbell className="w-12 h-12 mb-4" />
            <Link href="/equipment">
              <Button>View Equipment</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dashboard</CardTitle>
            <CardDescription>View gym analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart className="w-12 h-12 mb-4" />
            <Link href="/dashboard">
              <Button>Open Dashboard</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}