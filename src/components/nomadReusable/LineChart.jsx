import React, { useState } from 'react'
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  ReferenceArea,
} from 'recharts'
import { BsThreeDots } from 'react-icons/bs'

const LineChart = ({
  title = "Platform Growth",
  subtitle = "New Companies vs New Recruiters",
  data = [],
  dataKeys = ["companies", "recruiters"],
  dataLabels = ["Companies", "Recruiters"],
  colors = ["#6366F1", "#F59E0B"],
  xAxisKey = "month",
  yAxisFormatter = (value) => `${value}`,
  yAxisDomain = [0, 160],
  yAxisTicks = [0, 40, 80, 120, 160],
  height = 288,
  showTooltip = true,
  showLegend = true,
  showDropdowns = false,
  legendFlexCol,
  dropdownOptions,
  onYearChange,
  onPeriodChange,
  highlightPeriod = null, // { start: "Ago", end: "Set" }
  currency = "MT",
  showThreeDots = false,
}) => {
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false)
  const [periodDropdownOpen, setPeriodDropdownOpen] = useState(false)
  const [selectedYear, setSelectedYear] = useState(
    dropdownOptions?.year?.[0] || { label: "2025 - 2026", value: "2025-2026" }
  )
  const [selectedPeriod, setSelectedPeriod] = useState(
    dropdownOptions?.period?.[0] || { label: "Anual", value: "annual" }
  )

  // Sample data structure if none provided
  const defaultData = [
    { month: "Jan", companies: 48, recruiters: 36 },
    { month: "Feb", companies: 60, recruiters: 52 },
    { month: "Mar", companies: 72, recruiters: 64 },
    { month: "Apr", companies: 86, recruiters: 78 },
    { month: "May", companies: 102, recruiters: 95 },
    { month: "Jun", companies: 122, recruiters: 116 },
  ]

  const chartData = data.length > 0 ? data : defaultData

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm">
          <p className="mb-2 text-xs font-semibold text-gray-900">{label}</p>
          {payload.map((entry, index) => (
            <div key={index} className="mb-1 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
              <span className="text-xs font-medium" style={{ color: entry.color }}>
                {dataLabels[index]}: {entry.value}
                {currency ? ` ${currency}` : ""}
              </span>
            </div>
          ))}
        </div>
      )
    }
    return null
  }

  // Custom legend component
  const CustomLegend = () => (
    <div className="flex items-center justify-center gap-6 pt-2">
      {dataKeys.map((key, index) => (
        <div key={key} className="flex items-center gap-2">
          <div className="h-[14px] w-[14px] rounded-full" style={{ backgroundColor: colors[index] }} />
          <span className="text-xs font-normal leading-4" style={{ color: colors[index] }}>
            {dataLabels[index]}
          </span>
        </div>
      ))}
    </div>
  )

  // Find highlight period indices
  const getHighlightIndices = () => {
    if (!highlightPeriod) return null

    const startIndex = chartData.findIndex(
      (item) => item[xAxisKey] === highlightPeriod.start
    )
    const endIndex = chartData.findIndex(
      (item) => item[xAxisKey] === highlightPeriod.end
    )

    if (startIndex === -1 || endIndex === -1) return null

    return { start: startIndex, end: endIndex }
  }

  const highlightIndices = getHighlightIndices()

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white px-6 py-6">
      {/* Header with title, legend, and dropdowns */}
      <div
        className={`mb-6 flex flex-col gap-3 sm:flex-row md:flex-col ${
          legendFlexCol ? legendFlexCol : "lg:flex-row"
        }`}
      >
        <div className="space-y-1">
          <h3 className="text-base font-bold leading-6 text-[#101828]">{title}</h3>
          <p className="text-xs font-normal leading-4 text-[#6A7282]">{subtitle}</p>
        </div>

        {/* Legend and Dropdowns Row */}
        <div className="flex flex-1 flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-end">
          {showThreeDots && (
            <BsThreeDots className="text-[20px] font-semibold hover:cursor-pointer" />
          )}

          {/* Dropdowns */}
          {showDropdowns && (
            <div className="flex gap-2 flex-wrap">
              {/* Year Dropdown */}
              {dropdownOptions?.year && (
                <div className="relative">
                  <button
                    className="flex items-center gap-1 text-gray-600 rounded-[0.375rem] font-normal text-[0.625rem] focus:outline-none select-none bg-gray-100 px-[0.3125rem] py-2 border-0 border-gray-200 hover:bg-gray-100 transition-colors w-full"
                    onClick={() => setYearDropdownOpen(!yearDropdownOpen)}
                    type="button"
                  >
                    <span className="truncate">{selectedYear.label}</span>
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {yearDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                      {dropdownOptions?.year?.map((option) => (
                        <button
                          key={option.value}
                          className={`w-full text-left text-xs px-3 py-2 rounded-lg hover:bg-gray-50 ${selectedYear.value === option.value
                              ? "font-semibold text-primary-500 bg-primary-50"
                              : "text-gray-700"
                            }`}
                          onClick={() => {
                            setSelectedYear(option)
                            setYearDropdownOpen(false)
                            onYearChange?.(option)
                          }}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Period Dropdown */}
              {dropdownOptions?.period && (
                <div className="relative">
                  <button
                    className="flex items-center gap-1 text-gray-600 rounded-[0.375rem] font-normal text-[0.625rem] focus:outline-none select-none bg-gray-100 px-[0.3125rem] py-2 border-0 border-gray-200 hover:bg-gray-100 transition-colors w-full"
                    onClick={() => setPeriodDropdownOpen(!periodDropdownOpen)}
                    type="button"
                  >
                    <span className="truncate">{selectedPeriod.label}</span>
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {periodDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                      {dropdownOptions?.period?.map((option) => (
                        <button
                          key={option.value}
                          className={`w-full text-left text-xs px-3 py-2 rounded-lg hover:bg-gray-50 ${selectedPeriod.value === option.value
                              ? "font-semibold text-primary-500 bg-primary-50"
                              : "text-gray-700"
                            }`}
                          onClick={() => {
                            setSelectedPeriod(option)
                            setPeriodDropdownOpen(false)
                            onPeriodChange?.(option)
                          }}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Chart */}
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height={height}>
          <RechartsLineChart
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              left: -14,
              bottom: 18,
            }}
          >
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#94A3B8",
                fontSize: 10,
                fontWeight: 400,
              }}
              width={34}
              allowDecimals={false}
              domain={yAxisDomain}
              ticks={yAxisTicks}
              tickFormatter={yAxisFormatter}
            />

            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical horizontal />

            {showTooltip && (
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ stroke: "#CBD5E1", strokeWidth: 1, strokeDasharray: "3 3" }}
              />
            )}

            <XAxis
              dataKey={xAxisKey}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#94A3B8",
                fontSize: 11,
                fontWeight: 700,
              }}
            />

            {highlightIndices && (
              <ReferenceArea
                x1={highlightPeriod.start}
                x2={highlightPeriod.end}
                fill="#6366F1"
                fillOpacity={0.08}
              />
            )}

            {dataKeys.map((key, index) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={colors[index]}
                strokeWidth={2}
                dot={{
                  r: 4,
                  fill: colors[index],
                  stroke: colors[index],
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 5,
                  fill: colors[index],
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
                connectNulls={false}
              />
            ))}
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>

      {showLegend && <CustomLegend />}
    </div>
  )
}

export default LineChart
