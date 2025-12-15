import React from "react";

const HolidayCalendar = () => {
  const holidays = [
    { name: "New Year's Day", type: "Public", day: "Wednesday" },
    { name: "Republic Day", type: "Public", day: "Sunday" },
    {  name: "Holi", type: "Public", day: "Friday" },
    { name: "Mahavir Jayanti", type: "Optional", day: "Thursday" },
    { name: "Good Friday", type: "Public", day: "Friday" },
    { name: "Labor Day", type: "Public", day: "Thursday" },
    {  name: "Independence Day", type: "Public", day: "Friday" },
    {  name: "Raksha Bandhan", type: "Optional", day: "Saturday" },
    {  name: "Gandhi Jayanti", type: "Public", day: "Thursday" },
    {  name: "Dussehra", type: "Public", day: "Wednesday" },
    {  name: "Diwali", type: "Public", day: "Wednesday" },
    {  name: "Christmas", type: "Public", day: "Thursday" },
  ];

  return (
    <div className="min-h-screen  p-6">
      <h1 className="text-3xl font-bold text-start">Organization Holidays</h1>
      <p className="text-start ">View all public and optional holidays for 2025</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
          <div className="p-3 rounded-2xl bg-blue-400 text-white">
            <span>Public Holidays</span>
            <span className="text-2xl font-bold block mt-1">10</span>
          </div>

          <div className="p-3 rounded-2xl bg-blue-400 text-white">
            <span>Optional Holidays</span>
            <span className="text-2xl font-bold block mt-1">2</span>
          </div>
        </div>
         <h1 className="mt-8 text-3xl font-bold text-center mb-8">Holiday Calendar 2025</h1>
      <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {holidays.map((holiday) => {
          const isPublic = holiday.type === "Public";
          const bgColor = isPublic ? "bg-blue-50" : "bg-green-50";
          const borderColor = isPublic ? "border-blue-400" : "border-green-400";

          return (
            <div
              key={holiday.date}
              className={`p-4 border-l-4 ${borderColor} ${bgColor} rounded-lg shadow-md transition transform hover:-translate-y-1 hover:shadow-xl`}
            >
              <h2 className="text-xl font-bold mb-2 text-black">{holiday.name}</h2>
              <p className="text-gray-700 mb-1">
                {holiday.day}
              </p>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  isPublic ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                }`}
              >
                {holiday.type}
              </span>
            </div>
          );
        })}
      </div>
     <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <p className="mb-2">
          <span className="font-semibold">Public Holidays:</span> All employees are entitled to leave on these days with full pay.
        </p>
        <p className="mb-2">
          <span className="font-semibold">Optional Holidays:</span> Employees can choose to take leave on these days based on personal/religious preferences.
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Note:</span> If a holiday falls on a weekend (Saturday/Sunday), it may be observed on the following Monday.
        </p>
      </div>
    </div>
  );
};

export default HolidayCalendar;
