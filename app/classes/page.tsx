"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

// Mock data for classes
const initialClasses = [
  { id: 1, name: "Yoga", instructor: "Sarah Lee", time: "Mon, Wed, Fri 9:00 AM" },
  { id: 2, name: "Spin", instructor: "Mike Johnson", time: "Tue, Thu 6:00 PM" },
  { id: 3, name: "HIIT", instructor: "Emily Brown", time: "Mon, Wed 7:00 PM" },
]

export default function ClassesPage() {
  const [classes, setClasses] = useState(initialClasses)
  const [newClass, setNewClass] = useState({ name: "", instructor: "", time: "" })

  const addClass = () => {
    setClasses([...classes, { ...newClass, id: classes.length + 1 }])
    setNewClass({ name: "", instructor: "", time: "" })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Gym Classes</h1>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Add New Class</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Class</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Class Name"
              value={newClass.name}
              onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
            />
            <Input
              placeholder="Instructor"
              value={newClass.instructor}
              onChange={(e) => setNewClass({ ...newClass, instructor: e.target.value })}
            />
            <Input
              placeholder="Time"
              value={newClass.time}
              onChange={(e) => setNewClass({ ...newClass, time: e.target.value })}
            />
            <Button onClick={addClass}>Add Class</Button>
          </div>
        </DialogContent>
      </Dialog>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Class Name</TableHead>
            <TableHead>Instructor</TableHead>
            <TableHead>Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {classes.map((classItem) => (
            <TableRow key={classItem.id}>
              <TableCell>{classItem.name}</TableCell>
              <TableCell>{classItem.instructor}</TableCell>
              <TableCell>{classItem.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}