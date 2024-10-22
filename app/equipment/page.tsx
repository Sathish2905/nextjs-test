"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

// Mock data for equipment
const initialEquipment = [
  { id: 1, name: "Treadmill", quantity: 10, status: "Operational" },
  { id: 2, name: "Dumbbells Set", quantity: 5, status: "Operational" },
  { id: 3, name: "Rowing Machine", quantity: 3, status: "Under Maintenance" },
]

export default function EquipmentPage() {
  const [equipment, setEquipment] = useState(initialEquipment)
  const [newEquipment, setNewEquipment] = useState({ name: "", quantity: "", status: "" })

  const addEquipment = () => {
    setEquipment([...equipment, { ...newEquipment, id: equipment.length + 1, quantity: parseInt(newEquipment.quantity) }])
    setNewEquipment({ name: "", quantity: "", status: "" })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Gym Equipment</h1>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Add New Equipment</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Equipment</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Equipment Name"
              value={newEquipment.name}
              onChange={(e) => setNewEquipment({ ...newEquipment, name: e.target.value })}
            />
            <Input
              placeholder="Quantity"
              type="number"
              value={newEquipment.quantity}
              onChange={(e) => setNewEquipment({ ...newEquipment, quantity: e.target.value })}
            />
            <Input
              placeholder="Status"
              value={newEquipment.status}
              onChange={(e) => setNewEquipment({ ...newEquipment, status: e.target.value })}
            />
            <Button onClick={addEquipment}>Add Equipment</Button>
          </div>
        </DialogContent>
      </Dialog>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Equipment Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {equipment.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}