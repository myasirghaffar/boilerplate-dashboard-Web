import React from "react";

const CompanyDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-poppins font-bold text-gray-800 mb-6">
        Company Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-poppins font-semibold text-gray-700 mb-2">
            Hiring Overview
          </h3>
          <p className="text-gray-600 font-poppins">
            Monitor company-wide hiring progress.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-poppins font-semibold text-gray-700 mb-2">
            Agency Collaboration
          </h3>
          <p className="text-gray-600 font-poppins">
            Review updates shared by partner agencies.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-poppins font-semibold text-gray-700 mb-2">
            Team Activity
          </h3>
          <p className="text-gray-600 font-poppins">
            Keep track of recruiter and manager actions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
