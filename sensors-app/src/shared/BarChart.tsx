import React from "react";
import { Grid } from "@material-ui/core";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
  { x: 90, y: 201, z: 200 },
  { x: 128, y: 120, z: 260 },
  { x: 17, y: 30, z: 400 },
  { x: 14, y: 20, z: 280 },
  { x: 15, y: 40, z: 500 },
  { x: 11, y: 220, z: 200 },
  { x: 108, y: 210, z: 200 },
  { x: 127, y: 10, z: 260 },
  { x: 178, y: 30, z: 400 },
  { x: 148, y: 245, z: 280 },
  { x: 158, y: 434, z: 500 },
  { x: 112, y: 285, z: 200 },
];

export const BarChart = (props: any) => {

  return (
    <Grid item sm={12} xs={12} style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
        <ScatterChart width={400} height={400} style={{display: "flex", alignItems: "center"}}>
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="A school" data={data} fill="#8884d8" />
        </ScatterChart>
      </Grid>
  );
};

export default BarChart;
