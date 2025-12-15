import React, { useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import EventNote from "@mui/icons-material/EventNote";
import LineChart from "../../Chats/LineChat";
import BarChart from "../../Chats/BarChat";
const Home = () => {
  const [time, setTime] = useState(new Date());

  return (
    <div className="p-3 w-full h-full">
      <h1 className="text-2xl font-bold">Welcome back, Menda Naveen!</h1>
      <p className="text-gray-500 mt-1 mb-3">Here's your overview for today and this month</p>
      <div className="bg-blue-500 text-white shadow-lg rounded-xl p-5 w-full">
        <div className="flex justify-between p-1 text-xl sm:text-2xl">
          <div>Today's Status</div>
          <div className="flex items-center hover:bg-gray-600 rounded-lg p-1 transition hidden sm:block">
            <AccessTimeIcon sx={{ width: 40, height: 40 }} />
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-bold ml-2 pb-2">
          <span>{time.toLocaleDateString(undefined, { weekday: "long" })}</span>
          <span>|</span>
          <span>{time.toLocaleDateString()}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
          <div className="p-3 rounded-2xl bg-blue-400 text-white">
            <span>Login Time</span>
            <span className="text-2xl font-bold block mt-1">--:--:--</span>
          </div>

          <div className="p-3 rounded-2xl bg-blue-400 text-white">
            <span>Logout Time</span>
            <span className="text-2xl font-bold block mt-1">--:--</span>
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full p-4 rounded-2xl bg-blue-400 text-white flex flex-col gap-1">
            <span className="text-sm">Status</span>
            <span className="text-2xl font-bold">Present</span>
            <span className="text-sm">Login Record</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
        <div className="relative p-4 rounded-2xl bg-blue-400 text-white hover:scale-105 transition">
          <span className="text-sm">Present Days</span>

          <CheckCircleOutlineIcon
            sx={{ width: 40, height: 40, color: "green" }}
            className="absolute right-2 top-1/4 -translate-y-1/2 bg-white rounded-xl p-1 hidden sm:block"
          />
          <span className="text-2xl font-bold mt-4 block">--:--:--</span>
        </div>
        <div className="relative p-4 rounded-2xl bg-blue-400 text-white hover:scale-105 transition">
          <span className="text-sm">Absent Days</span>

          <EventNote
            sx={{ width: 40, height: 40, color: "white" }}
            className="absolute right-2 top-1/4 -translate-y-1/2 bg-red-600 rounded-xl p-1 hidden sm:block"
          />
          <span className="text-2xl font-bold mt-4 block">--:--:--</span>
        </div>
        <div className="relative p-4 rounded-2xl bg-blue-400 text-white hover:scale-105 transition">
          <span className="text-sm">Performance</span>
          <StarBorderIcon
            sx={{ width: 40, height: 40, color: "white" }}
            className="absolute right-2 top-1/4 -translate-y-1/2 bg-purple-600 rounded-xl p-1 hidden sm:block"
          />
          <span className="text-2xl font-bold mt-4 block">--:--:--</span>
        </div>
        <div className="relative p-4 rounded-2xl bg-blue-400 text-white hover:scale-105 transition">
          <span className="text-sm">Month Earnings</span>
          <AccountBalanceWallet
            sx={{ width: 40, height: 40, color: "blue" }}
            className="absolute right-2 top-1/4 -translate-y-1/2 bg-white rounded-xl p-1 hidden sm:block"
          />
          <span className="text-2xl font-bold mt-4 block">--:--:--</span>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-xl shadow-lg h-72 md:h-auto">
          <BarChart />
        </div>

        <div className="bg-white p-5 rounded-xl shadow-lg h-72 md:h-auto">
          <LineChart />
        </div>
      </div>

    </div>
  );
};

export default Home;
