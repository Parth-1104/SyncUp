import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { chartData } from "../assets/data"; // Importing data

export const LineChartComponent = () => {
  return (
    <ResponsiveContainer width={"100%"} height={270}>
      <LineChart data={chartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="2 2" />
        <Line
          type="monotone" // Defines the curve type (monotone for smooth lines)
          dataKey="total" // Key to extract values for the line
          stroke="#ED8247" // Line color
          strokeWidth={2} // Line thickness
          dot={{ r: 4 }} // Dot size at data points
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
