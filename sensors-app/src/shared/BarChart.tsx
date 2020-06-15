import React from "react";
import { Grid } from "@material-ui/core";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

interface IBarChart {
  data?: any[];
  xAxisName: string;
  yAxisName: string;
}

export const BarChart = (props: IBarChart) => {
  const { data: chartData, xAxisName, yAxisName } = props;

  return (
    <Grid item sm={6} xs={12}>
      <ScatterChart width={400} height={400}>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name={xAxisName} />
        <YAxis type="number" dataKey="y" name={yAxisName} />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="A school" data={chartData} fill="#8884d8" />
      </ScatterChart>
    </Grid>
  );
};

export default BarChart;
