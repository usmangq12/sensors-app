import { UPDATE_SENSOR, DELETE_SENSOR, READ_SENSOR } from './Action-Types';

export interface UpdateAction {
    type : UPDATE_SENSOR;
}

export interface DeleteAction {
    type: DELETE_SENSOR;
}

export interface ReadAction {
    type: READ_SENSOR;
}

export function updateSensor(): UpdateAction {
    return {
        type: UPDATE_SENSOR
    }
} 

// export function deleteSensor(): DeleteAction {
//     return {
//         type: DeleteAction
//     }
// }

export function readSensor(): ReadAction {
    return {
        type: READ_SENSOR
    }
} 