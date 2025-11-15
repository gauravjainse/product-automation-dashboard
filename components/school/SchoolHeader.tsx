import {
  Card
} from "@/components/ui/card"
import Image from "next/image";
import PieChartWithNeedle from "../charts/FundRaisingMeter";
export default function SchoolHeader( { data }:any ) {
    const {
        district,
        school,
        target,
        achieve,
        totalSale
    } = data ?? {};

return (
    <Card className="px-6 py-4">
        <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
                <Image width={100} height={100} src="/images/store-logos/lopez-academy-logo.png" alt={school} />
                <div className="flex flex-col gap-2">
                    <p className="text-sm uppercase">
                        {district}
                    </p>
                    <h1 className="text-3xl font-bold">
                        {school}
                    </h1>
                    <p className="text-md uppercase mt-1 text-green-600 font-bold">
                        Total Sales ${totalSale}
                    </p>
                </div>
            </div>
            <div className="flex gap-4">
                <Card className="justify-center gap-2 items-center p-4 border-0">
                    <h3 className="text-sm uppercase">
                        Fund Raising Meter
                    </h3>

                    <PieChartWithNeedle isAnimationActive = {true} data = {{
                        target: 3000,
                        achieve: 1634, 
                    }} />
                </Card>
            </div>
        </div>
    </Card>
)}
