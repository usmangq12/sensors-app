import React from "react";
import BarChart from "../../shared/BarChart";
import { Grid } from "@material-ui/core";
import Navbar from "../../shared/Navbar";

export const Home = () => {
  return (
    <Grid
      container
      style={{
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <Navbar />
      <BarChart />
    </Grid>
  );
};

export default Home;
