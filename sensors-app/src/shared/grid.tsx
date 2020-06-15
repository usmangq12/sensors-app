import React from "react";
import MaterialTable from "material-table";
import { columns } from "../models/Appbar";
import { Grid } from "@material-ui/core";
import RequestService from '../services/RequestService';

interface IGridProps {
  title: string;
  columnsData: columns[];
  rows: any[];
  openDrawer: Function;
  closeDrawer: Function;
}

export default function GridComponent(props: IGridProps) {
  const { title, columnsData, rows, openDrawer, closeDrawer } = props;
  const requestService = new RequestService();

  console.log("columnsData", columnsData);
  return (
    <Grid
      item
      lg={12}
      sm={12}
      xs={12}
    >
        <MaterialTable
          columns={JSON.parse(JSON.stringify(columnsData))}
          data={JSON.parse(JSON.stringify(rows))}
          title={title}
          onRowClick={(event: any, rowData: any) => openDrawer(true, rowData)}
          isLoading={rows.length === 0}
          options={{selection: true}}
          actions={[
            {
                icon: "delete",
                tooltip: "Delete Sensor",
                onClick: (event, rowData) => requestService.deleteSensor(rowData),
            },
        ]}
        />
    </Grid>
  );
}
