import React from "react";

const AgencyDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-poppins font-bold text-gray-800 mb-6">
        Agency Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-poppins font-semibold text-gray-700 mb-2">
            Candidate Pipeline
          </h3>
          <p className="text-gray-600 font-poppins">
            Manage sourcing and shortlisting.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-poppins font-semibold text-gray-700 mb-2">
            Open Roles
          </h3>
          <p className="text-gray-600 font-poppins">
            Track active jobs for partner companies.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-poppins font-semibold text-gray-700 mb-2">
            Performance
          </h3>
          <p className="text-gray-600 font-poppins">
            Review placement and conversion metrics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgencyDashboard;
