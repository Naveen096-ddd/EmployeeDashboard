import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

export default function AttendanceBarChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Average Attendance (%)',
        data: [92, 94, 96, 93],
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (value) => `${value}%`,
        },
      },
    },
  };

  return (
    <div className="">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Monthly Employee Attendance
      </h2>
      <div className="h-72">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
