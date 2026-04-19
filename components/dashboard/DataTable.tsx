"use client"

import * as React from "react"
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const schema = z.object({
  id: z.number(),
  title: z.string(),
  header: z.string(),
  type: z.string(),
  status: z.string(),
  target: z.string(),
  limit: z.string(),
  reviewer: z.string(),
})

export type Order = z.infer<typeof schema>

interface DataTableProps {
  data: Order[]
  userRole: "admin" | "writer" | "bidder"
}

export function DataTable({ data, userRole }: DataTableProps) {
  const columns = React.useMemo<ColumnDef<Order>[]>(() => {
    const baseColumns: ColumnDef<Order>[] = [
      { accessorKey: "title", header: "Order Title" },
      { accessorKey: "header", header: "Header" },
      { accessorKey: "type", header: "Type" },
      { accessorKey: "status", header: "Status" },
      { accessorKey: "target", header: "Target" },
      { accessorKey: "limit", header: "Deadline Limit" },
      { accessorKey: "reviewer", header: "Reviewer" },
    ]

    if (userRole === "admin") {
      baseColumns.push({
        id: "actions",
        header: "Actions",
        cell: () => (
          <Button variant="outline" size="sm">
            Reassign
          </Button>
        ),
      })
    }

    return baseColumns
  }, [userRole])

  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })

  return (
    <div className="rounded-md border px-4 lg:px-6">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="border bg-muted/50">
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="border">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No orders found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
