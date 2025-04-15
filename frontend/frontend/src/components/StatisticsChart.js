import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS } from "chart.js/auto"; // Necessary import to register charts

const StatisticsChart = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/statistics")
      .then((response) => {
        setStats(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching statistics:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-gray-500 text-center mt-6">Loading statistics...</p>;
  }

  if (!stats) {
    return <p className="text-red-500 text-center mt-6">No data available.</p>;
  }

  const chartData = {
    labels: ["Records Ingested", "Files Processed", "Success Rate (%)"],
    datasets: [
      {
        label: "Ingestion Statistics",
        data: [
          stats.recordsIngested || 0,
          stats.filesProcessed || 0,
          stats.successRate || 0,
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.formattedValue}`,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded shadow p-6 mt-6">
      <h3 className="text-lg font-bold mb-4 text-center">Ingestion Statistics</h3>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default StatisticsChart;
