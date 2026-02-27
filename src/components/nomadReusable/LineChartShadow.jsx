import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const defaultData = [
  { month: "Jan", value: 38000 },
  { month: "Feb", value: 42000 },
  { month: "Mar", value: 41000 },
  { month: "Apr", value: 47000 },
  { month: "May", value: 45000 },
  { month: "Jun", value: 67000 },
];

const LineChartShadow = ({
  title = "Hiring Progress",
  subtitle = "Active hires over months",
  data = defaultData,
  xAxisKey = "month",
  dataKey = "value",
  yAxisDomain = [0, 80000],
  yAxisTicks = [0, 20000, 40000, 60000, 80000],
  yAxisFormatter = (value) => `${value}`,
  height = 215,
  showRangeToggle = true,
  activeRange = "6M",
}) => {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[12px] font-semibold leading-8 text-[#101828] sm:text-sm">
            {title}
          </h3>
          <p className="mt-1 text-[12px] font-normal leading-7 text-[#6A7282] sm:text-sm">
            {subtitle}
          </p>
        </div>

        {showRangeToggle && (
          <div className="flex items-center gap-4">
            <button
              type="button"
              className={`rounded-xl px-4 py-2 text-[10px] font-semibold leading-6 sm:text-xs ${
                activeRange === "6M"
                  ? "bg-indigo-50 text-[#432DD7]"
                  : "text-[#4A5565]"
              }`}
            >
              6M
            </button>
            <button
              type="button"
              className={`px-1 text-[10px] font-medium leading-6 sm:text-xs ${
                activeRange === "1Y" ? "text-[#432DD7]" : "text-[#4A5565]"
              }`}
            >
              1Y
            </button>
          </div>
        )}
      </div>

      <div className=" w-full">
        <ResponsiveContainer width="100%" height={height}>
          <AreaChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
            <defs>
              <linearGradient id="hiringProgressFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366F1" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#6366F1" stopOpacity={0.12} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} stroke="#E5E7EB" strokeDasharray="3 4" />
            <YAxis
              axisLine={false}
              tickLine={false}
              width={42}
              domain={yAxisDomain}
              ticks={yAxisTicks}
              tickFormatter={yAxisFormatter}
              tick={{ fill: "#94A3B8", fontSize: 10, fontWeight: 600 }}
            />
            <XAxis
              dataKey={xAxisKey}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94A3B8", fontSize: 10, fontWeight: 600 }}
            />
            <Tooltip
              cursor={{ stroke: "#C7D2FE", strokeWidth: 1, strokeDasharray: "3 4" }}
              contentStyle={{
                borderRadius: 10,
                borderColor: "#E5E7EB",
                boxShadow: "0 4px 12px rgba(15, 23, 42, 0.08)",
              }}
            />
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke="#6366F1"
              strokeWidth={3}
              fill="url(#hiringProgressFill)"
              dot={false}
              activeDot={{ r: 4, fill: "#6366F1", stroke: "#FFFFFF", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartShadow;
