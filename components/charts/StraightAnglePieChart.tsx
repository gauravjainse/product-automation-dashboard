"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { GraduationCap } from "lucide-react";

const data = [
  { value: 70 },
  { value: 30 },
];
const COLORS = ["#3b82f6", "#E5E7EB"];

export default function StraightAnglePieChart() {
  return (
    <div className="h-56 relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            startAngle={180}
            endAngle={-180}
            innerRadius="80%"
            outerRadius="100%"
            stroke="none"
            cornerRadius={50}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="bg-blue-100 p-3 rounded-full">
          <GraduationCap className="text-blue-600" />
        </div>
        <p className="text-2xl font-bold mt-2">50,520</p>
        <p className="text-muted-foreground text-sm">Total Schools</p>
      </div>
    </div>
  );
}
