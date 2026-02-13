"use client"

import { useMemo, useState } from "react"
import { ArrowUpDownIcon } from "lucide-react"

import { EmptyState, ErrorState, LoadingState } from "@/components/navigation/data-state"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { cn } from "@/lib/utils"

type RowStatus = "In Review" | "Stable" | "In Progress"
type ViewMode = "live" | "loading" | "error"
type StatusFilter = "all" | RowStatus
type SortField = "route" | "status" | "updatedMinutesAgo"

type DataRow = {
  route: string
  owner: string
  status: RowStatus
  updatedBy: string
  updatedMinutesAgo: number
}

const PAGE_SIZE = 5

const rows: DataRow[] = [
  {
    route: "/navigation/overview",
    owner: "Design Ops",
    status: "In Review",
    updatedBy: "Ana Silva",
    updatedMinutesAgo: 5,
  },
  {
    route: "/navigation/tokens",
    owner: "Platform",
    status: "Stable",
    updatedBy: "Noah Lee",
    updatedMinutesAgo: 18,
  },
  {
    route: "/navigation/components",
    owner: "UI Team",
    status: "In Progress",
    updatedBy: "Carla Lima",
    updatedMinutesAgo: 42,
  },
  {
    route: "/navigation/page-header",
    owner: "Design Ops",
    status: "Stable",
    updatedBy: "Mateo Cruz",
    updatedMinutesAgo: 53,
  },
  {
    route: "/navigation/sidebar",
    owner: "UI Team",
    status: "In Review",
    updatedBy: "Emma Wang",
    updatedMinutesAgo: 74,
  },
  {
    route: "/navigation/topbar",
    owner: "UI Team",
    status: "In Progress",
    updatedBy: "Ava Kim",
    updatedMinutesAgo: 88,
  },
  {
    route: "/navigation/pagination",
    owner: "Platform",
    status: "Stable",
    updatedBy: "Lucas Costa",
    updatedMinutesAgo: 112,
  },
]

const sortStatusOrder: Record<RowStatus, number> = {
  Stable: 0,
  "In Review": 1,
  "In Progress": 2,
}

export function DesktopDataTable() {
  const [viewMode, setViewMode] = useState<ViewMode>("live")
  const [query, setQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all")
  const [sortField, setSortField] = useState<SortField>("updatedMinutesAgo")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [page, setPage] = useState(1)

  const filteredRows = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return rows.filter((row) => {
      const matchesFilter = statusFilter === "all" || row.status === statusFilter
      const matchesQuery =
        normalizedQuery.length === 0 ||
        row.route.toLowerCase().includes(normalizedQuery) ||
        row.owner.toLowerCase().includes(normalizedQuery) ||
        row.updatedBy.toLowerCase().includes(normalizedQuery)

      return matchesFilter && matchesQuery
    })
  }, [query, statusFilter])

  const sortedRows = useMemo(() => {
    const list = [...filteredRows]

    list.sort((a, b) => {
      let diff = 0

      if (sortField === "route") {
        diff = a.route.localeCompare(b.route)
      } else if (sortField === "status") {
        diff = sortStatusOrder[a.status] - sortStatusOrder[b.status]
      } else {
        diff = a.updatedMinutesAgo - b.updatedMinutesAgo
      }

      return sortDirection === "asc" ? diff : -diff
    })

    return list
  }, [filteredRows, sortDirection, sortField])

  const totalPages = Math.max(1, Math.ceil(sortedRows.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const paginatedRows = sortedRows.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)

  const setSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection((current) => (current === "asc" ? "desc" : "asc"))
      return
    }

    setSortField(field)
    setSortDirection("asc")
  }

  const setFilter = (filter: StatusFilter) => {
    setStatusFilter(filter)
    setPage(1)
  }

  const setSearch = (value: string) => {
    setQuery(value)
    setPage(1)
  }

  const onPaginationClick =
    (nextPage: number) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      setPage(nextPage)
    }

  const pageItems = useMemo(() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    if (safePage <= 3) {
      return [1, 2, 3, 4, "ellipsis", totalPages] as const
    }

    if (safePage >= totalPages - 2) {
      return [1, "ellipsis", totalPages - 3, totalPages - 2, totalPages - 1, totalPages] as const
    }

    return [1, "ellipsis", safePage - 1, safePage, safePage + 1, "ellipsis-2", totalPages] as const
  }, [safePage, totalPages])

  if (viewMode === "loading") {
    return <LoadingState />
  }

  if (viewMode === "error") {
    return (
      <ErrorState
        title="Failed to load navigation records"
        description="The desktop navigation dataset could not be loaded right now."
        onAction={() => setViewMode("live")}
      />
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Input
          value={query}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full md:max-w-xs"
          placeholder="Search by route, owner or editor..."
        />
        <div className="flex flex-wrap items-center gap-2">
          {(["all", "Stable", "In Review", "In Progress"] as const).map((filter) => (
            <Button
              key={filter}
              size="sm"
              variant={statusFilter === filter ? "default" : "outline"}
              onClick={() => setFilter(filter)}
            >
              {filter === "all" ? "All status" : filter}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">State mode</span>
        {(["live", "loading", "error"] as const).map((mode) => (
          <Button
            key={mode}
            size="sm"
            variant={viewMode === mode ? "secondary" : "ghost"}
            className="capitalize"
            onClick={() => setViewMode(mode)}
          >
            {mode}
          </Button>
        ))}
      </div>

      {sortedRows.length === 0 ? (
        <EmptyState
          title="No routes match the current filters"
          description="Try changing status filter or searching with a different term."
          actionLabel="Reset filters"
          onAction={() => {
            setQuery("")
            setFilter("all")
          }}
        />
      ) : (
        <>
          <div className="overflow-hidden rounded-xl border">
            <div className="grid grid-cols-[1.8fr_1fr_1fr_0.9fr] border-b bg-muted/45 px-4 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <button
                className="inline-flex items-center gap-1 text-left"
                onClick={() => setSort("route")}
              >
                Route
                <ArrowUpDownIcon className="size-3.5" />
              </button>
              <span>Owner</span>
              <button
                className="inline-flex items-center gap-1 text-left"
                onClick={() => setSort("status")}
              >
                Status
                <ArrowUpDownIcon className="size-3.5" />
              </button>
              <button
                className="inline-flex items-center gap-1 text-left"
                onClick={() => setSort("updatedMinutesAgo")}
              >
                Updated
                <ArrowUpDownIcon className="size-3.5" />
              </button>
            </div>

            {paginatedRows.map((row) => (
              <div
                key={`${row.route}-${row.updatedBy}`}
                className="grid grid-cols-[1.8fr_1fr_1fr_0.9fr] items-center border-b px-4 py-3 text-sm last:border-b-0"
              >
                <div className="space-y-0.5">
                  <p className="font-medium">{row.route}</p>
                  <p className="text-xs text-muted-foreground">Edited by {row.updatedBy}</p>
                </div>
                <span>{row.owner}</span>
                <Badge
                  variant="outline"
                  className={cn(
                    "w-fit",
                    row.status === "Stable" && "border-secondary/40 bg-secondary/10",
                    row.status === "In Review" && "border-accent/40 bg-accent/10",
                    row.status === "In Progress" && "border-primary/40 bg-primary/10"
                  )}
                >
                  {row.status}
                </Badge>
                <span className="text-muted-foreground">{row.updatedMinutesAgo} min ago</span>
              </div>
            ))}
          </div>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" onClick={onPaginationClick(Math.max(1, safePage - 1))} />
              </PaginationItem>

              {pageItems.map((item) =>
                typeof item === "number" ? (
                  <PaginationItem key={`page-${item}`}>
                    <PaginationLink
                      href="#"
                      isActive={item === safePage}
                      onClick={onPaginationClick(item)}
                    >
                      {item}
                    </PaginationLink>
                  </PaginationItem>
                ) : (
                  <PaginationItem key={item}>
                    <PaginationEllipsis />
                  </PaginationItem>
                )
              )}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={onPaginationClick(Math.min(totalPages, safePage + 1))}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      )}
    </div>
  )
}
