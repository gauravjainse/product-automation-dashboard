import RevenueDonut from "@/components/charts/RevenueDonut";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function StatsCards() {
  return (

    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="alight-center text-center">Total Products</CardTitle>
              <CardDescription className="mt-5">
                <RevenueDonut />
              </CardDescription>
            </CardHeader>
          </Card> 
        </div>
        <div>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="alight-center text-center">Registered Districts</CardTitle>
              <CardDescription className="mt-5">
                <RevenueDonut />
              </CardDescription>
            </CardHeader>
          </Card> 
        </div>
        <div>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="alight-center text-center">Registered Schools</CardTitle>
              <CardDescription className="mt-5">
                <RevenueDonut />
              </CardDescription>
            </CardHeader>
          </Card> 
        </div>
      </div>
    </>
  )
}
