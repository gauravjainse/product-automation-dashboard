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
import { ArrowUpDown, ChevronDown, ChevronLeft, ChevronRight, Copy, Edit, MoreHorizontal, OctagonMinus, PanelTopInactive, SeparatorVertical, Trash } from "lucide-react"
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
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const data: Users[] = [
  {
    id: "m5gr84i9",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
  },
  {
    id: "3u1reuv4",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
  },
  {
    id: "derv1ws0",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
  },
  {
    id: "5kma53ae",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
  },
  {
    id: "bhqecj4p",
    linkedstore: "Employee Store",
    storeurl: "https://oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Active",
    email: "info@oxnardsdstore.org",
  },
  {
    id: "fttgcj4p",
    linkedstore: "Santa Rosa City School",
    storeurl: "https://www.srcschoolsstore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@srcschoolsstore.org",
  },
  {
    id: "m5gr84i9",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
  },
  {
    id: "3u1reuv4",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
  },
  {
    id: "derv1ws0",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
  },
  {
    id: "5kma53ae",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
  },
  {
    id: "bhqecj4p",
    linkedstore: "Employee Store",
    storeurl: "https://oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Active",
    email: "info@oxnardsdstore.org",
  },
  {
    id: "fttgcj4p",
    linkedstore: "Santa Rosa City School",
    storeurl: "https://www.srcschoolsstore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@srcschoolsstore.org",
  },
  {
    id: "m5gr84i9",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
  },
  {
    id: "3u1reuv4",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
  },
  {
    id: "derv1ws0",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
  },
  {
    id: "5kma53ae",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
  },
  {
    id: "bhqecj4p",
    linkedstore: "Employee Store",
    storeurl: "https://oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Active",
    email: "info@oxnardsdstore.org",
  },
  {
    id: "fttgcj4p",
    linkedstore: "Santa Rosa City School",
    storeurl: "https://www.srcschoolsstore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@srcschoolsstore.org",
  },
  {
    id: "m5gr84i9",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
  },
  {
    id: "3u1reuv4",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
  },
  {
    id: "derv1ws0",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
  },
  {
    id: "5kma53ae",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
  },
  {
    id: "bhqecj4p",
    linkedstore: "Employee Store",
    storeurl: "https://oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Active",
    email: "info@oxnardsdstore.org",
  },
  {
    id: "fttgcj4p",
    linkedstore: "Santa Rosa City School",
    storeurl: "https://www.srcschoolsstore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@srcschoolsstore.org",
  },
  {
    id: "m5gr84i9",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
  },
  {
    id: "3u1reuv4",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
  },
  {
    id: "derv1ws0",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
  },
  {
    id: "5kma53ae",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
  },
  {
    id: "bhqecj4p",
    linkedstore: "Employee Store",
    storeurl: "https://oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Active",
    email: "info@oxnardsdstore.org",
  },
  {
    id: "fttgcj4p",
    linkedstore: "Santa Rosa City School",
    storeurl: "https://www.srcschoolsstore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@srcschoolsstore.org",
  },
  {
    id: "m5gr84i9",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
  },
  {
    id: "3u1reuv4",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
  },
  {
    id: "derv1ws0",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
  },
  {
    id: "5kma53ae",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
  },
  {
    id: "bhqecj4p",
    linkedstore: "Employee Store",
    storeurl: "https://oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Active",
    email: "info@oxnardsdstore.org",
  },
  {
    id: "fttgcj4p",
    linkedstore: "Santa Rosa City School",
    storeurl: "https://www.srcschoolsstore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@srcschoolsstore.org",
  },
  {
    id: "m5gr84i9",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
  },
  {
    id: "3u1reuv4",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
  },
  {
    id: "derv1ws0",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
  },
  {
    id: "5kma53ae",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
  },
  {
    id: "bhqecj4p",
    linkedstore: "Employee Store",
    storeurl: "https://oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Active",
    email: "info@oxnardsdstore.org",
  },
  {
    id: "fttgcj4p",
    linkedstore: "Santa Rosa City School",
    storeurl: "https://www.srcschoolsstore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@srcschoolsstore.org",
  },
  {
    id: "m5gr84i9",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
  },
  {
    id: "3u1reuv4",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
  },
  {
    id: "derv1ws0",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
  },
  {
    id: "5kma53ae",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
  },
  {
    id: "bhqecj4p",
    linkedstore: "Employee Store",
    storeurl: "https://oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Active",
    email: "info@oxnardsdstore.org",
  },
  {
    id: "fttgcj4p",
    linkedstore: "Santa Rosa City School",
    storeurl: "https://www.srcschoolsstore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@srcschoolsstore.org",
  },
  {
    id: "m5gr84i9",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
  },
  {
    id: "3u1reuv4",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
  },
  {
    id: "derv1ws0",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
  },
  {
    id: "5kma53ae",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
  },
  {
    id: "bhqecj4p",
    linkedstore: "Employee Store",
    storeurl: "https://oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Active",
    email: "info@oxnardsdstore.org",
  },
  {
    id: "fttgcj4p",
    linkedstore: "Santa Rosa City School",
    storeurl: "https://www.srcschoolsstore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@srcschoolsstore.org",
  },
  {
    id: "m5gr84i9",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
  },
  {
    id: "3u1reuv4",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
  },
  {
    id: "derv1ws0",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
  },
  {
    id: "5kma53ae",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
  },
  {
    id: "bhqecj4p",
    linkedstore: "Employee Store",
    storeurl: "https://oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Active",
    email: "info@oxnardsdstore.org",
  },
  {
    id: "fttgcj4p",
    linkedstore: "Santa Rosa City School",
    storeurl: "https://www.srcschoolsstore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@srcschoolsstore.org",
  },
  {
    id: "m5gr84i9",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
  },
  {
    id: "3u1reuv4",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
  },
  {
    id: "derv1ws0",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
  },
  {
    id: "5kma53ae",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
  },
  {
    id: "bhqecj4p",
    linkedstore: "Employee Store",
    storeurl: "https://oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Active",
    email: "info@oxnardsdstore.org",
  },
  {
    id: "fttgcj4p",
    linkedstore: "Santa Rosa City School",
    storeurl: "https://www.srcschoolsstore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@srcschoolsstore.org",
  },{
    id: "m5gr84i9",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
  },
  {
    id: "3u1reuv4",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
  },
  {
    id: "derv1ws0",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
  },
  {
    id: "5kma53ae",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
  },
  {
    id: "bhqecj4p",
    linkedstore: "Employee Store",
    storeurl: "https://oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Active",
    email: "info@oxnardsdstore.org",
  },
  {
    id: "fttgcj4p",
    linkedstore: "Santa Rosa City School",
    storeurl: "https://www.srcschoolsstore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@srcschoolsstore.org",
  },
  {
    id: "m5gr84i9",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
  },
  {
    id: "3u1reuv4",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
  },
  {
    id: "derv1ws0",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
  },
  {
    id: "5kma53ae",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
  },
  {
    id: "bhqecj4p",
    linkedstore: "Employee Store",
    storeurl: "https://oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Active",
    email: "info@oxnardsdstore.org",
  },
  {
    id: "fttgcj4p",
    linkedstore: "Santa Rosa City School",
    storeurl: "https://www.srcschoolsstore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@srcschoolsstore.org",
  },
  {
    id: "m5gr84i9",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
  },
  {
    id: "3u1reuv4",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
  },
  {
    id: "derv1ws0",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
  },
  {
    id: "5kma53ae",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
  },
  {
    id: "bhqecj4p",
    linkedstore: "Employee Store",
    storeurl: "https://oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Active",
    email: "info@oxnardsdstore.org",
  },
  {
    id: "fttgcj4p",
    linkedstore: "Santa Rosa City School",
    storeurl: "https://www.srcschoolsstore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@srcschoolsstore.org",
  },
  {
    id: "m5gr84i9",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
  },
  {
    id: "3u1reuv4",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
  },
  {
    id: "derv1ws0",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
  },
  {
    id: "5kma53ae",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
  },
  {
    id: "bhqecj4p",
    linkedstore: "Employee Store",
    storeurl: "https://oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Active",
    email: "info@oxnardsdstore.org",
  },
  {
    id: "fttgcj4p",
    linkedstore: "Santa Rosa City School",
    storeurl: "https://www.srcschoolsstore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@srcschoolsstore.org",
  },
  {
    id: "m5gr84i9",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
  },
  {
    id: "3u1reuv4",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
  },
  {
    id: "derv1ws0",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
  },
  {
    id: "5kma53ae",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
  },
  {
    id: "bhqecj4p",
    linkedstore: "Employee Store",
    storeurl: "https://oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Active",
    email: "info@oxnardsdstore.org",
  },
  {
    id: "fttgcj4p",
    linkedstore: "Santa Rosa City School",
    storeurl: "https://www.srcschoolsstore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@srcschoolsstore.org",
  },
  {
    id: "m5gr84i9",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
  },
  {
    id: "3u1reuv4",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
  },
  {
    id: "derv1ws0",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
  },
  {
    id: "5kma53ae",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
  },
  {
    id: "bhqecj4p",
    linkedstore: "Employee Store",
    storeurl: "https://oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Active",
    email: "info@oxnardsdstore.org",
  },
  {
    id: "fttgcj4p",
    linkedstore: "Santa Rosa City School",
    storeurl: "https://www.srcschoolsstore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@srcschoolsstore.org",
  },
  {
    id: "m5gr84i9",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
  },
  {
    id: "3u1reuv4",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
  },
  {
    id: "derv1ws0",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
  },
  {
    id: "5kma53ae",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
  },
  {
    id: "bhqecj4p",
    linkedstore: "Employee Store",
    storeurl: "https://oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Active",
    email: "info@oxnardsdstore.org",
  },
  {
    id: "fttgcj4p",
    linkedstore: "Santa Rosa City School",
    storeurl: "https://www.srcschoolsstore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@srcschoolsstore.org",
  },
  {
    id: "m5gr84i9",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
  },
  {
    id: "3u1reuv4",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
  },
  {
    id: "derv1ws0",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
  },
  {
    id: "5kma53ae",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
  },
  {
    id: "bhqecj4p",
    linkedstore: "Employee Store",
    storeurl: "https://oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Active",
    email: "info@oxnardsdstore.org",
  },
  {
    id: "fttgcj4p",
    linkedstore: "Santa Rosa City School",
    storeurl: "https://www.srcschoolsstore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@srcschoolsstore.org",
  },
  {
    id: "m5gr84i9",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
  },
  {
    id: "3u1reuv4",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
  },
  {
    id: "derv1ws0",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
  },
  {
    id: "5kma53ae",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
  },
  {
    id: "bhqecj4p",
    linkedstore: "Employee Store",
    storeurl: "https://oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Active",
    email: "info@oxnardsdstore.org",
  },
  {
    id: "fttgcj4p",
    linkedstore: "Santa Rosa City School",
    storeurl: "https://www.srcschoolsstore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@srcschoolsstore.org",
  },
  {
    id: "m5gr84i9",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
  },
  {
    id: "3u1reuv4",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
  },
  {
    id: "derv1ws0",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
  },
  {
    id: "5kma53ae",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
  },
  {
    id: "bhqecj4p",
    linkedstore: "Employee Store",
    storeurl: "https://oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Active",
    email: "info@oxnardsdstore.org",
  },
  {
    id: "fttgcj4p",
    linkedstore: "Santa Rosa City School",
    storeurl: "https://www.srcschoolsstore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@srcschoolsstore.org",
  },
  {
    id: "m5gr84i9",
    linkedstore: "DR. Lopez Academy",
    storeurl: "https://lopezacademy.oxnardsdstore.org/",
    usertype: "Super Admin",
    status: "Active",
    email: "lopezacademy@oxnardsdstore.org",
  },
  {
    id: "3u1reuv4",
    linkedstore: "Marshall Schools",
    storeurl: "https://marshall.oxnardsdstore.org/",
    usertype: "District Admin",
    status: "Inactive",
    email: "marshall@oxnardsdstore.org",
  },
  {
    id: "derv1ws0",
    linkedstore: "Brekke School",
    storeurl: "https://www.brekke.oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Inactive",
    email: "brekke@oxnardsdstore.org",
  },
  {
    id: "5kma53ae",
    linkedstore: "Calsa School",
    storeurl: "https://calsastore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@calsastore.org",
  },
  {
    id: "bhqecj4p",
    linkedstore: "Employee Store",
    storeurl: "https://oxnardsdstore.org/",
    usertype: "School Admin",
    status: "Active",
    email: "info@oxnardsdstore.org",
  },
  {
    id: "fttgcj4p",
    linkedstore: "Santa Rosa City School",
    storeurl: "https://www.srcschoolsstore.org/",
    usertype: "District Admin",
    status: "Active",
    email: "info@srcschoolsstore.org",
  },
]

export type Users = {
    id: string,
    linkedstore: string,
    storeurl: string,
    usertype: "Super Admin" | "School Admin" | "District Admin"
    status: "Active" | "Inactive"
    email: string
}

export const columns: ColumnDef<Users>[] = [
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
      return (
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
              onClick={() => navigator.clipboard.writeText(payment.storeurl)}
            >
              <Copy /> Copy Store URL
            </DropdownMenuItem>
            
            <DropdownMenuItem><OctagonMinus />Deactivate</DropdownMenuItem>
            <DropdownMenuItem><Edit/> Edit</DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem><Trash/>Delete User</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function Page() {

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

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        {/* <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        /> */}
        <Input
            placeholder="Search by email, status, or user type..."
            value={globalFilter ?? ""}
            onChange={(event) => setGlobalFilter(event.target.value)}
            className="max-w-sm"
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
            <ChevronLeft className="h-4 w-4" />Previous
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
            Next<ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    </div>

    </div>
  )
}