"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

// Mock data for members
const initialMembers = [
  { id: 1, name: "John Doe", email: "john@example.com", membershipType: "Gold" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", membershipType: "Silver" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", membershipType: "Bronze" },
]

export default function MembersPage() {
  const [members, setMembers] = useState(initialMembers)
  const [newMember, setNewMember] = useState({ name: "", email: "", membershipType: "" })

  const addMember = () => {
    setMembers([...members, { ...newMember, id: members.length + 1 }])
    setNewMember({ name: "", email: "", membershipType: "" })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Gym Members</h1>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Add New Member</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Member</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Name"
              value={newMember.name}
              onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
            />
            <Input
              placeholder="Email"
              value={newMember.email}
              onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
            />
            <Input
              placeholder="Membership Type"
              value={newMember.membershipType}
              onChange={(e) => setNewMember({ ...newMember, membershipType: e.target.value })}
            />
            <Button onClick={addMember}>Add Member</Button>
          </div>
        </DialogContent>
      </Dialog>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Membership Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.id}>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>{member.membershipType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}