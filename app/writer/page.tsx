"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const statusStyles = {
  active: "default",
  pending: "secondary",
  submitted: "outline",
  paid: "default",
  "pending confirmation": "secondary",
} as const;

const assignedOrders = [
  {
    id: "ORD-401",
    title: "Operations Management Essay",
    bidder: "Mariam Bidder",
    deadline: "2026-04-22",
    status: "active",
  },
  {
    id: "ORD-402",
    title: "Machine Learning Literature Review",
    bidder: "Kevin Bidder",
    deadline: "2026-04-24",
    status: "pending",
  },
  {
    id: "ORD-403",
    title: "International Law Case Brief",
    bidder: "Mariam Bidder",
    deadline: "2026-04-20",
    status: "submitted",
  },
  {
    id: "ORD-404",
    title: "Consumer Behavior Report",
    bidder: "Kevin Bidder",
    deadline: "2026-04-18",
    status: "paid",
  },
  {
    id: "ORD-405",
    title: "Cloud Security Outline",
    bidder: "Mariam Bidder",
    deadline: "2026-04-21",
    status: "pending confirmation",
  },
] as const;

export default function WriterDashboardPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Writer Dashboard</CardTitle>
          <CardDescription>
            Track assigned orders by status: active, pending, submitted, paid, and pending
            confirmation.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Assigned Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Bidder</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignedOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.title}</TableCell>
                  <TableCell>{order.bidder}</TableCell>
                  <TableCell>{order.deadline}</TableCell>
                  <TableCell>
                    <Badge variant={statusStyles[order.status]}>{order.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
