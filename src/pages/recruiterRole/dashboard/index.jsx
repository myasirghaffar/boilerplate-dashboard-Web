import React from "react";

const RecruiterDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-poppins font-bold text-gray-800 mb-6">
        Recruiter Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-poppins font-semibold text-gray-700 mb-2">
            Assigned Roles
          </h3>
          <p className="text-gray-600 font-poppins">
            View and manage your assigned job openings.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-poppins font-semibold text-gray-700 mb-2">
            Interviews
          </h3>
          <p className="text-gray-600 font-poppins">
            Track candidate interview schedules.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-poppins font-semibold text-gray-700 mb-2">
            Candidate Status
          </h3>
          <p className="text-gray-600 font-poppins">
            Update and review candidate progress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
