import { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

const BarGraph = ({
  title = "Transaction Volume",
  subtitle = "Monthly Gross Merchandise Value (GMV)",
  data = [],
  dataKeys = ["value"],
  dataLabels = ["GMV"],
  colors = ["#6366F1", "#10B981", "#EC4899", "#F59E0B", "#6366F1", "#EC4899"],
  dropdownOptions = {
    month: [
      { label: "Janeiro", value: "jan" },
      { label: "Fevereiro", value: "fev" },
      { label: "Março", value: "mar" },
      { label: "Abril", value: "abr" },
      { label: "Maio", value: "mai" },
    ],
    course: [
      { label: "Curso 1", value: "course1" },
      { label: "Curso 2", value: "course2" },
      { label: "Curso 3", value: "course3" },
    ],
  },
  onMonthChange,
  onCourseChange,
  xAxisKey = "name",
  yAxisDomain = [0, 600],
  yAxisTicks = [0, 150, 300, 450, 600],
  yAxisFormatter = (value) => `${value}`,
  height = 320,
  showTooltip = true,
  showDropdowns = false,
  showLegend = false,
}) => {
  const [monthDropdownOpen, setMonthDropdownOpen] = useState(false);
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(
    dropdownOptions.month?.[0] || { label: "Mês", value: "jan" }
  );
  const [selectedCourse, setSelectedCourse] = useState(
    dropdownOptions.course?.[0] || { label: "Curso", value: "course1" }
  );

  const defaultData = [
    { name: "Jan", value: 240 },
    { name: "Feb", value: 310 },
    { name: "Mar", value: 380 },
    { name: "Apr", value: 430 },
    { name: "May", value: 490 },
    { name: "Jun", value: 560 },
  ];

  const chartData = data.length > 0 ? data : defaultData;
  const isSingleSeries = dataKeys.length === 1;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm">
          <p className="mb-2 text-xs font-semibold text-gray-900">{label}</p>
          {payload.map((entry, index) => (
            <p
              key={index}
              className="text-[0.625rem]"
              style={{ color: entry.color }}
            >
              {dataLabels[index] || dataKeys[index]}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const CustomLegend = () => (
    <div className="flex items-center gap-4">
      {dataKeys.map((key, index) => (
        <div key={key} className="flex items-center gap-2">
          <div
            className="h-3 w-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: colors[index] }}
          />
          <span className="text-black text-[0.625rem] font-semibold">
            {dataLabels[index]}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white px-6 pb-[1.3px] pt-6">
      <div className="mb-6 flex flex-col gap-3">
        <div className="mb-2 flex flex-row justify-between gap-3">
          <div className="space-y-1">
            <h3 className="text-base font-bold leading-6 text-[#101828]">
              {title}
            </h3>
            <p className="text-[#6A7282] text-xs font-normal leading-4">{subtitle}</p>
          </div>

          {showDropdowns && (
            <div className="flex gap-2 flex-wrap">
              {dropdownOptions.month && (
                <div className="relative">
                  <button
                    className="flex w-full items-center gap-1 rounded-[0.375rem] border-0 border-gray-200 bg-gray-100 px-[0.3125rem] py-2 text-[0.625rem] font-normal text-gray-600 transition-colors hover:bg-gray-100 focus:outline-none"
                    onClick={() => setMonthDropdownOpen(!monthDropdownOpen)}
                    type="button"
                  >
                    <span className="truncate">{selectedMonth.label}</span>
                    <svg
                      className="h-4 w-4 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {monthDropdownOpen && (
                    <div className="absolute right-0 z-50 mt-2 w-32 rounded-lg border border-gray-200 bg-white shadow-lg">
                      {dropdownOptions.month.map((option) => (
                        <button
                          key={option.value}
                          className={`w-full rounded-lg px-3 py-2 text-left text-xs hover:bg-gray-50 ${
                            selectedMonth.value === option.value
                              ? "bg-primary-50 font-semibold text-primary-500"
                              : "text-gray-700"
                          }`}
                          onClick={() => {
                            setSelectedMonth(option);
                            setMonthDropdownOpen(false);
                            onMonthChange?.(option);
                          }}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {dropdownOptions.course && (
                <div className="relative">
                  <button
                    className="flex w-full items-center gap-1 rounded-[0.375rem] border-0 border-gray-200 bg-gray-100 px-[0.3125rem] py-2 text-[0.625rem] font-normal text-gray-600 transition-colors hover:bg-gray-100 focus:outline-none"
                    onClick={() => setCourseDropdownOpen(!courseDropdownOpen)}
                    type="button"
                  >
                    <span className="truncate">{selectedCourse.label}</span>
                    <svg
                      className="h-4 w-4 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {courseDropdownOpen && (
                    <div className="absolute right-0 z-50 mt-2 w-32 rounded-lg border border-gray-200 bg-white shadow-lg">
                      {dropdownOptions.course.map((option) => (
                        <button
                          key={option.value}
                          className={`w-full rounded-lg px-3 py-2 text-left text-xs hover:bg-gray-50 ${
                            selectedCourse.value === option.value
                              ? "bg-primary-50 font-semibold text-primary-500"
                              : "text-gray-700"
                          }`}
                          onClick={() => {
                            setSelectedCourse(option);
                            setCourseDropdownOpen(false);
                            onCourseChange?.(option);
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

        {showLegend && (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-shrink-0">
              <CustomLegend />
            </div>
          </div>
        )}
      </div>

      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={chartData}
          margin={{
            top: 10,
            right: 10,
            left: -8,
            bottom: 10,
          }}
          barCategoryGap="25%"
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
            tickMargin={8}
          />

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#E2E8F0"
            vertical
            horizontal
          />

          {showTooltip && (
            <Tooltip
              content={<CustomTooltip />}
              cursor={false}
              allowEscapeViewBox={{ x: false, y: false }}
            />
          )}

          <XAxis
            dataKey={xAxisKey}
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#94A3B8",
              fontSize: 12,
              fontWeight: 700,
              fontFamily: "Inter",
            }}
            tickMargin={10}
            interval={0}
            padding={{ left: 0, right: 0 }}
          />

          {isSingleSeries ? (
            <Bar dataKey={dataKeys[0]} radius={[4, 4, 0, 0]} barSize={20}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${entry[xAxisKey]}-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          ) : (
            dataKeys.map((key, index) => (
              <Bar
                key={key}
                dataKey={key}
                fill={colors[index]}
                radius={[4, 4, 0, 0]}
                barSize={14}
              />
            ))
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;
