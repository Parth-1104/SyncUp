import React from "react";
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { chartData } from "../assets/data"; 

export const PieChartComponent = () => {
  const COLORS = ["#ED8247", "#4CAF50", "#2196F3", "#FFC107", "#9C27B0"]; 

  return (
    <ResponsiveContainer width={"100%"} height={270}>
      <PieChart>
        <Pie
          data={chartData}
          dataKey="total"
          nameKey="name" 
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#ED8247"
          
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};
