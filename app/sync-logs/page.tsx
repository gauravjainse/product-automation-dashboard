"use client"
import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Copy, Edit, ListCollapse, MoreHorizontal, OctagonMinus, PanelTopClose, PanelTopInactive, PanelTopOpen, SeparatorVertical, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { toast } from "sonner"

const data: Logs[] = [
    {
    id: "m5gr84i9",
    lastsync: "2025-10-25 12:30 AM",
    description: "Sync completed successfully.",
    status: "Complete",
    details: {
        steps: {
            "1": "Store connection established",
            "2": "Product list retrieved",
            "3": "Transformations applied",
            "4": "Products successfully synced to Shopify"
        }
    }
    },
    {
    id: "bhqecj4p",
    lastsync: "2025-10-19 09:30 AM",
    description: "Sync failed during data transformation.",
    status: "Error",
    details: {
        steps: {
            "1": "Store connection established",
            "2": "Product list retrieved",
            "3": "Transformation failed — malformed product structure",
            "4": "Unable to push products to Shopify"
        }
    }
    },
    {
    id: "fttgcj4p",
    lastsync: "2025-10-19 11:30 AM",
    description: "Sync failed during Shopify upload.",
    status: "Error",
        details: {
            steps: {
                "1": "Store connection established",
                "2": "Product list retrieved",
                "3": "Transformations applied successfully",
                "4": "Failed to sync products — Shopify API rejected the request"
            }
        }
    },
    {
    id: "3u1reuv4",
    lastsync: "2025-10-19 12:30 AM",
    description: "Sync completed successfully.",
    status: "Complete",
        details: {
            steps: {
                "1": "Store connection established",
                "2": "Product list retrieved",
                "3": "Transformations applied",
                "4": "Products successfully synced to Shopify"
            }
        }
    },
    {
    id: "derv1ws0",
    lastsync: "2025-10-21 08:30 AM",
    description: "Sync completed successfully.",
    status: "Complete",
        details: {
            steps: {
                "1": "Store connection established",
                "2": "Product list retrieved",
                "3": "Transformations applied",
                "4": "Products successfully synced to Shopify"
            }
        }
    },
    {
    id: "5kma53ae",
    lastsync: "2025-10-20 10:00 AM",
    description: "Sync failed during product retrieval.",
    status: "Error",
        details: {
            steps: {
            "1": "Store connection established",
            "2": "Failed to retrieve product list — database connection lost",
            "3": "Process aborted",
            "4": "No products synced"
            }
        }
    }
]


export type Logs = {
    id: string,
    lastsync: string,
    description: string,
    status: "Complete" | "Error",
    details: {
        steps: object
    }
}

const onConfirm = (id: string) => {
    console.log('ID', id)

    toast.promise(
        new Promise((resolve, reject) => {
            setTimeout(() => {
                    const success = true

                    if(success) resolve(true)
                    else reject(false)
            }, 1200)
        }),
        {
            loading: "Deleting user",
            success: "User has been deleted", 
            error: "Unable to delete user"
        }
    )

}

export default function Page() {

    const [expandedRow, setExpandedRow] = React.useState<string | null>(null);

    const columns: ColumnDef<Logs>[] = [
    {
        id: "select",
        header: ({ table }) => (
        <Checkbox
            checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
        />
        ),
        cell: ({ row }) => (
        <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
        />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "lastsync",
        header: ({ column }) => {
        return (
            <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
            Last Sync
            <ArrowUpDown />
            </Button>
        )
        },
        cell: ({ row }) => (
        <div className="capitalize">{row.getValue("lastsync")}</div>
        ),
    },
    {
        accessorKey: "description",
        header: ({ column }) => {
        return (
            <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
            Description
            <ArrowUpDown />
            </Button>
        )
        },
        cell: ({ row }) => (
        <div className="capitalize">{row.getValue("description")}</div>
        ),
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
        return (
            <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
            Status
            <ArrowUpDown />
            </Button>
        )
        },
        cell: ({ row }) => <div className=""><Badge variant={ row.getValue("status") == 'Error' ? "destructive": "secondary"}>{row.getValue("status")}</Badge></div>,
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const log = row.original;
            return (
            <div className="flex gap-2">
                <Button
                    variant="outline"
                    onClick={() =>
                        setExpandedRow((prev) => (prev === log.id ? null : log.id))
                    }
                    >
                    {expandedRow === log.id ? <ChevronUp />: <ChevronDown />}
                    Details
                </Button>

                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant={"destructive"}><Trash className="mr-2" />Delete</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete user account.
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => onConfirm(log.id)}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
            );
        },
    },
    ]

    const [globalFilter, setGlobalFilter] = React.useState()
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            globalFilter,
            columnVisibility,
            rowSelection,
        },
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: "includesString",
    })

    // Numeric Pagination
    const pageCount = table.getPageCount()
    const currentPage = table.getState().pagination.pageIndex + 1

    const pages = Array.from({ length: pageCount }, (_, i) => i + 1)

    // Optional: limit number of pages shown (for long lists)
    const visiblePages = pages.slice(
        Math.max(currentPage - 3, 0),
        Math.min(currentPage + 2, pageCount)
    )

    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Search by last sync, description or status"
                    value={globalFilter ?? ""}
                    onChange={(event) => setGlobalFilter(event.target.value)}
                    className="max-w-md w-sm"
                />
                
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                        Columns <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                        .getAllColumns()
                        .filter((column) => column.getCanHide())
                        .map((column) => {
                            return (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                className="capitalize"
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) =>
                                column.toggleVisibility(!!value)
                                }
                            >
                                {column.id}
                            </DropdownMenuCheckboxItem>
                            )
                        })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="overflow-hidden rounded-md border">
                <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                        return (
                            <TableHead key={header.id}>
                            {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                            </TableHead>
                        )
                        })}
                    </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows.map((row) => {
                    const log = row.original;

                    return (
                        <React.Fragment key={row.id}>
                        {/* Main Row */}
                        <TableRow>
                            {row.getVisibleCells().map((cell) => (
                            <TableCell key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </TableCell>
                            ))}
                        </TableRow>

                        {/* Expanded Row */}
                        {expandedRow === log.id && (
                            <TableRow className="bg-muted/50">
                            <TableCell colSpan={columns.length}>
                                <div className="p-4 rounded-md">

                                {/* Status */}
                                <div
                                    className={`mb-3 font-medium ${
                                        log.status === "Error" ? "text-red-500" : "text-green-600"
                                    }`}
                                >
                                    {log.status === "Error" ? "Error Details:" : "Success Details:"}
                                </div>

                                {/* Steps */}
                                {Object.keys(log.details.steps).length === 0 ? (
                                    <p className="text-muted-foreground text-sm">
                                        No step details available.
                                    </p>
                                ) : (
                                    <ul className="list-numeric pl-6 space-y-1">
                                    {Object.entries(log.details.steps).map(([key, value]) => (
                                        <li
                                        key={key}
                                        className={`${
                                            log.status === "Error"
                                            ? "text-red-500"
                                            : "text-green-600"
                                        }`}
                                        >
                                        {key}: {value as any}
                                        </li>
                                    ))}
                                    </ul>
                                )}
                                </div>
                            </TableCell>
                            </TableRow>
                        )}
                        </React.Fragment>
                    );
                    })}
                </TableBody>
                </Table>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 py-4 mt-5">
                {/* Per Page */}
                <div className="flex items-center gap-4 items-center">
                    <div className="text-sm text-muted-foreground">
                        Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                    </div>
                    <div>
                        |
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className="text-sm text-muted-foreground">Rows per page:</span>
                        <select
                        className="border rounded-md px-2 py-1 text-sm"
                        value={table.getState().pagination.pageSize}
                        onChange={(e) => table.setPageSize(Number(e.target.value))}
                        >
                        {[5, 10, 20, 50].map((size) => (
                            <option key={size} value={size}>
                            {size}
                            </option>
                        ))}
                        </select>
                    </div>
                </div>
                {/* Numeric Pagination */}
                <div className="flex items-center justify-center gap-2">
                    <Button
                    variant="outline"
                    // size="icon"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    >
                    <ChevronLeft className="h-4 w-4" />
                    </Button>

                    {visiblePages.map((page) => (
                    <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => table.setPageIndex(page - 1)}
                    >
                        {page}
                    </Button>
                    ))}

                    {pageCount > visiblePages[visiblePages.length - 1] && (
                    <span className="text-muted-foreground px-2">...</span>
                    )}

                    <Button
                    variant="outline"
                    // size="icon"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    >
                    <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}