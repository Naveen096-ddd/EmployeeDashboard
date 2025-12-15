import React, { useState } from "react";
const RequestLeave = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Leave Request Submitted:", { fromDate, toDate, reason });
    setFromDate("");
    setToDate("");
    setReason("");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      <div className="w-full lg:w-2/3">
        <div className="w-full max-w-lg p-6 bg-white rounded-2xl shadow-md hover:scale-105 transition duration-300 ease-in-out">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Request Leave
            </h2>
            <p className="text-gray-500 mt-1">
              Submit your leave requests and track their status
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm font-medium mb-1">
                From Date *
              </label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                required
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 text-sm font-medium mb-1">
                To Date *
              </label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                required
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 text-sm font-medium mb-1">
                Reason *
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
                rows={4}
                placeholder="Enter reason for leave"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Submit Leave Request
            </button>
          </form>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex-shrink-0">
        <div className="sticky top-6 p-6 bg-white rounded-2xl shadow-md h-fit">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Leave Info
          </h3>
          <p className="text-gray-500 text-sm">
            You can track your leave balance and status here.  
            Your submitted leaves will appear in this panel.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 text-sm">
            <li>Annual Leave: 12 days</li>
            <li>Sick Leave: 5 days</li>
            <li>Casual Leave: 3 days</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default RequestLeave;
