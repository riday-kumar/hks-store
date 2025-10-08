import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChart = ({ data }) => {
  // console.log(data);
  return (
    <div className="w-[95%] md:w-[80%] mx-auto h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />

          <Bar dataKey="count" barSize={40} fill="#00d390" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
