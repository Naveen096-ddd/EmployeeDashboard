import React from "react";

const MyWallet = () => {
  const data = {
    period: "24th Nov 2025 – 23rd Dec 2025",
    earnings: 11000.33,
    workingDays: 12,
    presentDays: 11,
    attendance: 91.7,
    dailyRate: 900,
    monthlySalary: 30010,
    deductions: 0,
    provisionalEarnings: 1000,
  };
  return (
    <div className="min-h-screen p-4  dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-start  dark:text-white">
        💼 My Wallet
      </h1>
      <div className="bg-gradient-to-r from-green-300 via-green-500 to-green-700 dark:from-green-700 dark:via-green-800 dark:to-green-900 p-6 rounded-lg shadow hover:shadow-lg transition-colors duration-300">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Current Month Earnings
        </h2>
        <div className="mb-4">
          <p className="text-gray-700 dark:text-gray-300">Period: {data.period}</p>
          <p className="text-green-800 dark:text-green-400 text-2xl sm:text-3xl font-bold mt-1">
            ₹{data.earnings.toFixed(2)}
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Based on {data.presentDays} working days
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <p className="text-gray-500 dark:text-gray-400">Daily Rate</p>
            <p className="text-lg sm:text-xl font-semibold mt-1 text-gray-900 dark:text-gray-100">
              ₹{data.dailyRate.toFixed(2)}
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <p className="text-gray-500 dark:text-gray-400">Monthly Salary</p>
            <p className="text-lg sm:text-xl font-semibold mt-1 text-gray-900 dark:text-gray-100">
              ₹{data.monthlySalary}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 h-full bg-gradient-to-r from-red-300 via-red-500 to-red-700 dark:from-red-700 dark:via-red-800 dark:to-red-900 p-6 rounded-lg shadow hover:shadow-lg transition-colors duration-300">
        <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Deductions</h2>
        <p className="text-gray-900 dark:text-gray-100">Total deducted: ₹{data.deductions}</p>
        <p className="text-gray-600 dark:text-gray-300 rounded-lg shadow bg-gray-50 dark:bg-gray-800 p-2 text-sm mt-1">
          Amount will be credited back once performance improves.
        </p>
      </div>
      <div className="mt-8 bg-red-50 dark:bg-red-900 p-6 rounded-lg shadow hover:shadow-lg transition-colors duration-300">
        <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Important Notice</h2>
        <ul className="text-gray-700 dark:text-gray-300 text-sm list-disc list-inside">
          <li>Not your final salary, provisional only.</li>
          <li>Final salary and deductions credited on 30th Dec 2025.</li>
          <li>Absent days reduce earnings by ₹{data.dailyRate.toFixed(2)} per day.</li>
        </ul>
      </div>
      <div className="mt-8 bg-blue-50 dark:bg-blue-900 p-6 rounded-lg shadow hover:shadow-lg transition-colors duration-300">
        <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Weekend Leave Policy</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          Leave on Friday or Monday counts Saturday & Sunday as leave to maintain consistent attendance.
        </p>
      </div>
    </div>
  );
};

export default MyWallet;
