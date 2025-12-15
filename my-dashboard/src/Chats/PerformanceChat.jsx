import { Line } from "react-chartjs-2";
const PerformanceChart = () => {
  const labels = ["Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13", "Mar 15"];
  const dataPoints = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  const data = {
    labels,
    datasets: [
      {
        label: "Performance",
        data: dataPoints,
        fill: false,
        backgroundColor: "rgb(34,197,94)",
        borderColor: "rgba(34,197,94,0.7)",
        tension: 0.3,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Attendance / Performance Chart" },
    },
    scales: {
      y: {
        min: 0,
        max: 3,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="mt-6 p-4 bg-blue-50 rounded-2xl shadow-md">
      <Line data={data} options={options} />
    </div>
  );
};

export default PerformanceChart;