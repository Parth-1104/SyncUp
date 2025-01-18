import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";


export const Chart = ({data}) => {
  return (
    <ResponsiveContainer width={"100%"} height={220}>
      <BarChart width={150} height={40} data={data}>
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray='2 2' />
        <Bar dataKey='total' fill='#ED8247' barSize={40}/>
      </BarChart>
    </ResponsiveContainer>
  );
};
