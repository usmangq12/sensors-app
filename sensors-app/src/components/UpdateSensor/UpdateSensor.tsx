import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';
import { Button, TextField, Grid } from "@material-ui/core";
import { UpdateSensor, IUpdateSensor } from "../../models/UpdateSensor";
import RequestService from '../../services/RequestService';
import {IColumnsData} from '../../models/home';

interface IEditSensor {
  selectedRow: any;
  closeDrawer: Function
}

export const EditSensor = (props: IEditSensor) => {
  const { selectedRow, closeDrawer } = props;
  const [updateSensor, setUpdateSensor] = useState(new UpdateSensor());
  const requestService = new RequestService();
  const history = useHistory();

  useEffect(() => {
    let data = selectedRow ? selectedRow : new UpdateSensor();
    setUpdateSensor(data);
  }, [selectedRow]);

  const handleSubmit = () => {
    requestService.updateUserData("update", updateSensor).then((response: any) => {
      console.log('response in updateSensor component:', response)
      history.push('/home')
    })
    console.log("handle submit called.");
  };

  const handleCancel = () => {
    closeDrawer(true);
    console.log("handleCancel called");
  };

  return (
    <form>
      <Grid
        container
        direction={"column"}
        style={{ marginLeft: 10, marginRight: 10, display: "flex" }}
      >
        <Grid item sm={12} xs={6}>
          <TextField
            id="firstSensorId"
            label="Sensor One"
            value={updateSensor.z1}
            onChange={(event: any) =>
              setUpdateSensor({
                ...updateSensor,
                z1: event.target.value,
              })
            }
            style={{ width: "calc(50% - 20px)", marginRight: 10 }}
          />

          <TextField
            id="secondSensorId"
            label="Sensor Two"
            value={updateSensor.z2}
            onChange={(event: any) =>
              setUpdateSensor({
                ...updateSensor,
                z2: event.target.value,
              })
            }
            style={{ width: "calc(50% - 20px)" }}
          />

          <TextField
            id="thirdSensorId"
            label="Sensor Three"
            value={updateSensor.z3}
            onChange={(event: any) =>
              setUpdateSensor({
                ...updateSensor,
                z3: event.target.value,
              })
            }
            style={{ width: "calc(50% - 20px)", marginRight: 10 }}
          />

          <TextField
            id="fourthSensorId"
            label="Sensor Four"
            value={updateSensor.z4}
            onChange={(event: any) =>
              setUpdateSensor({
                ...updateSensor,
                z4: event.target.value,
              })
            }
            style={{ width: "calc(50% - 20px)" }}
          />
          <div style={{ position: "absolute", right: 20, bottom: 20 }}>
            <Button
              variant="contained"
              onClick={handleCancel}
              style={{
                textAlign: "center",
                marginRight: 10,
                backgroundColor: "#FF2525",
              }}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              onClick={handleSubmit}
              style={{ textAlign: "right", backgroundColor: "#e3a624" }}
            >
              Submit
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditSensor;
