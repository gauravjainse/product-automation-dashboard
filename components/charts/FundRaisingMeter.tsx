import { Pie, PieChart, PieProps, Tooltip } from 'recharts';
import { PieSectorDataItem } from 'recharts/types/polar/Pie';

const NEEDLE_BASE_RADIUS_PX = 5;
const NEEDLE_COLOR = '#d0d000';
const Needle = ({ cx, cy, midAngle, innerRadius, outerRadius }: PieSectorDataItem) => {
  const needleBaseCenterX = cx;
  const needleBaseCenterY = cy;
  
  const needleLength = innerRadius + (outerRadius - innerRadius) / 2;

  return (
    <g>
      <circle
        cx={needleBaseCenterX}
        cy={needleBaseCenterY}
        r={NEEDLE_BASE_RADIUS_PX}
        fill={NEEDLE_COLOR}
        stroke="none"
      />
      <path
        d={`M${needleBaseCenterX},${needleBaseCenterY}l${needleLength},0`}
        strokeWidth={2}
        stroke={NEEDLE_COLOR}
        fill={NEEDLE_COLOR}
        style={{
          transform: `rotate(-${midAngle}deg)`,
          transformOrigin: `${needleBaseCenterX}px ${needleBaseCenterY}px`,
        }}
      />
    </g>
  );
};

export default function PieChartWithNeedle( {data, isAnimationActive = true}: {data: {target: number, achieve: number}, isAnimationActive: boolean}) {

  const {target, achieve} = data;

  const targetValue =  parseInt(((achieve / target) * 100).toFixed(2));
  const remaining = 100 - targetValue;
  
  const chartData = [
    { name: 'A', value: targetValue, fill: '#00ff00' },
    { name: 'C', value: remaining, fill: '#626262ff' },
  ];

  const HalfPie = (props: PieProps) => (
    <Pie
      {...props}
      stroke="none"
      dataKey="value"
      startAngle={180}
      endAngle={0}
      data={chartData}
      cx={100}
      cy={100}
      innerRadius={50}
      outerRadius={100}
    />
  );

  return (
    <>
      <PieChart width={210} height={120} style={{ margin: '0 auto' }}>
        <HalfPie isAnimationActive={isAnimationActive} />
        <HalfPie isAnimationActive={isAnimationActive} activeShape={Needle} />
        <Tooltip defaultIndex={0} content={() => null} active />
      </PieChart>
      <h2 className="mt-2 text-center text-card-foreground text-3xl font-bold text-sm">
          ${achieve} / ${target}
      </h2>
    </>
  );
}