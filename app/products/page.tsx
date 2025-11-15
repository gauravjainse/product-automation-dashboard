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
import { ArrowUpDown, ChevronDown, ChevronLeft, ChevronRight, Copy, Edit, MoreHorizontal, OctagonMinus, Trash } from "lucide-react"
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Field,
  FieldGroup,
  FieldError,
  FieldLabel,
  FieldSet,
  FieldLegend,
  FieldTitle,
  FieldContent,
} from "@/components/ui/field";

import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"

import ConfirmBox from "@/components/confirmbox/ConfirmBox"
import SchoolHeader from "@/components/school/SchoolHeader"
import StatsCards from "@/components/school/SchoolStats"

const userTypes = [
  {
    id: "superadmin",
    label: "Super Admin",
    value: "superadmin",
  },
  {
    id: "districtadmin",
    label: "District Admin",
    value: "districtadmin",
  },
  {
    id: "schooladmin",
    label: "School Admin",
    value: "schooladmin",
  },
  {
    id: "organizationadmin",
    label: "Organization Admin",
    value: "organizationadmin",
  },
] as const

const data: Products[] = [
  {
    id: "m5gr84i9",
    name: "David",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
    password: "T$e#hsdh@456"
  },
  {
    id: "3u1reuv4",
    name: "Lopez",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
    password: "T$e#hsdh@456"
  },
  {
    id: "derv1ws0",
    name: "Daniel",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
    password: "T$e#hsdh@456"
  },
  {
    id: "5kma53ae",
    name: "Reah",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
    password: "T$e#hsdh@456"
  }
]

export type Products = {
    id: string,
    name: string,
    linkedstore: string,
    storeurl: string,
    usertype: "Super Admin" | "School Admin" | "District Admin" | "Organization Admin"
    status: "Active" | "Inactive"
    email: string
    password: string
}

const userDeactivate = (id: string, name: string) => {

  toast.promise(
    new Promise((resolve, reject) => {
        setTimeout(() => {
          const success = true

          if(success) resolve(true)
          else reject(false)
        }, 1200)
    }),
    {
        loading: `Deactivating user..`,
        success: `User ${name} has been deactivated`, 
        error: `Unable to deactivated user`
    }
)
}

export default function Page() {
  
  const [globalFilter, setGlobalFilter] = React.useState()
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [showConfirm, setShowConfirm] = React.useState(false)
  
    const columns: ColumnDef<Products>[] = [
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
        accessorKey: "name",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Name
              <ArrowUpDown />
            </Button>
          )
        },
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("name")}</div>
        ),
      },
      {
        accessorKey: "linkedstore",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Linked Store
              <ArrowUpDown />
            </Button>
          )
        },
        cell: ({ row }) => {
          const linkedstore = row.getValue("linkedstore")
          const payment = row.original;
    
    
          return <Link target="_blank" href={payment?.storeurl}>{linkedstore}</Link>
        },
      },
      {
        accessorKey: "usertype",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              User Type
              <ArrowUpDown />
            </Button>
          )
        },
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("usertype")}</div>
        ),
      },
      {
        accessorKey: "email",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Email
              <ArrowUpDown />
            </Button>
          )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
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
        cell: ({ row }) => <div className=""><Badge variant={ row.getValue("status") == 'Inactive' ? "destructive": "secondary"}>{row.getValue("status")}</Badge></div>,
      },
      {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
          const payment = row.original
          const copyContent = {
            email: row.getValue("email"),
            password: payment?.password
          };
          return (
            
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem
                      onClick={async() => {
                        try {
                          await navigator.clipboard.writeText(
                            `Email: ${copyContent.email} and Password: ${copyContent.password}`
                          )
                          toast.success("Copied to clipboard")
                        } catch(err) {
                          toast.error("Failed to copy")
                        }
                      }}
                      >
                    <Copy /> Copy Store URL
                  </DropdownMenuItem>
      
                  <DropdownMenuItem onClick={() => {
                    userDeactivate(payment?.id, payment?.name)
                  }}>
                    <OctagonMinus />Deactivate
                  </DropdownMenuItem>
      
                  <DropdownMenuItem>
                    <Edit/> Edit
                  </DropdownMenuItem>
                  
                  <DropdownMenuSeparator />
                  
                  <DropdownMenuItem onClick={()=>setShowConfirm(true)}>
                    <Trash /> Delete
                  </DropdownMenuItem>
      
                </DropdownMenuContent>
              </DropdownMenu>
              <ConfirmBox
                open={showConfirm}
                onOpenChange={setShowConfirm}
                onConfirm={() => deleteConfirm(payment?.id)}
                data={{
                  title: "Are you absolutely sure?",
                  description: "This action cannot be undone. This will permanently delete the account.",
                  buttonTitle: "Continue",
                }}
              />
            </>
          )
        },
      },
    ]

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
    //   columnFilters,
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

    const formSchema = z.object({
      name: z
          .string()
          .min(3, "Store Name must be at least 3 characters."),
      email: z
          .string()
          .min(3, "Please use a valid email address"),
      password: z
          .string()
          .min(6, "Password must be at least of 6 characters"),
      usertype: z
          .string()
          .min(6, "User type should either be Super, School, District or Organization"),
      }
    )

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            usertype: ""
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        console.log('onSubmit', data)
        toast(`New user has been created`)
    }

    const deleteConfirm = (id: string) => {
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
                loading: `Deleting user..`,
                success: `User has been deleted - ${id}`, 
                error: `Unable to delete user`
            }
        )
    }

  return (
    <div className="w-full">
        <SchoolHeader data={{
          "district": "DPS District",
          "school": "Ryan international school",
          "target": 3000,
          "achieve": 1634,
          "totalSale": 1234
        }} />

      <div className="flex items-center md:justify-between justify-end py-4 flex-wrap gap-4">
        <div className="md:max-w-sm w-full">
          <Input
            placeholder="Search by email, status, or user type..."
            value={globalFilter ?? ""}
            onChange={(event) => setGlobalFilter(event.target.value)}
            className="md:max-w-sm w-full"
          />
        </div>
        <div className="flex gap-2">
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

          <Dialog>
            <DialogTrigger asChild>
                <Button className="">
                  Add New User  
                </Button>
            </DialogTrigger>
            
            <form id="form-rhf-input" onSubmit={form.handleSubmit(onSubmit)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create User</DialogTitle>
                        <DialogDescription>Add user details and click Save when you&apos;re done.
                        </DialogDescription>
                    </DialogHeader>
                    <FieldGroup>
                      <Controller 
                        name="name"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="amicolor-name">
                                    User Name
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="amicolor-name"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Abc"
                                    autoComplete="name"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                      />
                    </FieldGroup>

                    <FieldGroup>
                      <Controller 
                        name="email"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="amicolor-email">
                                    Email
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="amicolor-email"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="abc@domain.com"
                                    autoComplete="email"
                                    type="email"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                      />
                    </FieldGroup>

                    <FieldGroup>
                      <Controller 
                        name="password"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="amicolor-password">
                                    Password
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="amicolor-password"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="pass123"
                                    type="password"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                      />
                    </FieldGroup>

                    <FieldGroup>
                      <Controller
                      name="usertype"
                      control={form.control}
                      render={({ field, fieldState }) => {
                          const isInvalid = fieldState.invalid
                          return (
                          <FieldSet data-invalid={isInvalid}>
                              <FieldLegend variant="label">User Type</FieldLegend>
                              <RadioGroup
                                  name={field.name}
                                  value={field.value}
                                  onValueChange={field.onChange}
                                  aria-invalid={isInvalid}
                                  className="grid grid-cols-2 gap-4"
                              >
                              {userTypes.map((userType)=>(
                                  <FieldLabel key={userType.id} htmlFor={userType.id} className="">
                                      <Field orientation="horizontal">
                                          <FieldContent>
                                              <FieldTitle>{userType.label}</FieldTitle>
                                          </FieldContent>
                                          <RadioGroupItem
                                              style={{width:"15px", height: "15px", top: "1px"}}
                                              value={userType.value}
                                              id={userType.id}
                                              className="relative"
                                          />
                                      </Field>
                                  </FieldLabel>
                              ))}

                              </RadioGroup>
                              {isInvalid && <FieldError errors={[fieldState.error]} />}
                          </FieldSet>
                          )
                      }}
                      />
                  </FieldGroup>

                    <Field orientation="horizontal">
                        <Button type="button" variant="outline" onClick={() => form.reset()}>
                            Reset
                        </Button>
                        <Button type="submit" form="form-rhf-input">
                            Save
                        </Button>
                    </Field>
                </DialogContent>
            </form>
          </Dialog>
        </div>
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
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
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
              <div>
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