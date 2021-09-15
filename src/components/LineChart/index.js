import React from "react";
import { Line } from "react-chartjs-2";
const data = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  datasets: [
    {
      label: "Quantidade de transações PIX",
      data: [1000, 12000, 3000, 5000, 2000, 3000, 5000, 2000, 1111, 9999, 2131],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};

const LineChart = () => {
  return <Line data={data} options={options} />;
};

export default LineChart;
