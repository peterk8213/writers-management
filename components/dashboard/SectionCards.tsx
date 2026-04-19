import { IconCheck, IconClock, IconTrendingUp } from "@tabler/icons-react"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

type Role = "admin" | "writer" | "bidder"

export function SectionCards({ role = "writer" }: { role?: Role }) {
  const isWriter = role === "writer"
  const isBidder = role === "bidder"
  const isAdmin = role === "admin"

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>
            {isAdmin ? "Total Revenue" : isWriter ? "Total Earnings" : "Total Spent"}
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {isBidder ? "$4,320.50" : "$1,250.00"}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            All time {isBidder ? "expenditure" : "earnings"} <IconTrendingUp className="size-4" />
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>
            {isAdmin ? "Total Payouts" : isWriter ? "Completed Orders" : "Active Bids"}
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {isAdmin ? "$12,234" : isWriter ? "145" : "12"}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">
            {isAdmin ? "Total paid to writers" : isWriter ? "Successfully completed" : "Awaiting acceptance"}
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>{isBidder ? "Funds in Escrow" : "Pending Payments"}</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">$450.00</CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Pending clearance <IconClock className="size-4" />
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>
            {isAdmin ? "Unverified Orders" : isWriter ? "In Revisions" : "Ready for Review"}
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {isAdmin ? "18" : isWriter ? "2" : "5"}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Action required <IconCheck className="size-4" />
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
