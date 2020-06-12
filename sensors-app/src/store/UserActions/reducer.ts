import { UpdateAction } from './Actions';
import { UPDATE_SENSOR, DELETE_SENSOR, READ_SENSOR } from './Action-Types';

export interface StoreState {
    updateSensor: number
}

const initialState = { updateSensor: 0 }

export default (state: StoreState = initialState, action: UpdateAction): StoreState => {
    switch(action.type) {
        case UPDATE_SENSOR: 
        return { ...state, updateSensor: state.updateSensor }
        default: 
        return state;
    }
}