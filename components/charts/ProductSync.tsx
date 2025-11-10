'use client';

import React from 'react';

interface ProductSyncGaugeProps {
  value: number;
  total?: number;
  label?: string;
  color?: string;
}

export default function ProductSyncGauge({
  value,
  total = 100,
  label = 'Progress',
  color = '#3B5BFF',
}: ProductSyncGaugeProps) {
  const percentage = Math.min(100, Math.max(0, (value / total) * 100));
  const rotation = 45 + (percentage * 180) / 100; 

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-100 h-50 overflow-hidden">
        {/* Half circle container */}
        <div
          className="absolute w-90 h-90 rounded-full border-[20px]"
          style={{
            borderColor: `rgba(0,0,0,0.5)`, // gray background arc
            borderBottomColor: '#dededeff',
            borderLeftColor: '#dededeff',
            transform: 'rotate(135deg)',
            left: "20px",
            top: "20px"
          }}
        ></div>

        {/* Progress arc */}
        <div
          className="absolute w-100 h-100 rounded-full border-[60px]"
          style={{
            borderColor: color,
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent',
            transform: `rotate(${135 + (percentage * 1.8)}deg)`, // 180° arc
            transition: 'transform 0.3s ease',
          }}
        ></div>

         {/* Needle */}
        <div
          className="absolute w-[2px] h-[130px] bg-black origin-bottom left-1/2 bottom-0"
          style={{
            transform: `rotate(${rotation - 135}deg) translateX(-50%)`,
            transition: 'transform 0.4s ease-in-out',
            background: "var(--primary)"
          }}
        ></div>

        {/* Needle center circle */}
        <div className="absolute w-5 h-5 rounded-full left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2" style={{background: "var(--primary)"}}></div>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center top-30">
            <span className="text-4xl font-bold">{Math.round(percentage)}%</span>
            {/* {label && (
                <p className="mt-2 text-gray-500 text-sm text-center">
                    {value}/{total} {label}
                </p>
            )} */}
        </div>
      </div>
    </div>
  );
}
