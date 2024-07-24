import { Paper } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";

const IncomeExpensesChart = () => {
  const data = {
    series: [
      {
        name: "Income",
        data: [5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000], // Example data for income
      },
      {
        name: "Expenses",
        data: [3000, 4000, 3500, 5000, 4500, 6000, 5500, 7000], // Example data for expenses
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 350,
      },
      title: {
        text: "Income vs. Expenses",
        align: "left",
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"], // Example categories (months)
      },
      yaxis: {
        title: {
          text: "Amount",
        },
      },
      stroke: {
        curve: "smooth",
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div id="chart">
      <Paper sx={{ p: 3 }}>
        <Chart
          options={data.options}
          series={data.series}
          type="line"
          height={350}
        />
      </Paper>
    </div>
  );
};

export default IncomeExpensesChart;
