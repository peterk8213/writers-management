import { DataTable, type Order } from "@/components/dashboard/DataTable"
import { EarningsChart } from "@/components/dashboard/EarningsChart"
import { SectionCards } from "@/components/dashboard/SectionCards"

const userRole = "admin" as const

const orders: Order[] = [
  {
    id: 1,
    title: "Website Copy Refresh",
    header: "Home + About pages",
    type: "Content Writing",
    status: "In Review",
    target: "Apr 22",
    limit: "48h",
    reviewer: "Maya Johnson",
  },
  {
    id: 2,
    title: "SEO Blog Cluster",
    header: "Fintech keywords",
    type: "Blog",
    status: "In Progress",
    target: "Apr 25",
    limit: "72h",
    reviewer: "Eddie Lake",
  },
  {
    id: 3,
    title: "Product Case Study",
    header: "B2B onboarding success",
    type: "Case Study",
    status: "Assigned",
    target: "Apr 30",
    limit: "5d",
    reviewer: "Jamik Tashpulatov",
  },
]

const earningsData = [
  { date: "2026-01-05", earnings: 320, spending: 120 },
  { date: "2026-01-15", earnings: 420, spending: 190 },
  { date: "2026-02-02", earnings: 510, spending: 210 },
  { date: "2026-02-14", earnings: 630, spending: 280 },
  { date: "2026-02-26", earnings: 560, spending: 220 },
  { date: "2026-03-06", earnings: 700, spending: 260 },
  { date: "2026-03-19", earnings: 760, spending: 300 },
  { date: "2026-03-31", earnings: 820, spending: 330 },
  { date: "2026-04-10", earnings: 910, spending: 360 },
  { date: "2026-04-18", earnings: 980, spending: 390 },
]

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards role={userRole} />
          <div className="px-4 lg:px-6">
            <EarningsChart role={userRole} data={earningsData} />
          </div>
          <DataTable data={orders} userRole={userRole} />
        </div>
      </div>
    </div>
  )
}
