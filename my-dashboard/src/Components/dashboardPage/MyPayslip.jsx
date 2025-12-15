import React from "react";

const MyPayslips = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-6 p-6 bg-white rounded-2xl shadow-md">
      <div className="mb-4 w-full">
        <h2 className="text-2xl font-bold text-gray-800">
          My Payslips
        </h2>
        <p className="text-gray-500 mt-1">
          Download your monthly salary payslips
        </p>
      </div>
      <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-gray-300 rounded-2xl">
        <p className="text-gray-400 text-center text-sm sm:text-base">
          No payslips found for your account.
        </p>
        <p className="text-gray-400 text-center text-sm sm:text-base mt-2">
          If this seems wrong, please contact HR.
        </p>
      </div>

    </div>
  );
};

export default MyPayslips;
