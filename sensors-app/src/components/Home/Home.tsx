import React, { useState, useEffect } from "react";
import BarChart from "../../shared/BarChart";
import { Grid } from "@material-ui/core";
import Appbar from "../../shared/Appbar";
import CustomGrid from "../../shared/grid";
import Drawer from "../../shared/Drawer";
import EditSensor from "../UpdateSensor/UpdateSensor";
import RequestService from '../../services/RequestService';
import {IRowsData, IColumnsData, IChartData} from '../../models/home';

export const Home = () => {
  // let sensorsList: any[] = [];
  const [rowsData, setRowsData] = useState<IRowsData[]>([]);
  const [columnsData, setColumnsData] = useState<IColumnsData[]>([]);
  const [firstChartData, setFirstChartData] = useState<IChartData[]>([]);
  const [secondChartData, setSecondChartData] = useState<IChartData[]>([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const columnNames = ["Id", "Sensor 1", "Sensor 2", "Sensor 3", "Sensor 4"];
  const requestService = new RequestService()

  useEffect(() => {
    getSensors();
  }, []);

  const getSensors = () => {
    requestService.getSensorsData("sensors").then((sensorsList: IRowsData[]) => {
        setRowsData(sensorsList);
        handleColumnsData(sensorsList);
        handleFirstChartData(sensorsList);
        handleSecondChartData(sensorsList);
      })
      .catch((error) => {
        console.log("Error");
      });
  };

  const handleColumnsData = (sensors: IRowsData[]) => {
    let columns: any[] = [];
    const keys = Object.keys(sensors[0]);
    keys.filter((x: any, index: number) =>
      columns.push({
        title: columnNames[index],
        field: x,
      })
    );
    setColumnsData(columns);
  };

  const handleFirstChartData = (sensors: IRowsData[]) => {
    const filteredSensors: any[] = [];
    sensors.filter((element: any) =>
      filteredSensors.push({ x: element.z1, y: element.z2 })
    );
    setFirstChartData(filteredSensors);
  };

  const handleSecondChartData = (sensors: IRowsData[]) => {
    const filteredSensors: any[] = [];
    sensors.filter((element: any) =>
      filteredSensors.push({ x: element.z3, y: element.z4 })
    );
    setSecondChartData(filteredSensors);
  };

  const handleDrawer = (value: boolean, selectedRow: any) => {
    setOpenDrawer(value);
    setSelectedRow(selectedRow);
  };

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
        overflow: "auto",
      }}
    >
      <Appbar />
      <h1
        style={{ marginTop: 70, justifyContent: "center", textAlign: "center" }}
      >
        Tabular Representation
      </h1>
      {rowsData && columnsData ? (
        <CustomGrid
          title="Sensors List"
          rows={rowsData}
          columnsData={columnsData}
          openDrawer={(value: boolean, selectedRow: IRowsData) =>  handleDrawer(value, selectedRow)} 
          closeDrawer={(value: boolean) => setOpenDrawer(value)}
        />
      ) : null}
      {openDrawer && selectedRow ? (
        <Drawer
          openDrawer={openDrawer}
          closeDrawer={(value: boolean) => setOpenDrawer(value)}
          selectedRow={selectedRow}
          DrawerComponent={EditSensor}
        />
      ) : null}

      <Grid item sm={12} xs={12}>
        <h1
          style={{
            marginTop: 10,
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Graphical Representation
        </h1>
      </Grid>

      <Grid
        style={{
          marginTop: 10,
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        <h3
          style={{
            marginTop: 10,
            marginLeft: 110,
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Sensor 1 and Sensor 2 Data Representation
        </h3>
      </Grid>

      <Grid
        style={{
          marginTop: 10,
          justifyContent: "center",
          marginLeft: 280,
          textAlign: "center",
        }}
      >
        <h3
          style={{
            marginTop: 10,
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Sensor 3 and Sensor 4 Data Representation
        </h3>
      </Grid>

      <Grid
        item
        sm={6}
        xs={12}
        style={{
          marginTop: 10,
          justifyContent: "center",
          textAlign: "center",
          display: "flex",
        }}
      >
        {firstChartData ? (
          <BarChart data={firstChartData} xAxisName="S1" yAxisName="S2" />
        ) : null}
      </Grid>
      <Grid
        item
        sm={6}
        xs={12}
        style={{
          marginTop: 10,
          justifyContent: "center",
          textAlign: "center",
          display: "flex",
        }}
      >
        {secondChartData ? (
          <BarChart data={secondChartData} xAxisName="S3" yAxisName="S4" />
        ) : null}
      </Grid>
    </Grid>
  );
};

export default Home;
