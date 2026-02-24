import React, { useState } from "react";
import DashboardCardsContainer from "./features/dashboardCard";
import BarGraph from "../../../components/BarGraph";
import PieChart from "../../../components/PieChart";
import Calendar from "../../../components/nomadReusable/CalendarComp";
import RevenueSection from "../../../components/nomadReusable/Revenue";
import LineChart from "../../../components/nomadReusable/LineChart";
import SectionHeader from "../../../components/nomadReusable/SectionHeader";
import ReusableFilter from "../../../components/ReusableFilter";
import ReusableDataTable from "../../../components/ReusableDataTable";
import ReusablePagination from "../../../components/ReusablePagination";
import { BellIcon, BellIcon2 } from "../../../assets/icons/icons";
import {
  FiEdit2,
  FiEye,
  FiFileText,
  FiMessageSquare,
  FiTrash2,
} from "react-icons/fi";

const AdminDashboard = () => {
  const [candidatePage, setCandidatePage] = useState(1);
  const [filteredCandidates, setFilteredCandidates] = useState(null);

  // Sample data for the performance chart
  const performanceData = [
    { name: "JAN", presencas: 70, ausencias: 75 },
    { name: "FEV", presencas: 78, ausencias: 85 },
    { name: "MAR", presencas: 80, ausencias: 100 },
    { name: "ABR", presencas: 95, ausencias: 80 },
    { name: "MAI", presencas: 75, ausencias: 80 },
  ];

  // Sample data for the attendance pie chart
  const attendanceData = [
    { name: "Presente", value: 80, color: "#58398D" },
    { name: "Ausente", value: 20, color: "#EA5B28" },
  ];

  // Sample data for the line chart
  const myData = [
    { month: "Jan", revenue: 550, expenses: 380 },
    { month: "Fev", revenue: 850, expenses: 550 },
    { month: "Mar", revenue: 520, expenses: 350 },
    { month: "Abr", revenue: 650, expenses: 450 },
    { month: "Mai", revenue: 750, expenses: 520 },
    { month: "Jun", revenue: 650, expenses: 400 },
    { month: "Jul", revenue: 700, expenses: 380 },
    { month: "Ago", revenue: 850, expenses: 500 },
    { month: "Set", revenue: 600, expenses: 600 },
    { month: "Out", revenue: 720, expenses: 450 },
    { month: "Nov", revenue: 600, expenses: 350 },
    { month: "Dez", revenue: 950, expenses: 600 },
  ];

  // Calculate revenue statistics from myData
  const calculateRevenueStats = () => {
    // Annual revenue (sum of all months)
    const annualRevenue = myData.reduce((sum, item) => sum + item.revenue, 0);

    // Monthly revenue (average of all months)
    const monthlyRevenue = Math.round(annualRevenue / myData.length);

    // Total debt (sum of all expenses)
    const totalDebt = myData.reduce((sum, item) => sum + item.expenses, 0);

    return {
      annual: annualRevenue,
      monthly: monthlyRevenue,
      debt: totalDebt,
    };
  };

  const revenueStats = calculateRevenueStats();

  // Format numbers with commas
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  // Revenue cards data configuration
  const revenueCardsData = [
    {
      value: "1,335",
      label: "Anual",
      bgColor: "#EFFFF1",
      dotColor: "#4BD670",
      textColor: "#4BD670",
    },
    {
      value: "4,366",
      label: "Mensal",
      bgColor: "#FDF6D8",
      dotColor: "#FFAE43",
      textColor: "#FFAE43",
    },
    {
      value: "208",
      label: "Divida",
      bgColor: "#FFEDED",
      dotColor: "#FF414B",
      textColor: "#FF414B",
    },
  ];

  const handleMonthChange = (month) => {
    console.log("Month changed:", month);
    // Add your month change logic here
  };

  const handleCourseChange = (course) => {
    console.log("Course changed:", course);
    // Add your course change logic here
  };

  const handleAttendanceMonthChange = (month) => {
    console.log("Attendance month changed:", month);
    // Add your attendance month change logic here
  };

  const handleClassChange = (classOption) => {
    console.log("Class changed:", classOption);
    // Add your class change logic here
  };

  const handleRefreshProfile = () => {
    console.log("Refreshing profile...");
    // Add your refresh logic here
  };
  const defaultAgendaItems = [
    {
      id: 1,
      icon: BellIcon,
      iconBg: "bg-[#FFED9F]",
      iconColor: "text-[#FCA52B]",
      title: "Joga na proxima semana",
      description:
        "The school's Annual Sports Day will be held on May 12, 2024. Mark your",
    },
    {
      id: 2,
      icon: BellIcon2,
      iconBg: "bg-[#D6DAFF]",
      iconColor: "text-[#696FC1]",
      title: "Summer Break Start Date",
      description:
        "Summer break begins on May 25, 2024. Have a wonderful holiday!",
    },
  ];

  const candidateTableData = [
    {
      id: 1,
      candidateName: "Sarah Johnson",
      role: "Senior Developer",
      companyName: "TechCorp",
      salary: "$80K",
      time: "2h ago",
      status: "In Progress",
    },
    {
      id: 2,
      candidateName: "Sarah",
      role: "Data Scientist",
      companyName: "AI Labs",
      salary: "$85K",
      time: "3h ago",
      status: "Completed",
    },
    {
      id: 3,
      candidateName: "Michelle",
      role: "Product Manager",
      companyName: "InnovateTech",
      salary: "$90K",
      time: "5h ago",
      status: "Completed",
    },
    {
      id: 4,
      candidateName: "John",
      role: "Data Scientist",
      companyName: "DesignHub",
      salary: "$78K",
      time: "6h ago",
      status: "In Progress",
    },
    {
      id: 5,
      candidateName: "Sarah Michael",
      role: "Senior Developer",
      companyName: "CloudTech",
      salary: "$88K",
      time: "8h ago",
      status: "In Progress",
    },
    {
      id: 6,
      candidateName: "Doe",
      role: "Data Scientist",
      companyName: "WebSolutions",
      salary: "$82K",
      time: "9h ago",
      status: "Completed",
    },
    {
      id: 7,
      candidateName: "Jack",
      role: "Senior Developer",
      companyName: "ServerPro",
      salary: "$92K",
      time: "12h ago",
      status: "In Progress",
    },
    {
      id: 8,
      candidateName: "Emma Wilson",
      role: "Frontend Engineer",
      companyName: "PixelWorks",
      salary: "$76K",
      time: "14h ago",
      status: "Completed",
    },
    {
      id: 9,
      candidateName: "Liam Carter",
      role: "Backend Engineer",
      companyName: "CodeCraft",
      salary: "$89K",
      time: "16h ago",
      status: "In Progress",
    },
    {
      id: 10,
      candidateName: "Olivia Brown",
      role: "DevOps Engineer",
      companyName: "InfraSync",
      salary: "$95K",
      time: "18h ago",
      status: "Completed",
    },
    {
      id: 11,
      candidateName: "Noah Martin",
      role: "QA Engineer",
      companyName: "BugFree Labs",
      salary: "$70K",
      time: "20h ago",
      status: "In Progress",
    },
    {
      id: 12,
      candidateName: "Ava Thomas",
      role: "UI/UX Designer",
      companyName: "DesignSphere",
      salary: "$74K",
      time: "22h ago",
      status: "Completed",
    },
    {
      id: 13,
      candidateName: "William Harris",
      role: "Product Analyst",
      companyName: "DataBridge",
      salary: "$79K",
      time: "1d ago",
      status: "In Progress",
    },
    {
      id: 14,
      candidateName: "Sophia Lewis",
      role: "Scrum Master",
      companyName: "AgileNest",
      salary: "$83K",
      time: "1d ago",
      status: "Completed",
    },
    {
      id: 15,
      candidateName: "James Walker",
      role: "Security Engineer",
      companyName: "SecureNet",
      salary: "$98K",
      time: "1d ago",
      status: "In Progress",
    },
    {
      id: 16,
      candidateName: "Isabella Hall",
      role: "Data Engineer",
      companyName: "StreamCore",
      salary: "$91K",
      time: "1d ago",
      status: "Completed",
    },
    {
      id: 17,
      candidateName: "Benjamin Allen",
      role: "Mobile Developer",
      companyName: "AppForge",
      salary: "$86K",
      time: "2d ago",
      status: "In Progress",
    },
    {
      id: 18,
      candidateName: "Mia Young",
      role: "AI Engineer",
      companyName: "NeuralEdge",
      salary: "$105K",
      time: "2d ago",
      status: "Completed",
    },
    {
      id: 19,
      candidateName: "Lucas King",
      role: "Cloud Architect",
      companyName: "SkyLayer",
      salary: "$112K",
      time: "2d ago",
      status: "In Progress",
    },
    {
      id: 20,
      candidateName: "Charlotte Scott",
      role: "Business Analyst",
      companyName: "VisionGrid",
      salary: "$77K",
      time: "2d ago",
      status: "Completed",
    },
  ];

  const getStatusPillClasses = (status) =>
    status === "Completed"
      ? "bg-emerald-100 text-emerald-800"
      : "bg-blue-50 text-blue-800";

  const candidateTableColumns = [
    { key: "candidateName", label: "Candidate Name", width: "180px" },
    { key: "role", label: "Role", width: "170px" },
    { key: "companyName", label: "Company Name", width: "180px" },
    { key: "salary", label: "Salary", width: "120px" },
    { key: "time", label: "Time", width: "120px" },
    {
      key: "status",
      label: "Status",
      width: "150px",
      render: (row) => (
        <span
          className={`inline-flex h-6 min-w-[88px] items-center justify-center rounded-full px-3 text-xs font-medium ${getStatusPillClasses(
            row.status
          )}`}
        >
          {row.status}
        </span>
      ),
    },
    {
      key: "myBid",
      label: "My Bid",
      width: "150px",
      headerClassName: "text-slate-900/70",
      render: () => (
        <button
          type="button"
          className="inline-flex h-9 items-center gap-2 rounded-[10px] border border-gray-200 bg-white px-3 text-xs font-medium text-slate-900 transition-colors hover:bg-gray-50"
        >
          <FiEye className="h-4 w-4" />
          View Bid
        </button>
      ),
    },
    {
      key: "receivedBid",
      label: "Received Bid",
      width: "170px",
      headerClassName: "text-slate-900/70",
      render: () => (
        <button
          type="button"
          className="inline-flex h-9 items-center gap-2 rounded-[10px] border border-gray-200 bg-white px-3 text-xs font-medium text-slate-900 transition-colors hover:bg-gray-50"
        >
          <FiFileText className="h-4 w-4" />
          View Received
        </button>
      ),
    },
    {
      key: "action",
      label: "Action",
      width: "220px",
      headerClassName: "text-sm text-slate-900",
      render: () => (
        <div className="inline-flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-[10px] text-gray-600 transition-colors hover:bg-gray-100"
          >
            <FiEye className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-[10px] text-gray-600 transition-colors hover:bg-gray-100"
          >
            <FiEdit2 className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-[10px] text-gray-600 transition-colors hover:bg-gray-100"
          >
            <FiMessageSquare className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-[10px] text-gray-600 transition-colors hover:bg-gray-100"
          >
            <FiTrash2 className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ];

  const roleOptions = [...new Set(candidateTableData.map((item) => item.role))]
    .sort()
    .map((role) => ({ label: role, value: role }));

  const statusOptions = [...new Set(candidateTableData.map((item) => item.status))]
    .sort()
    .map((status) => ({ label: status, value: status }));

  const candidateFilters = [
    { key: "role", label: "Role", options: roleOptions },
    { key: "status", label: "Status", options: statusOptions },
  ];

  const activeCandidateData = filteredCandidates ?? candidateTableData;

  const candidateItemsPerPage = 10;
  const candidateTotalPages = Math.max(
    1,
    Math.ceil(activeCandidateData.length / candidateItemsPerPage)
  );
  const paginatedCandidateData = activeCandidateData.slice(
    (candidatePage - 1) * candidateItemsPerPage,
    candidatePage * candidateItemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 overflow-x-hidden">
      <div className="space-y-6 max-w-full">
        {/* Top Section with Left and Right Columns */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* Left Column - Main Content */}
          <div className="xl:col-span-12 space-y-6">
            <SectionHeader
              heading="Admin Dashboard"
              paragraph="Platform overview and system management"
            />
            {/* Welcome Card */}
            <div className="rounded-[1.5rem]">
              <DashboardCardsContainer />
            </div>

            {/* Three Cards Row */}
            <div className="grid grid-cols-1 lg:grid-cols-[35%_64%] gap-4 lg:gap-3">
              {/* Pie Chart */}
              <div className="w-full">
                <PieChart
                  title="Assiduidade"
                  data={attendanceData}
                  centerText="80%"
                  colors={["#58398D", "#EA5B28"]}
                  dropdownOptions={{
                    month: [
                      { label: "Abr 2025", value: "apr2025" },
                      { label: "Mar 2025", value: "mar2025" },
                      { label: "Fev 2025", value: "fev2025" },
                      { label: "Jan 2025", value: "jan2025" },
                    ],
                    class: [
                      { label: "Turma A", value: "classA" },
                      { label: "Turma B", value: "classB" },
                      { label: "Turma C", value: "classC" },
                    ],
                  }}
                  onMonthChange={handleAttendanceMonthChange}
                  onClassChange={handleClassChange}
                />
              </div>

              {/* Bar Graph - Made more responsive */}
              <div className="w-full">
                <BarGraph
                  title="Desempenho"
                  data={performanceData}
                  dataKeys={["presencas", "ausencias"]}
                  dataLabels={["Aprovado", "Reprovado"]}
                  colors={["#58398D", "#EA5B28"]}
                  height={246}
                  dropdownOptions={{
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
                  }}
                  onMonthChange={handleMonthChange}
                  onCourseChange={handleCourseChange}
                />
              </div>
            </div>

            <div className="bg-white rounded-[1.5rem]">
              <LineChart
                title="Receita Anual"
                data={myData}
                dataKeys={["revenue", "expenses"]}
                dataLabels={["Receita Mensal", "Dívida Mensal"]}
                colors={["#EA5B28", "#58398D"]}
                highlightPeriod={{ start: "Ago", end: "Set" }}
                currency="MT"
                dropdownOptions={{
                  year: [
                    { label: "2025 - 2026", value: "2025-2026" },
                    { label: "2024 - 2025", value: "2024-2025" },
                    { label: "2023 - 2024", value: "2023-2024" },
                  ],
                  period: [
                    { label: "Anual", value: "annual" },
                    { label: "Trimestral", value: "quarterly" },
                    { label: "Mensal", value: "monthly" },
                  ],
                }}
                onYearChange={(year) => console.log("Year changed:", year)}
                onPeriodChange={(period) =>
                  console.log("Period changed:", period)
                }
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-900">
                Candidate Activity
              </h2>
              <ReusableFilter
                searchConfig={{ placeholder: "Search jobs..." }}
                filters={candidateFilters}
                data={candidateTableData}
                searchFields={["candidateName", "role", "companyName", "status"]}
                onFilteredDataChange={(filtered) => {
                  setFilteredCandidates(filtered);
                  setCandidatePage(1);
                }}
              />
              <ReusableDataTable
                columns={candidateTableColumns}
                data={paginatedCandidateData}
                rowKey="id"
                emptyMessage="No candidate activity found."
              />
              <ReusablePagination
                currentPage={candidatePage}
                totalPages={candidateTotalPages}
                totalItems={activeCandidateData.length}
                itemsPerPage={candidateItemsPerPage}
                onPageChange={setCandidatePage}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
