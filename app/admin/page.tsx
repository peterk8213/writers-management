"use client";

import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

type AdminOrder = {
  id: string;
  title: string;
  bidder: string;
  writer: string;
  value: number;
  legit: boolean;
};

const initialOrders: AdminOrder[] = [
  {
    id: "ORD-301",
    title: "Business Ethics Report",
    bidder: "Mariam Bidder",
    writer: "Alex Writer",
    value: 180,
    legit: false,
  },
  {
    id: "ORD-302",
    title: "Cybersecurity Case Study",
    bidder: "Kevin Bidder",
    writer: "Sam Writer",
    value: 240,
    legit: true,
  },
  {
    id: "ORD-303",
    title: "Healthcare Policy Brief",
    bidder: "Mariam Bidder",
    writer: "Nora Writer",
    value: 210,
    legit: false,
  },
];

const payoutGroups = [
  { role: "Bidders", accounts: ["Mariam Bidder", "Kevin Bidder"] },
  { role: "Writers", accounts: ["Alex Writer", "Sam Writer", "Nora Writer"] },
] as const;

export default function AdminDashboardPage() {
  const [orders, setOrders] = useState(initialOrders);

  const pendingBalance = useMemo(
    () => orders.filter((order) => order.legit).reduce((sum, order) => sum + order.value, 0),
    [orders]
  );

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Admin Dashboard</CardTitle>
          <CardDescription>
            Approve legit orders and manage bi-monthly payouts for bidders and writers.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Orders Awaiting Legit Approval</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Bidder</TableHead>
                <TableHead>Writer</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.bidder}</TableCell>
                  <TableCell>{order.writer}</TableCell>
                  <TableCell>${order.value.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge variant={order.legit ? "default" : "secondary"}>
                      {order.legit ? "Legit" : "Needs Review"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant={order.legit ? "outline" : "default"}
                      onClick={() =>
                        setOrders((current) =>
                          current.map((item) =>
                            item.id === order.id ? { ...item, legit: !item.legit } : item
                          )
                        )
                      }
                    >
                      {order.legit ? "Mark Pending" : "Approve as Legit"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bi-Monthly Payout Management</CardTitle>
          <CardDescription>
            Pending approved balance: <span className="font-semibold">${pendingBalance.toFixed(2)}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          {payoutGroups.map((group) => (
            <Card key={group.role} className="py-4">
              <CardHeader>
                <CardTitle className="text-base">{group.role}</CardTitle>
                <CardDescription>Pending accounts for upcoming payout cycle</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {group.accounts.map((account) => (
                  <div key={account} className="flex items-center justify-between rounded-md border p-3 text-sm">
                    <span>{account}</span>
                    <Badge variant="outline">
                      $
                      {(
                        group.accounts.length
                          ? pendingBalance / payoutGroups.length / group.accounts.length
                          : 0
                      ).toFixed(2)}
                    </Badge>
                  </div>
                ))}
                <Button className="w-full" variant="secondary">
                  Run Bi-Monthly Payout
                </Button>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
