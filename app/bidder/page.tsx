"use client";

import { FormEvent, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Order = {
  id: string;
  title: string;
  pages: number;
  writerId: string;
  writerName: string;
  costPerPage: number;
  costPerOrder: number;
  status: "active" | "cancelled";
};

const writers = [
  { id: "w1", name: "Alex Writer" },
  { id: "w2", name: "Sam Writer" },
  { id: "w3", name: "Nora Writer" },
];

const starterOrders: Order[] = [
  {
    id: "ORD-101",
    title: "Marketing Strategy Analysis",
    pages: 10,
    writerId: "w1",
    writerName: "Alex Writer",
    costPerPage: 12,
    costPerOrder: 30,
    status: "active",
  },
  {
    id: "ORD-102",
    title: "Nursing Reflection Paper",
    pages: 6,
    writerId: "w2",
    writerName: "Sam Writer",
    costPerPage: 11,
    costPerOrder: 25,
    status: "active",
  },
];

export default function BidderDashboardPage() {
  const [orders, setOrders] = useState(starterOrders);
  const [title, setTitle] = useState("");
  const [pages, setPages] = useState("1");
  const [writerId, setWriterId] = useState(writers[0].id);
  const [costPerPage, setCostPerPage] = useState("10");
  const [costPerOrder, setCostPerOrder] = useState("20");

  const handleCreateOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const selectedWriter = writers.find((writer) => writer.id === writerId);
    if (!selectedWriter || !title.trim()) {
      return;
    }

    const nextOrder: Order = {
      id: `ORD-${100 + orders.length + 1}`,
      title: title.trim(),
      pages: Number(pages) || 1,
      writerId: selectedWriter.id,
      writerName: selectedWriter.name,
      costPerPage: Number(costPerPage) || 0,
      costPerOrder: Number(costPerOrder) || 0,
      status: "active",
    };

    setOrders((current) => [nextOrder, ...current]);
    setTitle("");
  };

  const updateOrder = (id: string, patch: Partial<Order>) => {
    setOrders((current) =>
      current.map((order) => (order.id === id ? { ...order, ...patch } : order))
    );
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Bidder Dashboard</CardTitle>
          <CardDescription>
            Create new orders, assign/reassign writers, configure pricing, and send invoices.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>New Order Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4 md:grid-cols-6" onSubmit={handleCreateOrder}>
            <Input
              className="md:col-span-2"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Order title"
              required
            />
            <Input
              type="number"
              min={1}
              value={pages}
              onChange={(event) => setPages(event.target.value)}
              placeholder="Pages"
            />
            <select
              className="h-9 rounded-md border bg-background px-3 text-sm"
              value={writerId}
              onChange={(event) => setWriterId(event.target.value)}
            >
              {writers.map((writer) => (
                <option key={writer.id} value={writer.id}>
                  {writer.name}
                </option>
              ))}
            </select>
            <Input
              type="number"
              min={0}
              value={costPerPage}
              onChange={(event) => setCostPerPage(event.target.value)}
              placeholder="Cost/Page"
            />
            <Input
              type="number"
              min={0}
              value={costPerOrder}
              onChange={(event) => setCostPerOrder(event.target.value)}
              placeholder="Cost/Order"
            />
            <Button className="md:col-span-6">Add Order</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Writer</TableHead>
                <TableHead>Cost/Page</TableHead>
                <TableHead>Cost/Order</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.title}</TableCell>
                  <TableCell>
                    <select
                      className="h-9 rounded-md border bg-background px-3 text-sm"
                      value={order.writerId}
                      onChange={(event) => {
                        const selectedWriter = writers.find(
                          (writer) => writer.id === event.target.value
                        );
                        if (!selectedWriter) {
                          return;
                        }
                        updateOrder(order.id, {
                          writerId: selectedWriter.id,
                          writerName: selectedWriter.name,
                        });
                      }}
                    >
                      {writers.map((writer) => (
                        <option key={writer.id} value={writer.id}>
                          {writer.name}
                        </option>
                      ))}
                    </select>
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      min={0}
                      value={order.costPerPage}
                      onChange={(event) =>
                        updateOrder(order.id, { costPerPage: Number(event.target.value) || 0 })
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      min={0}
                      value={order.costPerOrder}
                      onChange={(event) =>
                        updateOrder(order.id, { costPerOrder: Number(event.target.value) || 0 })
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Badge variant={order.status === "active" ? "default" : "secondary"}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="space-x-2 text-right">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        const currentIndex = writers.findIndex(
                          (writer) => writer.id === order.writerId
                        );
                        const nextWriter = writers[(currentIndex + 1) % writers.length];
                        updateOrder(order.id, {
                          writerId: nextWriter.id,
                          writerName: nextWriter.name,
                        });
                      }}
                    >
                      Reassign
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => updateOrder(order.id, { status: "cancelled" })}
                    >
                      Cancel
                    </Button>
                    <Button size="sm" variant="secondary">
                      Send Invoice
                    </Button>
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
