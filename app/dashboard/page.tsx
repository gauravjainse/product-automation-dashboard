"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image";

import FundRaisingMeter from "@/components/charts/FundRaisingMeter";
import RegisteredSchools from "@/components/charts/RegisteredSchools";
import RevenueDonut from "@/components/charts/RevenueDonut";

import { MoveUp, Search, Target } from "lucide-react";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import PieChartWithNeedle from "@/components/charts/FundRaisingMeter";

const schools = [
  {
    id: '1001',
    name: "DR. Lopez Academy",
    logo: "/images/store-logos/lopez-academy-logo.png",
    revenue: 45403.89,
    link: "https://lopezacademy.oxnardsdstore.org/"
  },
  {
    id: '1002',
    name: "Marshall Schools",
    logo: "/images/store-logos/marshall.png",
    revenue: 24679.89,
    link: "https://marshall.oxnardsdstore.org/"
  },
  {
    id: '1003',
    name: "Brekke School",
    logo: "/images/store-logos/dolphins.png",
    revenue: 97646.89,
    link: "https://www.brekke.oxnardsdstore.org/"
  },
  {
    id: '1004',
    name: "Calsa School",
    logo: "/images/store-logos/calsa.avif",
    revenue: 83546.89,
    link: "https://calsastore.org/"
  },
  {
    id: '1005',
    name: "Employee Store",
    logo: "/images/store-logos/employee.webp",
    revenue: 546546.89,
    link: "https://oxnardsdstore.org/"
  },
  {
    id: '1006',
    name: "Santa Rosa City Schools",
    logo: "/images/store-logos/srcs.avif",
    revenue: 86567.89,
    link: "https://www.srcschoolsstore.org/"
  },
];

export default function Page() {
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4 items-stretch">
        <div>
          <Card className="w-full max-w-sm h-full">
            <CardHeader>
              <CardTitle className="alight-center text-center">Total Products</CardTitle>
              <CardDescription className="mt-5">
                <RegisteredSchools />
              </CardDescription>
            </CardHeader>
          </Card> 
        </div>
        <div>
          <Card className="w-full max-w-sm h-full">
            <CardHeader>
              <CardTitle className="alight-center text-center">Registered Districts</CardTitle>
              <CardDescription className="mt-5">
                <RevenueDonut />
              </CardDescription>
            </CardHeader>
          </Card> 
        </div>
        <div>
          <Card className="w-full max-w-sm h-full">
            <CardHeader>
              <CardTitle className="alight-center text-center">Registered Schools</CardTitle>
              <CardDescription className="mt-5">
                <RegisteredSchools />
              </CardDescription>
            </CardHeader>
          </Card> 
        </div>
        <div>
          <Card className="w-full max-w-sm h-full">
            <CardHeader className="h-full">
              <CardTitle className="alight-center text-center">Fund Raising Meter</CardTitle>
              <CardDescription className="mt-5 justify-center">
                <PieChartWithNeedle isAnimationActive = {true} data = {{
                  "target": 3000,
                  "achieve": 1634
                }} />
              </CardDescription>
            </CardHeader>
          </Card> 
        </div>
      </div>
      <div className="mt-10">
        <Card className="">
          <CardHeader className="flex justify-between">
            <CardTitle className="text-2xl">School</CardTitle>
            <div className="w-75 relative">
              <Field className="relative">
                <Input name="search" id="searchField" type="text" placeholder="Search.." className="pe-8" />
                <Search className="absolute right-2 top-1 !w-5" />
              </Field>
            </div>
          </CardHeader>
          <Separator />
          <CardHeader>
            {/* <SketchPicker /> */}
            <CardTitle className="text-xl">Employee Store</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid auto-rows-min gap-4 md:grid-cols-4">
              {
                schools.map((school) => (
                <Card className="w-full max-w-sm p-4" key={school.id}>
                  {
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 flex items-center justify-center">
                        
                        <Image src={school.logo} alt={school.name} fill className="object-contain" sizes="34px" />
                      </div>
                      <div className="w-full">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                          {school.name}
                        </h3>
                        <div className="text-sm text-gray-500 dark:text-gray-400 flex w-full justify-between mt-2">
                          <p>Total Revenue</p>
                          <p className="text-gray-900 font-medium dark:text-gray-200 flex items-center"><MoveUp width={16} color="#42c19d" /> ${school.revenue}</p>
                        </div>
                      </div>
                    </div>
                  }
                </Card>
              ))}
            </div>
          </CardContent>

          {/* District */}
          <CardHeader className="mt-5">
            <Separator />
            <CardTitle className="text-xl mt-5">Employee Store</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid auto-rows-min gap-4 md:grid-cols-4">
              {
                schools.map((school) => (
                <Card className="w-full max-w-sm p-4" key={school.id}>
                  {
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 flex items-center justify-center">
                        
                        <Image src={school.logo} alt={school.name} fill className="object-contain" sizes="34px" />
                      </div>
                      <div className="w-full">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                          {school.name}
                        </h3>
                        <div className="text-sm text-gray-500 dark:text-gray-400 flex w-full justify-between mt-2">
                          <p>Total Revenue</p>
                          <p className="text-gray-900 font-medium dark:text-gray-200">${school.revenue}</p>
                        </div>
                      </div>
                    </div>
                  }
                </Card>
              ))}
            </div>
          </CardContent>

        </Card> 
      </div>
    </div>
  )
}
