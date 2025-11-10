'use client';

import React from 'react';

interface GaugeProgressProps {
  value: number;         // current value (e.g. 40)
  total?: number;        // max value (e.g. 100)
  label?: string;        // optional description
  color?: string;        // primary arc color
}

export default function ProductSyncGauge({
  value,
  total = 100,
  label = 'Product syncing in Progress',
  color = '#3B5BFF',
}: GaugeProgressProps) {
  const percentage = Math.min(100, Math.max(0, (value / total) * 100));

  // rotation for needle: -90° to +90° range
  const needleRotation = (percentage / 100) * 180 - 90;

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto select-none">
      <div className="relative w-[260px] h-[140px]">
        <svg
          viewBox="0 0 300 160"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* background arc */}
          <path
            d="M40 150 A110 110 0 0 1 260 150"
            stroke="#E5E7EB"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
          />

          {/* progress arc */}
          <path
            d="M40 150 A110 110 0 0 1 260 150"
            stroke={color}
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="345"
            strokeDashoffset={345 - (345 * percentage) / 100}
            transform="rotate(180,150,150)"
            style={{ transition: 'stroke-dashoffset 0.8s ease' }}
          />

          {/* needle / pointer */}
          <line
            x1="150"
            y1="150"
            x2="150"
            y2="40"
            stroke={color}
            strokeWidth="2"
            transform={`rotate(${needleRotation},150,150)`}
            style={{ transition: 'transform 0.8s ease' }}
          />

          {/* needle center circle */}
          <circle cx="150" cy="150" r="5" fill={color} />
        </svg>
      </div>

      {/* labels */}
      <div className="text-center -mt-2">
        <p className="text-4xl font-bold text-gray-800">{Math.round(percentage)}%</p>
        <p className="text-gray-500 text-sm mt-1">
          {value}/{total} {label}
        </p>
      </div>
    </div>
  );
}
