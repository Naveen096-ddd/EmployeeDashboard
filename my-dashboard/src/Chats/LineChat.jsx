import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function PerformanceLineChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Average Performance Score',
        data: [3.8, 4.0, 4.2, 4.1], 
        borderColor: 'rgba(236, 72, 153, 1)',
        backgroundColor: 'rgba(236, 72, 153, 0.3)',
        tension: 0.4,
        fill: true,
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
        max: 5,
      },
    },
  };

  return (
    <div className="">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Monthly Employee Performance
      </h2>
      <div className="h-72">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
