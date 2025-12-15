import { useState, useEffect } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AlarmIcon from '@mui/icons-material/Alarm';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [clockInTime, setClockInTime] = useState(null);
  const [clockOutTime, setClockOutTime] = useState(null);
  const [workedHours, setWorkedHours] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [workStatus, setWorkStatus] = useState("Not Working");

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const handleClockIn = () => {
    if (clockInTime && !clockOutTime) return;
    const now = new Date();
    setClockInTime(now);
    setClockOutTime(null);
    setWorkedHours(0);
    setStatusMessage("");
    setWorkStatus("Working");
    if (timerInterval) clearInterval(timerInterval);
    const interval = setInterval(() => {
        const diffMs = new Date() - now;
        setWorkedHours(diffMs / (1000 * 60 * 60));
    }, 1000);
    setTimerInterval(interval);
  };
  const handleClockOut = () => {
    if (!clockInTime) return;
    const now = new Date();
    setClockOutTime(now);
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
    const worked = (now - clockInTime) / (1000 * 60 * 60);
    setWorkedHours(worked);
    let status = "";
    if (worked < 5) status = "Absent";
    else if (worked >= 5 && worked < 9) status = "Half Day";
    else status = "Full Day Present";

    setWorkStatus(status);
    setStatusMessage("You have clocked out");
    alert(`You have clocked out. Status: ${status}`);
  };
  const formatTime = (date) =>
    date ? date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }) : "--:--:--";
   const formatWorkedHours = (hoursDecimal) => {
    const h = Math.floor(hoursDecimal);
    const m = Math.round((hoursDecimal % 1) * 60);
    return `${h}h ${m}m`;
  };
  return (
    <div className="p-4 md:p-6 w-full min-h-screen dark:bg-[#1f1f1f] text-black dark:text-white">
      <h1 className="text-3xl ">Clock In / Clock Out</h1>
      <h3 className="text-xl mb-3">View your attendance history and statistics</h3>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative bg-blue-500 text-white shadow-lg rounded-xl p-5 w-full">
          <div className="absolute top-4 left-4 flex flex-col gap-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Current Time</h2>
            <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base font-bold">
              <span>{time.toLocaleDateString(undefined, { weekday: "long" })}</span>
              <span>|</span>
              <span>{time.toLocaleDateString()}</span>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mt-28 flex flex-col items-center gap-3">
            <div className="text-4xl md:text-6xl font-bold my-4">{formatTime(time)}</div>
            {clockInTime && !clockOutTime && (
              <div className="text-base sm:text-lg md:text-xl font-semibold text-green-500">
                Currently Working..
              </div>
            )}
            {statusMessage && (
              <div className="text-sm sm:text-md md:text-lg font-medium text-red-200">
                {statusMessage}
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-2">
              <button
                onClick={handleClockIn}
                disabled={clockInTime && !clockOutTime}
                className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg w-full sm:w-auto text-sm sm:text-base md:text-lg ${
                  clockInTime && !clockOutTime ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                Clock In
              </button>
              <button
                onClick={handleClockOut}
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 w-full sm:w-auto text-sm sm:text-base md:text-lg"
              >
                Clock Out
              </button>
            </div>
          </div>
          <div className="absolute top-4 right-4 hidden md:block">
            <AccessTimeIcon sx={{ width: 40, height: 40 }} />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-white shadow-lg rounded-xl p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2"><PersonIcon />Today's Summary</h2>
            <div className="space-y-3 md:space-y-4">
              <div className="p-3 md:p-4 bg-gray-50 rounded-lg flex justify-between items-center gap-2">
                <span className="flex items-center gap-2"><AccessTimeIcon className="text-green-600" />Clock In:</span>
                <span className="font-bold">{formatTime(clockInTime)}</span>
              </div>
              <div className="p-3 md:p-4 bg-gray-50 rounded-lg flex justify-between items-center gap-2">
                <span className="flex items-center gap-2"><AccessTimeIcon className="text-red-600" />Clock Out:</span>
                <span className="font-bold">{formatTime(clockOutTime)}</span>
              </div>
              <div className="p-3 md:p-4 bg-gray-50 rounded-lg flex justify-between items-center gap-2">
                <span className="flex items-center gap-2"><CalendarTodayIcon className="text-blue-600" />Working Hours:</span>
                <span className="font-bold text-blue-600">{formatWorkedHours(workedHours)}</span>
              </div>
              <div className="p-3 md:p-4 bg-gray-50 rounded-lg flex justify-between items-center gap-2">
                <span className="flex items-center gap-2"><CheckCircleOutlineIcon />Status:</span>
                <span className={`font-bold ${workStatus === "Absent" ? "text-red-600" : workStatus === "Half Day" ? "text-orange-600" : "text-green-600"}`}>
                  {workStatus}
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2"><ErrorOutlineIcon style={{ fontSize: 24 }} />Working Hours Policy</h2>
            <div className="space-y-3 md:space-y-4">
              <div className="p-3 md:p-4 bg-gray-50 rounded-lg flex justify-between items-center gap-2">
                <span className="flex items-center gap-2"><CalendarTodayIcon className="text-blue-600" />Standard Hours:</span>
                <span className="font-bold">9:00 AM - 6:00 PM (9 hours)</span>
              </div>
              <div className="p-3 md:p-4 bg-gray-50 rounded-lg flex justify-between items-center gap-2">
                <span className="flex items-center gap-2"><AccessTimeIcon className="text-green-600" />Grace Period:</span>
                <span className="font-bold">9:00 AM - 9:05 AM</span>
              </div>
              <div className="p-3 md:p-4 bg-gray-50 rounded-lg flex justify-between items-center gap-2">
                <span className="flex items-center gap-2"><AlarmIcon className="text-orange-600" />Late Login:</span>
                <span className="font-bold">After 9:05 AM</span>
              </div>
              <div className="p-3 md:p-4 bg-gray-50 rounded-lg flex justify-between items-center gap-2">
                <span className="flex items-center gap-2"><HourglassTopIcon className="text-orange-800" />Early Logout:</span>
                <span className="font-bold">Before 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
