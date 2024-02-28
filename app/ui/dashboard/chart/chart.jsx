"use client";

import styles from "./chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sun",
    visit: 4000,
    click: 4356,
  },
  {
    name: "Mon",
    visit: 2640,
    click: 1386,
  },
  {
    name: "Tue",
    visit: 1500,
    click: 5800,
  },
  {
    name: "wed",
    visit: 4800,
    click: 7100,
  },
  {
    name: "Thu",
    visit: 2390,
    click: 1230,
  },
  {
    name: "Fri",
    visit: 5760,
    click: 6520,
  },
  {
    name: "Sat",
    visit: 4000,
    click: 1386,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#f2eeed", border:"none", borderRadius:"5%"}}/>
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke=" #ef8668"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#878a5d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
