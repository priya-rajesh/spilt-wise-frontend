import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Box, Typography, Container } from "@mui/material";

const LineChart = () => {
  const chartOptions = {
    chart: {
      id: "basic-line-chart",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  const chartSeries = [
    {
      name: "Series 1",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 145, 160, 170],
    },
  ];

  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Line Chart
        </Typography>
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="line"
          height={350}
        />
      </Box>
    </Container>
  );
};

export default LineChart;
